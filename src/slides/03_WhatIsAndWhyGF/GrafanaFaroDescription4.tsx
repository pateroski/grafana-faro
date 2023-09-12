import { FlexBox, Heading, Notes, Slide } from 'spectacle'

import Back from '../../assets/images/back.png'

export function GrafanaFaroDescription4() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="64px">
          La observabilidad es <span style={{ fontSize: '128px' }}>🤝🏻</span>
        </Heading>
      </FlexBox>
      <Notes>
        <li>
          En el mundo del software, se ha producido un desplazamiento clave a entornos cloud que ha
          afectado en la manera en la que desplegamos, monitorizamos y damos soporte a nuestras
          aplicaciones
        </li>
        <li>
          Por tanto, necesitamos herramientas que nos permitan garantizar que nuestra pila completa
          se opera de manera segura a la vez que seguimos ofreciendo la misma experiencia de usuario
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
