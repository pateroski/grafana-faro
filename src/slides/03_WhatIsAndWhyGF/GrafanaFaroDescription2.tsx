import { Notes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription2() {
  return (
    <SlideLayout.Quote
      attribution=" Grafana Faro"
      quoteProps={{ fontSize: '40px' }}
      backgroundImage={`url(${Back})`}
    >
      Un proyecto para la observabilidad de aplicaciones frontend, altamente configurable para el
      monitoreo de usuarios reales (RUM). La telemetría del frontend se puede correlacionar con los
      datos de backend e infraestructura para una observabilidad perfecta de la pila completa
      <Notes>
        <li>¿Qué es Grafana Faro?</li>
      </Notes>
    </SlideLayout.Quote>
  )
}
