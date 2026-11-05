import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'

// The Pardes design is light-only: <html data-theme="light"> is set in the root layout
export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <HeaderThemeProvider>{children}</HeaderThemeProvider>
}
