import { FlexBox, Heading, Notes, Slide, UnorderedList, ListItem, Text, Appear } from 'spectacle'
import Back from '../../assets/images/back.png'

export function ReactAsPowerFullTool() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">React como herramienta poderosa</Heading>
        <UnorderedList
          animatedList
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <ListItem>
            <Text textAlign="center" fontSize="64px" margin="0" padding="0">
              📈
            </Text>
            <Text textAlign="center">Ecosistema</Text>
          </ListItem>
          <Appear>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                🫥
              </Text>
              <Text textAlign="center">Rendimiento</Text>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                🗣️
              </Text>
              <Text textAlign="center">Comunidad</Text>
            </ListItem>
          </Appear>
        </UnorderedList>
        <UnorderedList
          animatedList
          style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Appear>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                📈
              </Text>
              <Text textAlign="center">Manejo del Estado</Text>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <Text textAlign="center" fontSize="64px" margin="0" padding="0">
                🫥
              </Text>
              <Text textAlign="center">Paradigma de hooks</Text>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <li>
          El ecosistema de React que es enorme. El acceso a este ecosistema les ha permitido
          desplegar funcionalidades más rápido y reducir su deuda técnica. Un ejemplo de esto es que
          necesitaban crear un nuevo tipo de panel llamado Canvas, que permitiera a los usuarios
          crear diseños e interfaces de usuario personalizados, para lograrlo usaron una biblioteca
          de terceros llamada Moveable que los ayudó en gran parte del trabajo, haciéndolos más
          productivos y que pudieran tener la funcionalidad en estado beta meses antes de lo
          previsto o si lo hubieran realizado de otra manera.
        </li>
        <li>
          El desempeño de rendimiento de React les ha permitido escalar. Las optimizaciones
          integradas al renderizado, así como en los componentes basados en clases y las arrays de
          dependencia de los hooks, que permite condicionar el renderizado, han facilitado la
          optimización del rendimiento del código y brindan una excelente experiencia de usuario.
        </li>
        <li>
          React se usa ampliamente. Tiene una gran comunidad detrás y poderosos proyectos que le dan
          soporte continuamente. Como Grafana es de código abierto, estar basado en la librería
          frontend más popular ha ayudado a facilitar las contribuciones de la comunidad a Grafana.
        </li>
        <li>
          En comparación con Angular, React no es un marco, por lo que la cuestión de cómo
          administrar el estado complejo de la aplicación mientras se usa React ha estado abierta
          durante mucho tiempo y es decisión del desarrollador como manejarlo. Antes del contexto,
          estaba Redux, y antes de Redux, estaba el viejo paso unidireccional de accesorios. Por lo
          que decidieron en la libertad para considerar una gran variedad de opciones de gestión
          estatal y elegir la que tenga más sentido, context, redux y rxjs
        </li>
        <li>
          Cuando comenzaron el desarrollo, primero comenzaron con component class y después
          surgieron los hooks y los componentes funcionales. Debido al cambio algunos
          desarrolladores han expresado su frustración con los hooks porque introducen cierres
          obsoletos y requieren aprender y dominar las reglas de los hooks. Los componentes
          funcionales, como se les llama, rara vez son funciones puras.
        </li>
      </Notes>
    </Slide>
  )
}
