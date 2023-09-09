import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import GrafanaFaroOssDiagram from '../../assets/images/GrafanaOssFaroDiagram.png'

export function GrafanaFaroDiagram() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">¿Qué es Grafana Faro?</Heading>
        <Image src={GrafanaFaroOssDiagram}></Image>
      </FlexBox>
      <Notes>
        <li>
          Faro es un proyecto que nos permite recoger automáticamente logs, métricas de performance,
          eventos y trazas y almacenarlos en Loki y en Tempo para posteriormente visualizarlos en
          Grafana, donde ya podrías tener otras fuentes de datos de observabilidad que proceda del
          backend o de la infraestructura y que te permitan correlar la información
        </li>
        <li>
          El flujo es siempre en la misma dirección: - Una vez integrado Grafana Faro Web SDK es
          nuestra aplicación, éste comienza a recoger y a enviar toda la información al recolector,
          que en nuestro caso, es gestionado por Grafana Cloud - El recolector se encarga de enviar
          la información a Loki y Tempo para su almacenamiento y posterior consulta - Por último,
          Grafana se encarga de la visualización de los datos de la monitorización real de usuarios
        </li>
      </Notes>
    </Slide>
  )
}
