import { FlexBox, Heading, Image, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import QRGrafanaFaroDemo from '../../assets/images/QRGrafanaFaroDemo.png'

export function GFRDemo() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading textAlign="" fontSize="64px">
          Demo de Grafana Faro React
        </Heading>
        <Image src={QRGrafanaFaroDemo} />
      </FlexBox>
    </Slide>
  )
}
