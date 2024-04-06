import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './Contexts/theme'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)