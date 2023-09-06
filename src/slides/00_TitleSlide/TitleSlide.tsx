import { FlexBox, Heading, Slide } from 'spectacle'
import Front from '../../assets/images/front.png'
export function TitleSlide() {
  return (
    <Slide backgroundImage={`url(${Front})`}>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="header">🔭 Grafana Faro: RUM with OpenTelemetry for ⚛️ Apps</Heading>
      </FlexBox>
    </Slide>
  )
}
