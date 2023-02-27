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

export const getCloudService = async(data) => {
    const jwt = getTokenFromLocalCookie();
        if (jwt) {
    try {
        const response = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/cloud-servers`, {
           headers: {
             Authorization: `Bearer ${jwt}`,
           },
         })
        
        return response;
        
    } catch (error) {
       console.log({error}); 
    }
  }
}

// /cloud-servers/:id

export const deleteCloudService = async(id) => {
  console.log(typeof(id));
  const jwt = getTokenFromLocalCookie();
  console.log(jwt);
      if (jwt) {
  // try {
  //     const response = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/cloud-servers/${id}`, {
  //        headers: {
  //         method: "DELETE",
  //          Authorization: `Bearer ${jwt}`,
  //        },
  //      })
      
  //     return response;
      
  // } catch (error) {
  //    console.log({error}); 
  // }
  var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${jwt}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${process.env.NEXT_PUBLIC_API_URL}/cloud-servers/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
}

