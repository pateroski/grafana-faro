import { FlexBox, Heading, Image, Slide } from 'spectacle'
import GrafanaAndFriends from '../../assets/images/GrafanaAndFriends.webp'
import MMLogo from '../../assets/images/MMLogo.svg'
import Back from '../../assets/images/back.png'

export function ThanksTo() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>¡Gracias!</Heading>
        <FlexBox justifyContent="space-around" width="100%" alignItems="center">
          <Image src={GrafanaAndFriends}></Image>
          <Image src={MMLogo}></Image>
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}
