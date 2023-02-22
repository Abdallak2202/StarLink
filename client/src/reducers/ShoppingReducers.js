import {GET_NAME_PRODUCT, TYPES} from "../actions/ShoppingAction";

//inicializamos los estados
export const shoppingInitialState = {
    products: [
        {
          "id": 1,
          "ID": "",
          "name": "Basico",
          "description": "Sin servicio de atencion permanente",
          "price": 700,
          "processing": null,
          "RAM": 1,
          "SSD": 10,
          "transfer": 1,
          "published_at": "2023-02-10T20:46:28.831Z",
          "created_at": "2023-02-10T20:42:30.035Z",
          "updated_at": "2023-02-10T20:46:29.294Z",
          "processor": 1
        },
        {
          "id": 2,
          "ID": null,
          "name": "Nivel 1",
          "description": "Con atención basica minima requerida",
          "price": 1300,
          "processing": null,
          "RAM": 1,
          "SSD": 20,
          "transfer": 2,
          "published_at": "2023-02-10T20:47:45.265Z",
          "created_at": "2023-02-10T20:47:36.480Z",
          "updated_at": "2023-02-10T20:47:45.714Z",
          "processor": 2
        },
        {
          "id": 3,
          "ID": null,
          "name": "Intermedio",
          "description": "Atencion por llamada",
          "price": 2200,
          "processing": null,
          "RAM": 4,
          "SSD": 30,
          "transfer": 2,
          "published_at": "2023-02-10T20:49:00.649Z",
          "created_at": "2023-02-10T20:48:43.814Z",
          "updated_at": "2023-02-10T20:49:01.408Z",
          "processor": 2
        },
        {
          "id": 4,
          "ID": null,
          "name": "Avanzado",
          "description": "Atencion 24x7",
          "price": 3000,
          "processing": null,
          "RAM": 4,
          "SSD": 40,
          "transfer": 3,
          "published_at": "2023-02-10T20:49:53.680Z",
          "created_at": "2023-02-10T20:49:48.711Z",
          "updated_at": "2023-02-10T20:49:54.470Z",
          "processor": 4
        },
        {
          "id": 5,
          "ID": null,
          "name": "Plus",
          "description": "Atencion 24x7",
          "price": 5200,
          "processing": null,
          "RAM": 8,
          "SSD": 50,
          "transfer": 5,
          "published_at": "2023-02-10T20:50:49.471Z",
          "created_at": "2023-02-10T20:50:44.073Z",
          "updated_at": "2023-02-10T20:50:49.881Z",
          "processor": 8
        }
      ],
    cart:[],
    };

    //funcion reductora donde crea la logica funcional
export default function shoppingReducer(state= initialState, action) {
    switch(action.type){
        case GET_NAME_PRODUCT:
         return {
            ...state,
            product: action.payload,
         }

    
            case TYPES.ADD_TO_CART: {
                // const newItem = action.payload
                // const existItem = state.cart.cartItems.find(el => el.id === newItem.id)
                // una condicion para actualizar si existe el item o guardar sino existe
                // const cartItems = existItem ? state.cartItems.map(el => el.name === existItem.name ? newItem: el)
    
                // si no existe entonces guardar el primer items
                // :
                // [...state.cart.cartItems, newItem]
    
                // return {...state, cart:{...state.cart, cartItems}}
            }
            case TYPES.REMOVE_ONE_FROM_CART: {
            }
            case TYPES.REMOVE_ALL_FROM_CART: {
            }
            case TYPES.CLEAR_CART: {
            }

    default:
        return state;
        }
  
    }