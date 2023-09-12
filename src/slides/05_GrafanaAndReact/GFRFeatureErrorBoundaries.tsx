import { FlexBox, Heading, Image, Notes, Slide, Appear, CodePane, codePaneThemes } from 'spectacle'
// import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow'
import Back from '../../assets/images/back.png'
import AgentsErrorBoundary from '../../assets/images/AgentsErrorBoundary.png'
import AgentsErrorboundarylocal from '../../assets/images/AgentsErrorboundarylocal.png'

export function GFRFeatureErrorBoundaries() {
  return (
    <>
      <Slide backgroundColor="#ffff">
        <Appear>
          <FlexBox
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Heading fontSize="48px">
              Límites de error <span style={{ fontSize: 36 }}>(Error Boundaries)</span>
            </Heading>
          </FlexBox>
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '15%',
            }}
          >
            <Image src={AgentsErrorBoundary}></Image>
          </div>
        </Appear>
        <Appear>
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
            }}
          >
            <Image src={AgentsErrorboundarylocal} width="800px"></Image>
          </div>
        </Appear>
      </Slide>
      <Slide backgroundImage={`url(${Back})`}>
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Heading fontSize="48px">
            Límites de error <span style={{ fontSize: 36 }}>(Error Boundaries)</span>
          </Heading>
          <CodePane
            language="jsx"
            highlightRanges={[
              [6, 8],
              [13, 17],
            ]}
            theme={codePaneThemes.a11yDark}
          >
            {`
              import { FaroErrorBoundary } from '@grafana/faro-react'

              async function startApp() {
                {...code....}

                const ErrorModal = (error: Error) => {
                  return <FallbackModal error={error} />
                }

                ReactDOM.render(
                  <Suspense fallback={null}>
                    <RootProvider appDeps={appDeps}>
                      <FaroErrorBoundary fallback={ErrorModal}>
                        <Router history={history}>
                          <App />
                        </Router>
                      </FaroErrorBoundary>
                    </RootProvider>
                  </Suspense>,
                    document.getElementById('root'),
                )
              }
              startApp()

      `}
          </CodePane>
        </FlexBox>
        <Notes>
          <li>
            Los límites de errores son componentes de React que capturan errores de JavaScript en
            cualquier parte de su árbol de componentes hijo, registran esos errores, y muestran una
            interfaz de repuesto en lugar del árbol de componentes que ha fallado. Los límites de
            errores capturan errores durante el renderizado, en métodos del ciclo de vida, y en
            constructores de todo el árbol bajo ellos y funcionan como un bloque catch{} de
            JavaScript, pero para componentes. Sólo capturan errores en los componentes bajo ellos
            en el árbol y si fallan tratando de renderizar el mensaje de error, el error se
            propagará al límite de errores más cercano por encima de él.
          </li>
          <li>
            En el caso de React Faro envía el seguimiento del stack de errores no controlados en
            esos componentes y los registra en Grafana. Detecta los errores y mantiene el árbol de
            componentes poder seguir procesando el resto de la página.
          </li>
        </Notes>
      </Slide>
    </>
  )
}
