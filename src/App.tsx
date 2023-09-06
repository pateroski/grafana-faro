import { Deck, DefaultTemplate } from 'spectacle'

import './index.css'
import { TitleSlide } from './slides/TitleSlide'
import { WhoAreUs } from './slides/WhoareUs'

const theme = {
  colors: {
    primary: '#3F3F3F',
    secondary: '#878787',
    tertiary: '#FFEE00',
  },
  fonts: {
    header: 'Montserrat',
    text: 'Helvetica',
    monospace: 'JetBrains Mono',
  },
  fontSizes: {
    header: '64px',
    text: '32px',
    monospace: '24px',
  },
}

function App() {
  return (
    <Deck template={<DefaultTemplate />} theme={theme}>
      <TitleSlide />
      <WhoAreUs />
    </Deck>
  )
}

export default App
