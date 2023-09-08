import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import GrafanaFaroOssDiagram from '../../assets/images/GrafanaOssFaroDiagram.svg'

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
        <li>¿Qué es Grafana Faro?</li>
      </Notes>
    </Slide>
  )
}
