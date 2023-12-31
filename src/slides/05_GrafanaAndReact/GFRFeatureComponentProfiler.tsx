import { FlexBox, Heading, Image, Notes, Slide, Appear, CodePane, codePaneThemes } from 'spectacle'
import Back from '../../assets/images/back.png'
import GFRProfiler from '../../assets/images/GFRProfiler.png'

export function GFRFeatureComponentProfiler() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Heading fontSize="48px">
          Analizador de Componente <span style={{ fontSize: 36 }}>(Component Profiler)</span>
        </Heading>
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '40%',
          }}
        >
          <Image src={GFRProfiler} width="800px"></Image>
        </div>
        <Appear priority={-1}>
          <CodePane language="jsx" highlightRanges={[7]} theme={codePaneThemes.a11yDark}>
            {`
              import { withFaroProfiler } from '@grafana/faro-react';

              const ClientForm = observer(() => {
                return (<>{...code....}</>)
              })

              export default withFaroProfiler(ClientForm);
      `}
          </CodePane>
        </Appear>
      </FlexBox>
      <Notes>
        <li>
          El Component Profiler captura la duración de la renderización y el montaje de componentes,
          permitiendo medir el rendimiento de renderizado de un árbol de React mediante código.
        </li>
        <li>
          La creación de perfiles agrega cierta sobrecarga adicional, por lo que está deshabilitada
          en la compilación de producción de forma predeterminada.
        </li>
      </Notes>
    </Slide>
  )
}
