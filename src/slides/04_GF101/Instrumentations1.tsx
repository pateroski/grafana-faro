import { codePaneThemes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function Instrumentations1() {
  return (
    <SlideLayout.MultiCodeLayout
      numColumns={2}
      backgroundImage={`url(${Back})`}
      title={
        <>
          Instrumentation<span style={{ fontSize: 36 }}>(console)</span>
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
            ...getWebInstrumentations({
              // Optional, disable the console instrumentation
              captureConsole: false,

              // Optional, collect all levels
              captureConsoleDisabledLevels: [],

              // Optional, disable only some levels
              captureConsoleDisabledLevels: [LogLevel.DEBUG, LogLevel.TRACE],
            })],
          });
  `,
          language: 'jsx',
          description: 'Config por defecto',
          highlightRanges: [[1], [6], [7], [9], [12], [15]],
          theme: codePaneThemes.a11yDark,
        },
        {
          code: `
          initializeFaro({
            url: 'https://my-domain.my-tld/collect/{app-key}',
            app: {
              name: 'my-app',
            },
            instrumentations: [
              new ConsoleInstrumentation({
                // Optional collect all levels
                disabledLevels: [],

                // Optional disable only some levels
                disabledLevels: [LogLevel.DEBUG, LogLevel.TRACE],
              }),
            ],
          });
  `,
          language: 'jsx',
          description: 'Config manual',
          highlightRanges: [[6], [7], [9], [12]],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
