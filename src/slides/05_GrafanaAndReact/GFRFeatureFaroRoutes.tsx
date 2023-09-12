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
          import { FaroRoutes } from '@grafana/faro-react';

          // during render
          <FaroRoutes>
            <Route path="/" element={<Home />} />
            {/* ... */}
          </FaroRoutes>;
  `,
          language: 'jsx',
          description: 'React Router V6',
          highlightRanges: [4, 7],
          theme: codePaneThemes.a11yDark,
        },
        {
          code: `
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
          description: 'React Router V5',
          highlightRanges: [5, 7],
          theme: codePaneThemes.a11yDark,
        },
      ]}
    ></SlideLayout.MultiCodeLayout>
  )
}
