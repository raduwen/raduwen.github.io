import React from 'react'
import App from 'next/app'

import '@/styles/global.css'

// import '@exampledev/new.css/new.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
