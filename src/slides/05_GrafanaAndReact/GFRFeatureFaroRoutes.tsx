import { codePaneThemes, SlideLayout } from 'spectacle'
import Back from '../../assets/images/back.png'

export function GFRFeatureFaroRoutes() {
  return (
    <SlideLayout.MultiCodeLayout
      numColumns={2}
      backgroundImage={`url(${Back})`}
      title={
        <>
          Enrutador de páginas <span style={{ fontSize: 36 }}>(Router)</span>
        </>
      }
      titleProps={{ fontSize: '48px', textAlign: 'left' }}
      codeBlocks={[
        {
          code: `
          // V6
          import { FaroRoutes } from '@grafana/faro-react';

          // during render
          <FaroRoutes>
            <Route path="/" element={<Home />} />
            {/* ... */}
          </FaroRoutes>;

          // V4/v5
          import { FaroRoute } from '@grafana/faro-react';

          // during render
          <Switch>
            <FaroRoute path="/">
              <Home />
            </FaroRoute>
            {/* ... */}
          </Switch>;
  `,
          language: 'jsx',
          description: 'Manejando Rutas de la aplicación',
          highlightRanges: [[2], [5, 8], [11], [15, 17]],
          theme: codePaneThemes.a11yDark,
        },
        {
          code: `
          import { ReactIntegration, ReactRouterVersion } from '@grafana/faro-react'

          instrumentations: [
            ...
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
  `,
          language: 'jsx',
          description: 'Instrumentación de Enrutador',
          highlightRanges: [[1], [5, 13]],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
