import { FlexBox, Heading, ListItem, Slide, Text, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
export function WhatIsGFSDK1() {
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
          ¿Qué nos permite observar?
        </Heading>
        <FlexBox flex="1 1 0" justifyContent="center" alignItems="center">
          <UnorderedList
            style={{
              display: 'flex',
              listStyle: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              padding: '0',
            }}
          >
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                💨
              </Text>
              <Text textAlign="center">Muy fácil y rápida integración con ⚛️</Text>
            </ListItem>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                🔝
              </Text>
              <Text textAlign="center">Uso de OpenTelemetry para la captura de trazas</Text>
            </ListItem>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                💆🏻‍♂️
              </Text>
              <Text textAlign="center">Instrumentación automática y manual</Text>
            </ListItem>
          </UnorderedList>
        </FlexBox>
        <FlexBox flex="1 1 0" justifyContent="center" alignItems="center">
          <UnorderedList
            style={{
              display: 'flex',
              listStyle: 'none',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              padding: '0',
            }}
          >
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                💨
              </Text>
              <Text textAlign="center">Muy fácil y rápida integración con ⚛️</Text>
            </ListItem>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                🔝
              </Text>
              <Text textAlign="center">Uso de OpenTelemetry para la captura de trazas</Text>
            </ListItem>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                💆🏻‍♂️
              </Text>
              <Text textAlign="center">Instrumentación automática y manual</Text>
            </ListItem>
          </UnorderedList>
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}
