import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
export function GrafanaFaro101Section() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="64px">Grafana Faro 101</Heading>
      </FlexBox>
    </Slide>
  )
}
