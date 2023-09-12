import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import Errors from '../../assets/icons/errors.svg'

export function Instrumentations2() {
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
            Instrumentation<span style={{ fontSize: 36 }}>(error)</span>{' '}
          </Heading>
          <Image src={Errors} width="64px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>
            Instrumentación: <CodeSpan color="secondary">getWebInstrumentations</CodeSpan>
          </ListItem>
          <ListItem>
            Clase que lo implementa: <CodeSpan color="secondary">ErrorsInstrumentation</CodeSpan>
          </ListItem>
          <ListItem>
            Envío manual: <CodeSpan color="secondary">faro.api.pushError</CodeSpan> (errors label)
          </ListItem>
          <ListItem>¿Qué es lo que hace?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Suscripción a <CodeSpan>window.onerror</CodeSpan> y{' '}
              <CodeSpan>window.onunhandledrejection</CodeSpan>
            </ListItem>
            <ListItem color="secondary">
              Envío de errores (con stacktrace si está disponible)
            </ListItem>
          </UnorderedList>
          <ListItem>¿Para qué nos sirve?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Detección de anomalías que surjan en la app (crashes, unexpected behavior)
            </ListItem>
            <ListItem color="secondary">
              Detección de problemas con librerías de terceros o sistemas externos
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
