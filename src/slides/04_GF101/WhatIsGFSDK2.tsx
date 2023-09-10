import {
  Appear,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle'
import Back from '../../assets/images/back.png'
import Instrumentations from '../../assets/icons/instrumentation.svg'
import FetchApi from '../../assets/icons/fetchApi.png'
import Metas from '../../assets/icons/metaIcon.png'
import OpenTelemetryLogo from '../../assets/images/OpenTelemetryLogo.png'

export function WhatIsGFSDK2() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading
          fontSize="48px"
          style={{
            marginBottom: '0',
          }}
        >
          ¿Qué herramientas nos ofrece?
        </Heading>
        <FlexBox width="100%" height="100%" justifyContent="center" alignItems="center">
          <UnorderedList
            style={{
              display: 'flex',
              listStyle: 'none',
              justifyContent: 'space-evenly',
              width: '100%',
              alignItems: 'center',
              margin: '0',
              padding: '0',
            }}
          >
            <Appear>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={Instrumentations} width="64px" />
                <Text textAlign="center">Instrumentations</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={FetchApi} width="64px" />
                <Text textAlign="center">Transports</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={Metas} width="64px" />
                <Text textAlign="center">Metas</Text>
              </ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <FlexBox width="100%" height="100%" justifyContent="center" alignItems="center">
          <UnorderedList
            style={{
              display: 'flex',
              listStyle: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              padding: '0',
              width: '100%',
            }}
          >
            <Appear>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={OpenTelemetryLogo} width="64px" />
                <Text textAlign="center">tracing con opentelemetry-js</Text>
              </ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </FlexBox>
      <Notes>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </Notes>
    </Slide>
  )
}
