import { FlexBox, Heading, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'

export function ThanksSection() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading textAlign="start" fontSize="64px">
          ¡Gracias! ❤️
        </Heading>
      </FlexBox>
    </Slide>
  )
}
