import { codePaneThemes, SlideLayout, Notes } from 'spectacle'
import Back from '../../assets/images/back.png'

const MultiCodeLayout = SlideLayout.MultiCodeLayout

export function GFRInitialize() {
  return (
    <>
      <MultiCodeLayout
        backgroundImage={`url(${Back})`}
        title="Inicializando Grafana Faro"
        titleProps={{ fontSize: '48px', textAlign: 'left' }}
        codeBlocks={[
          {
            language: 'jsx',
            description: 'Definición del hook con la configuración inicial de Grafana Faro',
            highlightRanges: [[4], [16, 38], [18], [19, 23], [25], [26], [27, 35], [40], [41]],
            theme: codePaneThemes.a11yDark,
            code: `
          import { Route } from 'react-router-dom'
          import {
            getWebInstrumentations,
            initializeFaro,
            ReactIntegration,
            ReactRouterVersion,
          } from '@grafana/faro-react'
          import { faro } from '@grafana/faro-web-sdk'
          import { TracingInstrumentation } from '@grafana/faro-web-tracing'

          import { useAppDepsContext } from '~/...'

          export function useFaroInit() {
            const { runtimeConfig } = useAppDepsContext()

            const faroConfig = () => {
              return initializeFaro({
                url: 'http://faro-collector-us-central-0.grafana.net/collect/{app-key}',
                app: {
                  name: 'agents',
                  version: v {runtimeConfig.version},
                  environment: runtimeConfig.environment,
                },
                instrumentations: [
                  ...getWebInstrumentations(),
                  new TracingInstrumentation(),
                  new ReactIntegration({
                    router: {
                      version: ReactRouterVersion.V5,
                      dependencies: {
                        history,
                        Route,
                      },
                    },
                  }),
                ],
              })
            }

            const faroLog = () => faro.api.pushLog(['Faro was initialized'])
            return { faroConfig, faroLog, faroApi: faro.api, createSession }
          }
        `,
          },
          {
            language: 'jsx',
            description: 'Ejecución de la inicialización',
            highlightRanges: [
              [4, 8],
              [5, 7],
              [12, 17],
            ],
            theme: codePaneThemes.a11yDark,
            code: `
            export const Routes = observer(() => {
              ...

              useEffect(() => {
                configureAxiosInterceptors()
                faroConfig()
                faroLog()
              }, [])

              useEffect(() => {
                if (isAuthenticated && !!agent.id) {
                  faroApi.setUser({
                    id: agent.id,
                    email: agent.email,
                    username: agent.userName,
                  })
                  faroApi.setSession(createSession({ id: agent.id }))
                }
              }, [isAuthenticated, agent])

              return (
                <Switch>
                  ...
                </Switch>
              )
            })
  `,
          },
        ]}
      ></MultiCodeLayout>
      {/* <Notes>
        <li>URL de Grafana Cloud collector con la clave de aplicación integrada.</li>
        <li>
          La meta app es obligatoria y se asocia a los datos recopilados con su aplicación. Aquí se
          definen la(s) etiqueta(s) de identificación de su aplicación. El nombre es requerido, la
          versión y el entorno en el cual corre la aplicación son opcionales pero recomendados.
          Proporcionan labels con los cuales podremos filtrar los datos. Se puede comprobar las
          tasas de error entre versiones de aplicaciones y entornos y también identificar
          contenedores problemáticos; por ejemplo, la aplicación entregada desde el contenedor X
          tarda más en servir una página.
        </li>
        <li>
          Carga por defecto todas las instrumentaciones soportadas por Faro para observar el
          frontend
        </li>
        <li>
          La instrumentación de la consola recopila registros según el filtro de nivel de registro
          activado (depuración, error, registro)
        </li>
        <li>
          La instrumentación de errores recopila errores no detectados, extrae su seguimiento de
          pila si está disponible y los informa al servidor
        </li>
        <li>
          La instrumentación de Web Vitals mide el rendimiento real del sitio en el navegador para
          poder mejorar la experiencia del usuario
        </li>
        <li>
          La instrumentación de seguimiento de sesiones ayuda a correlacionar errores, registros y
          eventos que ocurren para un usuario final en particular durante una única sesión en la
          aplicación
        </li>
        <li>
          La instrumentación de seguimiento de vistas ayuda a correlacionar errores, registros y
          eventos que ocurren en una sección particular de la aplicación.
        </li>
        <li>
          Una vez que el usuario final interactúa con la aplicación, comienzan a funcionar las
          instrumentaciones de seguimiento que miden la duración y recopilan metadatos de los
          eventos que se activan en el navegador.
        </li>
        <li>
          La instrumentación de interacción del usuario registra la duración del evento
          desencadenado, el tipo de interacción del usuario tuvo lugar y qué elementos estuvieron
          involucrados.
        </li>
        <li>
          La instrumentación de carga de documentos mide el tiempo que tarda una página web en
          recuperar inicialmente sus recursos estáticos.
        </li>
        <li>
          La instrumentación de recuperación mide el tiempo que tarda en entregarse una respuesta a
          la solicitud mediante la API de recuperación.
        </li>
        <li>
          La instrumentación XMLHttpRequest mide el mismo parámetro que la instrumentación de
          recuperación, siendo XMLHttpRequest la versión anterior de la API Fetch.
        </li>
        <li>
          La instrumentación ReactIntegration facilita la configuración del enrutador y envía un
          evento al servidor por cada cambio de enrutador, en Agents usamos react router 5 que es el
          que usamos en la configuración
        </li>
        <li>
          El meta de usuario es un meta opcional que vincula los datos recopilados con el usuario
          actual. Esto es útil cuando desea conectar eventos con el usuario que los realizó. Junto
          con el meta de la sesión, los eventos que ocurrieron antes del inicio de sesión del
          usuario pueden ser asociado con el usuario una vez que inicia sesión. Aunque es opcional,
          el meta de usuario es útil en los siguientes casos de uso: La aplicación que está
          instrumentando tiene una autenticación sistema. Quiere asociar los datos recopilados con
          el usuario que realizó las operaciones. No le preocupan las regulaciones GDPR.
        </li>
        <li>
          En nuestra aplicación en los que los detalles del usuario no estén disponibles durante la
          inicialización (por ejemplo, el usuario aún no ha iniciado sesión) y usamos la función
          setUser para configurar el usuario.
        </li>
      </Notes> */}
    </>
  )
}
