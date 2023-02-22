import axios from 'axios';
export const GET_NAME_PRODUCT = 'GET_NAME_PRODUCT'



    export function obtenerDatos() {
        return async function(dispatch) {
           var info = await axios('https://star-link-back-end-production.up.railway.app/cloud-servers', {
     
           });
           return dispatch({type:"GET_NAME_PRODUCT", payload: info.data});
        };
      }
     

export const TYPES = {


ADD_TO_CART:"ADD_TO_CART",
REMOVE_ONE_FROM_CART:"REMOVE_ONE_FROM_CART",
REMOVE_ALL_FROM_CART:"REMOVE_ALL_FROM_CART",
CLEAR_CART:"CLEAR_CART",
};