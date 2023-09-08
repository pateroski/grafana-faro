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
        <li>
          Las aplicaciones de frontend ya no son simples páginas web, son aplicaciones complejas que
          tienen un montón de componentes web y que interactúan con un montón de servicios, y por
          tanto, necesita de un proceso que le permita optimizarse
        </li>
        <li>
          Los navegadores en los que se ejecutan nuestras aplicaciones son entornos aislados y por
          tanto, no tenemos forma de saber si el usuario está teniendo errores o directamente es que
          no está teniendo un mal desempeño
        </li>
        <li>
          A nosotros nos pasa que tenemos agentes que están en el call center y aún mandándote un
          video, no es suficiente para entender qué está pasando, porque realmente lo que
          necesitamos es la información técnica suficiente para poder discernir cual es el problema
        </li>
      </Notes>
    </Slide>
  )
}
