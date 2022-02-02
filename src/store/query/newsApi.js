import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL, DOT_JSON } from '../../api'

const tagType = 'newsApiTag'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    tagTypes: [tagType],
    baseQuery: fetchBaseQuery({ 
        baseUrl: API_URL 
    }),
    endpoints: builder => ({
        getNews: builder.query({
            query: () => `news${DOT_JSON}`,
            providesTags: () => [tagType]
        }),
        addNews: builder.mutation({
            query: ({ body }) => ({
                url: `news${DOT_JSON}`,
                method: 'POST',
                body
            }),
            invalidatesTags: [tagType]
        }),
        deleteNews: builder.mutation({
            query: ({ id }) => ({
                url: `news/${id}${DOT_JSON}`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagType]
        }),
        changeNews: builder.mutation({
            query: ({ approve , id }) => ({
                url: `news/${id}${DOT_JSON}`,
                method: 'PATCH',
                body: {
                    isApproved: approve
                }
            }),
            invalidatesTags: [tagType]
        }),
    })
})

export const {  useGetNewsQuery , useAddNewsMutation , useDeleteNewsMutation , useChangeNewsMutation } = newsApi