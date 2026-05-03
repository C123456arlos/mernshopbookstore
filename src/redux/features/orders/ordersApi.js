// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import getBaseUrl from "../../../utils/baseURL";

// const ordersApi = createApi({
//     reducerPath: 'ordersApi',
//     baseQuery: fetchBaseQuery({
//         // baseUrl: `${getBaseUrl()}/api/order`,
//         baseUrl: `http://localhost:5000/api/order`,
//         credentials: 'include'
//     }),
//     tagTypes: ['Orders'],
//     endpoints: (builder) => ({
//         createOrder: (builder.mutation)({
//             query: (newOrder) => ({
//                 url: '/',
//                 method: 'POST',
//                 body: newOrder,
//                 credentials: 'include'
//             })
//         })
//     })
// })
// export const { useCreateOrderMutation } = ordersApi
// export default ordersApi



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";



const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api/orders`,
        credentials: 'include'
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: (builder.mutation)({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: 'include',
            })
        }),
        getOrderByEmail: (builder.query)({
            query: (email) => ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        })
    })
})

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;

export default ordersApi;



