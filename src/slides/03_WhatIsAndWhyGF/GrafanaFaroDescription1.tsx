import { Notes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription1() {
  return (
    <SlideLayout.Quote
      attribution=" Grafana Cloud"
      quoteProps={{ fontSize: '40px' }}
      backgroundImage={`url(${Back})`}
    >
      Una solución sencilla y con muchas herramientas para instrumentar las aplicaciones web. Nos
      permite visualizar el rendimiento de la aplicación, así como obtener un flujo de errores y
      excepciones en tiempo real
      <Notes>
        <li>¿Qué es Grafana Faro?</li>
      </Notes>
    </SlideLayout.Quote>
  )
}
