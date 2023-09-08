import { FlexBox, Heading, ListItem, Notes, Slide, Text, UnorderedList } from 'spectacle'

import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription6() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">¿Por qué usar Grafana Faro?</Heading>
        <UnorderedList
          animatedList
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
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
      <Notes>
        <li></li>
        <li></li>
        <li></li>
      </Notes>
    </Slide>
  )
}
