import { FlexBox, Heading } from 'spectacle'
import { FrontSlide } from '../../components'

export function TitleSlide() {
  return (
    <FrontSlide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="header">Welcome to Spectacle</Heading>
      </FlexBox>
    </FrontSlide>
  )
}
