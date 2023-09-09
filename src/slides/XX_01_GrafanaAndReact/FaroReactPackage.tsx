import { FlexBox, Heading, Image, Notes, Slide, Appear } from 'spectacle'
import Back from '../../assets/images/back.png'
import GrafanaFaroReactPackage from '../../assets/images/GrafanaFaroReactPackage.png'
import Alert from '../../assets/images/alert.png'

export function FaroReactPackage() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">Grafana Faro React</Heading>
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={GrafanaFaroReactPackage}></Image>
          <Appear>
            <div
              style={{
                backgroundColor: '#ffc800a1',
                transform: 'rotate(45deg)',
                position: 'absolute',
                top: '50%',
                left: '25%',
                width: '28rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 2rem',
              }}
            >
              <Image src={Alert} width="6rem" height="6rem"></Image>
              <Heading fontSize="h3" color="black">
                ¡Atención!
              </Heading>
            </div>
          </Appear>
        </FlexBox>
      </FlexBox>
      <Notes>
        <li>
          Al ver lo comprometidos que estaban con la librería React decidieron entonces desarrollar
          un paquete que permite una integración sencilla en proyectos creados con React.
        </li>
        <li>
          Es importante decir que esta librería está en constante actualización con cambios
          frecuentes importantes, ya que encuentra en fase de pre-lanzamiento aunque esto no ha sido
          un impedimento para explotarla en nuestro proyecto.
        </li>
      </Notes>
    </Slide>
  )
}
