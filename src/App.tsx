import { Deck, Slide, Heading, DefaultTemplate, FlexBox } from 'spectacle'
import Front from './assets/images/front.png'
import Back from './assets/images/back.png'
import './index.css'

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
      <Slide backgroundImage={`url(${Front})`}>
        <FlexBox flexDirection="column" justifyContent="center" flexBasis="100%">
          <Heading>🔭 Grafana Faro: RUM with OpenTelemetry for React Apps ⚛️</Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundImage={`url(${Back})`}>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>
    </Deck>
  )
}

export default App
