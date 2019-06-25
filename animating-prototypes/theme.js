import React from 'react'

const Provider = props => (
  <div
  css={{
    li: {
      listStyle: 'none'
    },
    h1: {
      lineSpacing: '0.1rem'
    }
  }}>
    {props.children}
    <div
      css={{
        color: 'white',
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16
      }}
    >
      Made with ❤️ by DS  &copy; 2019
    </div>
  </div>
)

export default {
  Provider,
}
