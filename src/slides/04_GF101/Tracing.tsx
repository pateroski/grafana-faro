import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import OpenTelemetryLogo from '../../assets/images/OpenTelemetryLogo.png'

export function TracingSlide() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <FlexBox width="100%" alignItems="center" justifyContent="flex-start">
          <Heading fontSize="48px" margin="0">
            Tracing
          </Heading>
          <Image src={OpenTelemetryLogo} width="64px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>
            Clase que lo implementa: <CodeSpan color="secondary">TracingInstrumentation</CodeSpan>
          </ListItem>
          <ListItem>
            Instrumentaciones que incluye:{' '}
            <CodeSpan color="secondary">
              User Interaction, Document Load, Fetch, XMLHttpRequest
            </CodeSpan>
          </ListItem>
          <ListItem>
            Envío manual: <CodeSpan color="secondary">faro.api.pushTraces()</CodeSpan> (traces)
          </ListItem>
          <ListItem>¿Qué es lo que hace?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Envío de trazas a <CodeSpan>Tempo</CodeSpan> donde se captura un flujo de datos
              derivado de una interacción de usuario
            </ListItem>
            <ListItem color="secondary">
              Envío de una gran cantidad de datos por cada interacción que implique comunicación
              frontend-backend para un análisis exhaustivo
            </ListItem>
          </UnorderedList>
          <ListItem>¿Para qué nos sirve?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Tracking de llamadas a la backend API desde la interacción del usuario hasta la
              respuesta HTTP
            </ListItem>
            <ListItem color="secondary">
              Habilitar en prod en los casos que sea necesario (envío de datos elevado)
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
