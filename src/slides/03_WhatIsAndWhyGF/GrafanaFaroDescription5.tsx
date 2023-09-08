import { FlexBox, Heading, ListItem, Notes, Slide, Text, UnorderedList } from 'spectacle'

import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription5() {
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
            <Text textAlign="center" fontSize="48px">
              📈
            </Text>
            <Text textAlign="center">Complejidad de las aplicaciones frontend ha incrementado</Text>
          </ListItem>
          <ListItem>
            <Text textAlign="center" fontSize="48px">
              🫥
            </Text>
            <Text textAlign="center">Entorno en el que se ejecutan los navegadores aislado</Text>
          </ListItem>
          <ListItem>
            <Text textAlign="center" fontSize="48px">
              🕳️
            </Text>
            <Text textAlign="center">
              El feedback por parte de los usuarios a veces no es posible
            </Text>
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
          no está ejecutándose de forma correcta
        </li>
        <li>
          Básicamente la observabilidad busca recolectar fuentes de datos de telemetría que nos
          permita solucionar, entender y explorar nuestros sistemas y aplicaciones, que son
          complejos, y son complejos porque no paran de crecer y de evolucionar
        </li>
        <li>Así que, lo que nos proporciona la observabilidad es confianza</li>
      </Notes>
    </Slide>
  )
}
