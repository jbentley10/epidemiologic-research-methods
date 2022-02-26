/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from '@mui/material'
import Navigation from '../components/navigation'
import Hero from '../components/hero'

// Import styles
import { epiTheme } from '../styles/epiTheme'

export default function Home() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero />
    </ThemeProvider>
  )
}
