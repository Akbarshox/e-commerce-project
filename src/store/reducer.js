export default function reducer(state, action) {
   switch (action.type) {
      case 'ADD_TO_CART':
         const exist = state.cart.some(p => p.id === action.payload.id);
         if (exist) {
            const data = state.cart.map(el => el.id === action.payload.id ? {...el, ["amount"]: el.amount++} : el);
            return {
               ...state, cart: data
            }
         } else
            return {
               ...state, cart: [...state.cart, action.payload]
            }
      case 'INCREMENT_CART':
         const incrementData = state.cart.map(el => el.id === action.payload.id ? {...el, ["amount"]: el.amount + 1} : el);
         return {
            ...state, cart: incrementData
         }
      case 'DECREMENT_CART':
         const decrementData = state.cart.map(el => el.id === action.payload.id ? {...el, ["amount"]: el.amount - 1} : el);
         return {
            ...state, cart: decrementData
         }
      case 'REMOVE_FROM_CART':
         return {
            ...state, cart: state.cart.filter(el => el.id !== action.payload.id)
         }
   }
}