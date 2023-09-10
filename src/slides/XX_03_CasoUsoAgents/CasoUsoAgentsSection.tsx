import { FlexBox, Heading, Slide, Notes } from 'spectacle'
import Back from '../../assets/images/back.png'

export function CasoUsoAgentsSection() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading textAlign="start">Caso de Uso en MásMóvil: Agents</Heading>
      </FlexBox>
      <Notes>
        <li>Listado de Aplicaciones</li>
        <li>
          Esta página le ayuda a administrar las aplicaciones que utiliza para enviar datos a
          Grafana Cloud. Esta página nos podemos ver todas las aplicaciones que has creado, filtrar
          aplicaciones por nombre y crear, editar y eliminar las aplicaciones
        </li>
        <li>Detalle de Rendimiento de la Aplicación</li>
        <li>
          Podemos ver un conjunto de paneles que le dan una idea de cómo se está funcionando la
          aplicación dentro del rango de tiempo y los filtros aplicados
        </li>
        <li>Web Vitals</li>
        <li>
          TTFB (Time to First Byte): es la métrica que mide el tiempo entre la solicitud de un
          recurso y cuando comienza a llegar el primer byte de una respuesta. (600)
        </li>
        <li>
          FCP (First Contentful Paint): es la métrica que mide el tiempo que transcurre desde que la
          página comienza a cargarse hasta que cualquier parte del contenido de la página se
          representa en la pantalla. El contenido se refiere al texto, las imágenes (incluidas las
          imágenes que están en segundo plano), los elementos svg o los elementos canvas que no
          están en blanco. (1800 - 3000)
        </li>
        <li>
          CLS (Cumulative Layout Shift): Cambio Acumulativo del diseño (CLS), métrica centrada en el
          usuario para medir la estabilidad visual y ayuda a cuantificar la frecuencia con la que
          los usuarios experimentan cambios de diseño inesperados; un CLS bajo ayuda a garantizar
          que la página sea agradable. (0.1 - 0.3)
        </li>
        <li>
          LCP (Largest Contentful Paint): Despliegue del contenido más extenso (LCP) es la métrica
          que reporta el tiempo para renderizar una imagen o el bloque de texto más grande visible
          dentro de la ventana de visualización, en relación con el momento en que la página comenzó
          a cargarse. (2500 - 4000)
        </li>
        <li>
          FID (First Input Delay): Demora de la primera entrada (FID), métrica centrada en el
          usuario ya que mide la capacidad de respuesta de la carga y cuantifica la experiencia que
          sienten los usuarios cuando intentan interactuar con páginas que no responden, una FID
          baja ayuda a garantizar que la página sea utilizable. (100 - 300)
        </li>
        <li>Page Loads</li>
        <li>
          Es la carga total de la página, así como su distribución a lo largo del tiempo. Puede
          utilizar la selección de ventana de tiempo como lo haría en un panel normal de Grafana
          para ampliar un intervalo específico (es decir, un aumento en la carga de la página).
        </li>
        <li>Errors Overview</li>
        <li>
          Similar a las cargas de página, en esta sección puede ver el número total de errores que
          ocurrieron en el rango de tiempo seleccionado, así como su distribución.
        </li>
        <li>Web Vitals 75p Timeseries</li>
        <li>
          Aquí se puede ver una distribución del percentil 75 de todos los Web Vitals divididos en:
          Carga de página: TTFB, FCP, LCP Cambio de diseño acumulativo: CLS, Retraso de la primera
          entrada: FID
        </li>
        <li>Errors page</li>
        <li>
          En esta página se podrá ver cuántos errores genera su aplicación dentro de un período de
          tiempo determinado, filtrar resultados según un error, filtrar errores ruidosos, inspeccionar
          el contexto del error (stacktrace, ID de sesión u otra meta-información), identificar
          excepciones dominantes, identificar las URL que generan errores, segregar el recuento de
          errores según los navegadores
        </li>
      </Notes>
    </Slide>
  )
}
