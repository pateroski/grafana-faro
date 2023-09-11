import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GrafanaAndReactSection() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading textAlign="start" fontSize="64px">
          ¿Qué le ofrece Grafana faro a React?
        </Heading>
      </FlexBox>
    </Slide>
  )
}
