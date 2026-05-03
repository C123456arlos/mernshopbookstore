// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from '../redux/features/cart/cartSlice'
// import booksApi from './features/cart/booksApi'

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         [booksApi.reducerPath]: booksApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(booksApi.middleware)
// })


import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import booksApi from './features/books/booksApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})