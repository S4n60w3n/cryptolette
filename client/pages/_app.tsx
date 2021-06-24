import { NextPage } from 'next'
import React from 'react'

import { ClientRender } from '../components/ClientRender'

import '../styles/globals.css'

type Props = {
  pageProps: any
  Component: NextPage
}

const MyApp: NextPage<Props> = ({ pageProps, Component }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <ClientRender>
        <Component />
      </ClientRender>
    )
  }
  return <Component {...pageProps} />
}
MyApp.displayName = '_app'

export default MyApp
