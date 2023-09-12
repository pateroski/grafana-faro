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
import {
  GrafanaFaro101Section,
  Instrumentations1,
  Instrumentations2,
  Instrumentations3,
  Instrumentations4,
  Instrumentations5,
  TracingSlide,
  WhatIsGFSDK1,
  WhatIsGFSDK2,
  WhatIsGFSDKSection,
} from './slides/04_GF101'
import {
  GrafanaAndReactSection,
  WhyReact,
  ReactAsPowerFullTool,
  FaroReactPackage,
  GFRFeatureErrorBoundaries,
  GFRFeatureComponentProfiler,
  GFRFeatureFaroRoutes,
} from './slides/05_GrafanaAndReact'
import {
  HowWeImplementGrafanaAndReactSection,
  GFRInitialize,
  GrafanaFaroPostRequest,
} from './slides/06_HowWeImplementGrafanaAndReact'
import { CasoUsoAgentsSection } from './slides/07_AgentsUseCase'
import { GrafanaVentajasSection, OthersRUMS, AdvantagesOfUse } from './slides/08_Ventajas'
import { GrafanaScenesSection } from './slides/09_Bonus'

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
    monospace: '16px',
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
      <WhatIsGFSDK2 />
      <Instrumentations1 />
      <Instrumentations2 />
      <Instrumentations3 />
      <Instrumentations4 />
      <Instrumentations5 />
      <TracingSlide />
      <GrafanaAndReactSection />
      <WhyReact />
      <ReactAsPowerFullTool />
      <FaroReactPackage />
      <GFRFeatureErrorBoundaries />
      <GFRFeatureComponentProfiler />
      <GFRFeatureFaroRoutes />
      <HowWeImplementGrafanaAndReactSection />
      <GFRInitialize />
      <GrafanaFaroPostRequest />
      <CasoUsoAgentsSection />
      <GrafanaVentajasSection />
      <OthersRUMS />
      <AdvantagesOfUse />
      <GrafanaScenesSection />
    </Deck>
  )
}

export default App
