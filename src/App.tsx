import { Deck, DefaultTemplate } from 'spectacle'

import './index.css'
import { ThanksTo, TitleSlide } from './slides/00_TitleSlide'
import { WhoAreUs, AndresReyes, FrankGonzalez } from './slides/01_WhoAreUs'
import { TopicList, Topics } from './slides/02_Topics'
import {
  WhatIsGFSection,
  GrafanaFaroDiagram,
  GrafanaFaroDescription1,
  GrafanaFaroDescription2,
  GrafanaFaroDescription3,
  WhyGFSection,
  GrafanaFaroDescription4,
  GrafanaFaroDescription5,
  GrafanaFaroDescription6,
} from './slides/03_WhatIsAndWhyGF'
import { GrafanaFaro101Section, WhatIsGFSDK1, WhatIsGFSDKSection } from './slides/04_GF101'
import { GrafanaAndReactSection } from './slides/XX_01_GrafanaAndReact'

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
    <Deck template={<DefaultTemplate color="#3F3F3F" />} theme={theme}>
      <TitleSlide />
      <ThanksTo />
      <WhoAreUs />
      <FrankGonzalez />
      <AndresReyes />
      <Topics />
      <TopicList />
      <WhatIsGFSection />
      <GrafanaFaroDescription1 />
      <GrafanaFaroDescription2 />
      <GrafanaFaroDescription3 />
      <GrafanaFaroDiagram />
      <WhyGFSection />
      <GrafanaFaroDescription4 />
      <GrafanaFaroDescription5 />
      <GrafanaFaroDescription6 />
      <GrafanaFaro101Section />
      <WhatIsGFSDKSection />
      <WhatIsGFSDK1 />
      <GrafanaAndReactSection />
    </Deck>
  )
}

export default App
