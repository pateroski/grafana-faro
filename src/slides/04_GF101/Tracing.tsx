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
          import { TracingInstrumentation } from '@grafana/faro-web-tracing';
          import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';

          initializeFaro({
            // Mandatory, the URL of the Grafana Cloud collector with embedded application key.
            // Copy from the configuration page of your application in Grafana.
            url: 'http://faro-collector-us-central-0.grafana.net/collect/{app-key}',

            // Mandatory, the identification label(s) of your application
            app: {
              name: 'my-app',
              version: '1.0.0', // Optional, but recommended
            },

            instrumentations: [
              // Mandatory, overwriting the instrumentations array would cause the default instrumentations to be omitted
              ...getWebInstrumentations(),

              // Mandatory, initialization of the tracing package
              new TracingInstrumentation({
                instrumentationOptions: {
                  // Requests to these URLs will have tracing headers attached.
                  propagateTraceHeaderCorsUrls: [new RegExp('https://foo.com/*'), 'https://bar.com'],
                },
              }),
            ],
          });
  `,
          language: 'jsx',
          description: 'Necesaria configuración manual',
          highlightRanges: [[1, 2], [15], [17], [20, 25]],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
