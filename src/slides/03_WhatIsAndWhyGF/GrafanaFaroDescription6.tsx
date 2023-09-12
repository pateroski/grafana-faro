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
            <Text textAlign="center" fontSize="128px" margin="0" padding="0">
              💨
            </Text>
            <Text textAlign="center">Muy fácil y rápida integración con ⚛️</Text>
          </ListItem>
          <ListItem>
            <Text textAlign="center" fontSize="128px" margin="0" padding="0">
              🔝
            </Text>
            <Text textAlign="center">Uso de OpenTelemetry para la captura de trazas</Text>
          </ListItem>
          <ListItem>
            <Text textAlign="center" fontSize="128px" margin="0" padding="0">
              💆🏻‍♂️
            </Text>
            <Text textAlign="center">Instrumentación automática y manual</Text>
          </ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <li>
          Apenas unas líneas de código que nos permita inicializar el colector de datos de Grafana
          Cloud y ya comienza a recolectar mucha información de manera automática
        </li>
        <li>
          Cuando hablamos de los User Journeys o de las trazas de los usuarios, Grafana Faro utiliza
          OpenTelemetry para la captura de trazas, que es un estándar de la Cloud Native Computing
          Foundation Esto nos va a permitir poder realizar trazas custom y que sean exportables a
          otro sistemas de monitorización como Jaeger
        </li>
        <li>
          Permite extender la instrumentación que hay de manera automática, para poder agregar y
          extenderla de forma manual, para lo mismo, para poder adaptar la naturaleza de la fuente
          de datos que proveemos al colector y observar lo que consideremos relevante
        </li>
      </Notes>
    </Slide>
  )
}
