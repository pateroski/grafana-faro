import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import UserActivity from '../../assets/icons/userActivity.svg'

export function Instrumentations5() {
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
            Instrumentation<span style={{ fontSize: 36 }}>(View tracking)</span>{' '}
          </Heading>
          <Image src={UserActivity} width="128px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>
            Instrumentación: <CodeSpan color="secondary">getWebInstrumentations</CodeSpan>
          </ListItem>
          <ListItem>
            Clase que lo implementa: <CodeSpan color="secondary">ViewInstrumentation</CodeSpan>
          </ListItem>
          <ListItem>
            Envío manual: <CodeSpan color="secondary">faro.api.pushEvent</CodeSpan> (event label)
          </ListItem>
          <ListItem>¿Qué es lo que hace?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Envío logs con label <CodeSpan>kind=event</CodeSpan> y meta <CodeSpan>view</CodeSpan>
            </ListItem>
            <ListItem color="secondary">
              Es necesario definir las vistas (features) de cada una de las páginas que queremos
              monitorizar
            </ListItem>
          </UnorderedList>
          <ListItem>¿Para qué nos sirve?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Correlacionar errores, logs y eventos que ocurren para un usuario en particular duante
              una sesión
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
