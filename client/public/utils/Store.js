import { useReducer, createContext} from 'react'


    const Store = createContext() 


//}

//el estado inicial de nuestra variable de estado
const initialState = {
cart: {
    cartItems:[]
}

}

//funcion reductora donde crea la logica funcional
function reducer(state, action){

    switch (action.type){
        case 'CARD_ADD_ITEM': {
            const newItem = action.payload
            const existItem = state.cart.cartItems.find(el => el.id === newItem.id)
            // una condicion para actualizar si existe el item o guardar sino existe
            const cartItems = existItem ? state.cartItems.map(el => el.id === existItem.id ? newItem: el)

            // si no existe entonces guardar el primer items
            :
            [...state.cart.cartItems, newItem]

            return {...state, cart:{...state.cart, cartItems}}
        }
default:
    return state;
    }


}

//funcion para crear el store y envolver a los comp hijos

export function StoreProvider({children}){
const [state, dispatch] = useReducer(reducer, initialState)
const value = {state, dispatch}
return <Store.Provider value={value}>{children}</Store.Provider>

}

