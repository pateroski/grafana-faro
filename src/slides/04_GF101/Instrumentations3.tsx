import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import Metrics from '../../assets/icons/metrics.svg'

export function Instrumentations3() {
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
            Instrumentation<span style={{ fontSize: 36 }}>(Web Vitals)</span>{' '}
          </Heading>
          <Image src={Metrics} width="64px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>
            Instrumentación: <CodeSpan color="secondary">getWebInstrumentations</CodeSpan>
          </ListItem>
          <ListItem>
            Clase que lo implementa: <CodeSpan color="secondary">WebVitalsInstrumentation</CodeSpan>
          </ListItem>
          <ListItem>
            Envío manual: <CodeSpan color="secondary">faro.api.pushMeasurement</CodeSpan>{' '}
            (measurements label)
          </ListItem>
          <ListItem>¿Qué es lo que hace?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Hace uso del paquete <CodeSpan>web-vitals</CodeSpan>
            </ListItem>
            <ListItem color="secondary">
              Envío de métricas como <CodeSpan>TTFB, FCP, LCP, CLS, FID, INP</CodeSpan>
            </ListItem>
          </UnorderedList>
          <ListItem>¿Para qué nos sirve?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Medida de la performance real de nuestras apps basada en métricas de percepción de UX
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
