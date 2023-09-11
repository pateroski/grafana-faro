import { codePaneThemes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function TracingSlide() {
  return (
    <SlideLayout.MultiCodeLayout
      numColumns={1}
      backgroundImage={`url(${Back})`}
      title={
        <>
          Tracing<span style={{ fontSize: 36 }}>(OpenTelemetry)</span>
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
            instrumentations: [
              // Other instrumentations

              // Don't forget to add the other instrumentations as well
              ...getWebInstrumentations(),

              new TracingInstrumentation({
                // Optional, add custom attributes to the resource
                resourceAttributes: {
                  'my.attribute': 'my-attribute-value',
                },

                // Optional, replace the default W3C Trace Context Propagator
                propagator: new MyPropagator(),

                // Optional, overwrite the default Zone Context Manager
                contextManager: new MyContextManager(),

                // Optional, overwrite the default instrumentations or set ignore URLs
                instrumentations: [
                  ...getDefaultOTELInstrumentations({
                    // URLs defined here are ignored
                    ignoreUrls: [/localhost:3000/],
                  }),

                  new MyOtherOTELInstrumentation(),
                ],
              }),
            ],
          });
  `,
          language: 'jsx',
          description: 'Necesaria configuración manual',
          highlightRanges: [[12], [12, 34], [31]],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
