import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './pages/styles/global.js'

import theme from './pages/styles/theme.js'

import { Details } from './pages/Details/Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)