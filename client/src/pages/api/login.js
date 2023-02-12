import { magicAdmin } from "lib/magic";
import jwt from "jsonwebtoken"
import { createNewUser, isNewUser } from "lib/db/hasura";
import { setTokenCookie } from "lib/cookie";

export default async function login(req, res) {
    if (req.method === "POST") {
      try {
        const auth = req.headers.authorization;
        // console.log({auth});
        const didToken = auth ? auth.slice(7) : '';
        // console.log({ didToken });

        const metadata = await magicAdmin.users.getMetadataByToken(didToken);
        // console.log({ metadata });

        // create jwt

       
      const token = jwt.sign(
        {
          ...metadata,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${metadata.issuer}`,
          },
        },
        process.env.JWT_SECRET
      );
    //   console.log({ token });
// CHECK IF USER EXISTS

const isNewUserQuery = await isNewUser(token, metadata.issuer);
if (isNewUserQuery) {
    const createNewUserMutation = await createNewUser(token, metadata);
    console.log({ createNewUserMutation });
    //set the cookie
    const cookie = setTokenCookie(token,res);
    console.log({ cookie });
    res.send({ done: true, msg: "is a new user" });
  } else {
    const cookie = setTokenCookie(token,res);
    console.log({ cookie });
    res.send({ done: true, msg: "not a new user" });
  }
        // const metadata = await magicAdmin.users.getMetaDataByToken(didtoken);
        // console.log({metadata});
        // res.send({ done: true });
      } catch (error) {
        console.error("Something went wrong logging in", error);
        res.status(500).send({ done: false });
      }
    } else {
      res.send({ done: false });
    }
  }