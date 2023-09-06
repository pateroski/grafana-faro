import { Deck, DefaultTemplate } from 'spectacle'

import './index.css'
import { TitleSlide } from './slides/00_TitleSlide'
import { WhoAreUs, AndresReyes, FrankGonzalez } from './slides/01_WhoAreUs'
import { Topics } from './slides/02_Topics'

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
      <AndresReyes />
      <FrankGonzalez />
      <Topics />
    </Deck>
  )
}

export default App
