import { FlexBox, Heading, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'

export function TopicList() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Heading fontSize="48px">Agenda</Heading>
        <UnorderedList>
          <ListItem>¿Qué es y por qué usar Grafana Faro?</ListItem>
          <ListItem>Grafana Faro 101</ListItem>
          <UnorderedList>
            <ListItem color="secondary">Grafana Faro Web SDK</ListItem>
            <ListItem color="secondary">Grafana Faro Dashboards</ListItem>
          </UnorderedList>
          <ListItem>Grafana Faro y React</ListItem>
          <UnorderedList>
            <ListItem color="secondary">¿Qué le ofrece Grafana Faro a React?</ListItem>
            <ListItem color="secondary">
              ¿Cómo implementamos el uso de Grafana Faro en React?
            </ListItem>
          </UnorderedList>
          <ListItem>Caso de Uso en MásMóvil: Agents</ListItem>
          <ListItem>¿Qué ventajas ofrece Grafana Faro que no ofrezca otros RUMS?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">Bonus: Creación de paneles de Grafana con Scenes</ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
