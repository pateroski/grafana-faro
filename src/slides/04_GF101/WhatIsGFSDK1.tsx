import { FlexBox, Heading, Image, ListItem, Slide, Text, UnorderedList } from 'spectacle'
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
          fontSize="64px"
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
            <ListItem
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image src={Errors} width="64px" />
              <Text textAlign="center">Tracking de errores automático</Text>
            </ListItem>
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
          </UnorderedList>
        </FlexBox>
      </FlexBox>
    </Slide>
  )
}
