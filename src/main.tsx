import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme
      appearance='dark'
      accentColor='sky'
      grayColor='sand'
      radius='none'
      scaling='90%'
    >
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
)
