import { FlexBox, Heading, Image, Notes, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import AgentsImg from '../../assets/images/Agents.png'

export function Agents() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">
          Portal de Ventas Agents
        </Heading>
        <FlexBox width="100%" height="100%">
          <Image src={AgentsImg} width="1000px"></Image>
        </FlexBox>
      </FlexBox>
      <Notes></Notes>
    </Slide>
  )
}
