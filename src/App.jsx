import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import Router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
})
export default function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
    <GlobalStyles/>
    <Router/>
    <Toaster
    position='top-center'
    gutter={12}
    containerStyle={{margin:'8px'}}
    toastOptions={
      {
        success:{
          duration:3000
        },
        error:{
          duration:5000
        },
        style:{
          fontSize:'16px',
          padding:'16px 24px',
          maxWidth:'500px',
          backgroundColor:'var(--color-grey-0)',
          color:'var(--color-grey-700)'
        }
      }
    }
    
    />
    </QueryClientProvider>
   
  )
}
