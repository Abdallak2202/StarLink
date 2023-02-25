import { getTokenFromLocalCookie } from "./auth";
import { fetcher } from "./getUsers";

export const setNewCloudService = async(data) => {
    const jwt = getTokenFromLocalCookie();
        if (jwt) {
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/cloud-servers`, {
           method: "post",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${jwt}`,
           },
           body: JSON.stringify(data),
         })
        
         console.log(response);
        
    } catch (error) {
       console.log({error}); 
    }
  }
}

