import { FlexBox, Heading, Slide, UnorderedList, ListItem, Text, Image, Notes } from 'spectacle'
import Back from '../../assets/images/back.png'
import AzureMonitor from '../../assets/icons/AzureMonitor.png'
import Sentry from '../../assets/icons/Sentry.png'
import Datadog from '../../assets/icons/Datadog.png'
import NewRelic from '../../assets/icons/NewRelic.png'
import Dynatrace from '../../assets/icons/Dynatrace.jpg'
import ElasticObservability from '../../assets/icons/ElasticObservability.png'

export function OthersRUMS() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">Otros RUMs del Mercado</Heading>
        <UnorderedList
          animatedList
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={AzureMonitor}></Image>
            </Text>
            <Text textAlign="center">Azure Monitor</Text>
          </ListItem>

          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={Sentry}></Image>
            </Text>
            <Text textAlign="center">Sentry</Text>
          </ListItem>

          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={Datadog}></Image>
            </Text>
            <Text textAlign="center">Datadog</Text>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          animatedList
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={NewRelic}></Image>
            </Text>
            <Text textAlign="center">New Relic</Text>
          </ListItem>

          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={Dynatrace}></Image>
            </Text>
            <Text textAlign="center">Dynatrace</Text>
          </ListItem>

          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              <Image width="70px" src={ElasticObservability}></Image>
            </Text>
            <Text textAlign="center">Elastic</Text>
          </ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <li>
          Por supuesto, haciendo una búsqueda y revisando el estado del arte de las herramientas de
          observabilidad podemos encontrar diferentes alternativas en el mercado, todas válidas.
        </li>
        <li>
          Depende de los requisitos de monitoreo, funciones preferidas o necesitadas, facilidad de
          uso y presupuesto. Se deben considerar factores como el tipo y volumen de datos que
          necesita monitorear, la profundidad del análisis requerido, las necesidades de
          colaboración y los aspectos de escalabilidad y administración que ofrece cada plataforma.
        </li>
      </Notes>
    </Slide>
  )
}
