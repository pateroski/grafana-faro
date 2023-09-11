import { codePaneThemes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function Instrumentations4() {
  return (
    <SlideLayout.MultiCodeLayout
      numColumns={1}
      backgroundImage={`url(${Back})`}
      title={
        <>
          Instrumentation<span style={{ fontSize: 36 }}>(Session tracking)</span>
        </>
      }
      titleProps={{ fontSize: '48px', textAlign: 'left' }}
      codeBlocks={[
        {
          code: `
          initializeFaro({
            url: 'https://my-domain.my-tld/collect/{app-key}',
            app: {
              name: 'my-app',
            },
            //Default config
            instrumentations: [...getWebInstrumentations()],

            //Manual config
            instrumentations: [new SessionInstrumentation()],
          });
  `,
          language: 'jsx',
          description: 'Config por defecto y manual',
          highlightRanges: [[7], [10]],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
