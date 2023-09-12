import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import Logs from '../../assets/icons/logs.svg'

export function Instrumentations1() {
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
            Instrumentation<span style={{ fontSize: 36 }}>(console)</span>{' '}
          </Heading>
          <Image src={Logs} width="128px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>
            Instrumentación: <CodeSpan color="secondary">getWebInstrumentations</CodeSpan>
          </ListItem>
          <ListItem>
            Clase que lo implementa: <CodeSpan color="secondary">ConsoleInstrumentation</CodeSpan>
          </ListItem>
          <ListItem>
            Envío manual: <CodeSpan color="secondary">faro.api.pushLog</CodeSpan> (logs)
          </ListItem>
          <ListItem>¿Qué es lo que hace?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Implementación custom de <CodeSpan>console</CodeSpan> (
              <CodeSpan>console.error</CodeSpan>)
            </ListItem>
          </UnorderedList>
          <ListItem>¿Para qué nos sirve?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Proveen de contexto para la detección de la causa raíz de los errores
            </ListItem>
            <ListItem color="secondary">
              Capturan mensajes emitidos tanto por la aplicación como por las librerías
            </ListItem>
            <ListItem color="secondary">
              Permite monitorizar los logs que usamos como bandera para comprobar el correcto
              funcionamiento de la app
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
