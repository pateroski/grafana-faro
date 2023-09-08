import { Notes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription2() {
  return (
    <SlideLayout.Quote
      attribution=" Grafana Faro"
      quoteProps={{ fontSize: '40px' }}
      backgroundImage={`url(${Back})`}
    >
      Un proyecto para la observabilidad de aplicaciones frontend, altamente configurable que
      permite el monitoreo de usuarios reales (RUM). Dicha telemetría se puede correlacionar con los
      datos de backend e infraestructura para la observabilidad de la pila completa
    </SlideLayout.Quote>
  )
}
