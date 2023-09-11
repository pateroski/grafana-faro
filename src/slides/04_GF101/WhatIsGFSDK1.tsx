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
import Errors from '../../assets/icons/errors.svg'
import Metrics from '../../assets/icons/metrics.svg'
import Logs from '../../assets/icons/logs.svg'
import UserActivity from '../../assets/icons/userActivity.svg'
import OpenTelemetryLogo from '../../assets/images/OpenTelemetryLogo.png'

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
            <Appear>
              <ListItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image src={Errors} width="64px" />
                <Text textAlign="center">Tracking de errores</Text>
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
                <Image src={Metrics} width="64px" />
                <Text textAlign="center">Monitorización Web Performance (CWV)</Text>
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
                <Text textAlign="center">Trazas de la pila completa con OpenTelemetry</Text>
              </ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <FlexBox flex="1 1 0" justifyContent="center" alignItems="center">
          <UnorderedList
            style={{
              display: 'flex',
              listStyle: 'none',
              justifyContent: 'space-between',
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
                <Image src={Logs} width="64px" />
                <Text textAlign="center">Logs de consola para mayor contexto</Text>
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
                <Image src={UserActivity} width="64px" />
                <Text textAlign="center">Tracking de la actividad del usuario</Text>
              </ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
      </FlexBox>
      <Notes>
        <li>
          Automáticamente captura errores que no están controlados así como promesas que han sido
          fallidas y te manda el stack completo del error para que posteriormente se pueda analizar
          el contexto en el que ha sucedido
        </li>
        <li>
          Existen una serie de métricas que se denominan (Core Web Vitals) que son las que Google ha
          definido como métricas sobre las que se percibe una buena experiencia de usuario. Bueno,
          pues Grafana Faro te permite monitorizarlas y ver cómo se comporta tu aplicación en base a
          estas métricas
        </li>
        <li>
          OpenTelemetry nos va a permitir alcanzar la granularidad que deseemos en cuanto a qué
          traceamos y con qué lo relacionamos dentro de los eventos que se producen en el frontend.
          Aunque ya de manera automática provee mucha información sin que agreguemos nada, lo cual
          es maravilloso
        </li>
        <li>
          Te permite hacer uso de la api window.console para poder capturar los logs que se
          consideren relevantes de cara a obtener el contexto en el que se está produciendo un
          evento en particular
        </li>
        <li>
          Y sí, te permite ver por id de sesión qué es lo que ha realizado ese usuario desde que
          comenzó a envíar trazas al colector
        </li>
      </Notes>
    </Slide>
  )
}
