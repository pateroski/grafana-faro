import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
export function Topics() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading>Agenda</Heading>
      </FlexBox>
    </Slide>
  )
}
