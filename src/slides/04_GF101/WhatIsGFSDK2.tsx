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
          ¿Qué herramientas utilizamos?
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
                <Image src={OpenTelemetryLogo} width="64px" />
                <Text textAlign="center">tracing con opentelemetry-js</Text>
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
      </FlexBox>
      <Notes>
        <li>
          Las instrumentaciones son los recolectores de datos responsables de integrarse con la API
          del navegador y con la API core de Web SDK con el objetivo de recolectar y parsear los
          datos para que puedan ser reportados al agente que se encarga de enviarlos a Loki y Tempo
          respectivamente
        </li>
        <li>
          Las metas son toda aquella información que va asociada a las fuentes de datos que estamos
          recolectando, errores, eventos, logs, medidas y que proveen contexto adicional de cara a
          poder utilizarse para filtrar la información que queremos observar
        </li>
        <li>
          Y por supuesto, el tracing con opentelemetry-js que nos va a permitir agregar contexto
          mediante trazas a los eventos, logs, errores y medidas que utilicemos como fuente de
          datos. Lo bueno de grafana Faro aquí es que te permite integrar la implementación que ya
          hayas hecho de tracing con opentelemetry-js o configurarla desde 0
        </li>
      </Notes>
    </Slide>
  )
}
