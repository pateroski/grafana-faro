import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import Front from '../../assets/images/front.png'
import GrafanaFaroLogo from '../../assets/images/GrafanaFaroLogo.svg'
import OpenTelemetryLogo from '../../assets/images/OpenTelemetryLogo.png'

export function TitleSlide() {
  return (
    <Slide backgroundImage={`url(${Front})`}>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="header" margin="0px" padding="32px 0 0">
          <Image src={GrafanaFaroLogo}></Image> Grafana Faro:
        </Heading>
        <Heading fontSize="header" margin="0px">
          RUM with <Image src={OpenTelemetryLogo} width="70px"></Image> for ⚛️ Apps
        </Heading>
      </FlexBox>
      <Notes>
        Buenas tardes a todos y bienvenidos a nuestras oficinas del grupo MásMóvil. Hoy vamos hablar
        como bien sabéis de Grafana Faro y de como podemos utilizarlo para monitorizar nuestras
        aplicaciones React. Es una charla bastante didáctica que pretende cubrir los conceptos base
        de Grafana Faro para que lo conozcáis y sobre todo mostraros en qué nos ha aportado valor
      </Notes>
    </Slide>
  )
}
