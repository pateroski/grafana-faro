import { codePaneThemes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function Instrumentations2() {
  return (
    <SlideLayout.MultiCodeLayout
      numColumns={2}
      backgroundImage={`url(${Back})`}
      title={
        <>
          Instrumentation<span style={{ fontSize: 36 }}>(error)</span>
        </>
      }
      titleProps={{ fontSize: '48px', textAlign: 'left' }}
      codeBlocks={[
        {
          code: `
          const buggyFn = () => {
            throw new Error('Buggy function');
          };

          try {
            buggyFn();
          } catch (err) {
            // Re-throw the error so it can be caught
            // by the instrumentation
            throw err;

            // Alternatively, report it manually
            faro.api.pushError(err);
          }
  `,
          language: 'jsx',
          description: 'Envío de erorres',
          highlightRanges: [[1, 3], [5, 14], [10], [13]],
          theme: codePaneThemes.a11yDark,
        },
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
            instrumentations: [new ErrorsInstrumentation()],
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
