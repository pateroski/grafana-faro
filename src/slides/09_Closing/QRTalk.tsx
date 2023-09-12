import { FlexBox, Heading, Image, Slide } from 'spectacle'
import Back from '../../assets/images/back.png'
import QRTalk from '../../assets/images/QRTalk.png'

export function QRTalkSlide() {
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
          Slides <span style={{ fontSize: '96px' }}>👾</span>
        </Heading>
        <Image src={QRTalk} />
      </FlexBox>
    </Slide>
  )
}
