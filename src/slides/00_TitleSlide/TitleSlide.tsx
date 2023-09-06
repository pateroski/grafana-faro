import { FlexBox, Heading, Image, Slide } from 'spectacle'
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
    </Slide>
  )
}
