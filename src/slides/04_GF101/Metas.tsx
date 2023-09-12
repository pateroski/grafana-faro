import { CodeSpan, FlexBox, Heading, Image, ListItem, Slide, UnorderedList } from 'spectacle'
import Back from '../../assets/images/back.png'
import Metas from '../../assets/icons/metaIcon.png'

export function MetasSlide() {
  return (
    <Slide backgroundImage={`url(${Back})`}>
      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <FlexBox width="100%" alignItems="center" justifyContent="flex-start">
          <Heading fontSize="48px" margin="0">
            Metas
          </Heading>
          <Image src={Metas} width="128px" />
        </FlexBox>
        <UnorderedList>
          <ListItem>¿Qué son?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              Información adicional a los distintos logs (console, error, events) para proveer
              contexto y filtrado
            </ListItem>
          </UnorderedList>
          <ListItem>¿Cuales hay?</ListItem>
          <UnorderedList>
            <ListItem color="secondary">
              App: <CodeSpan>name, version, environment</CodeSpan>
            </ListItem>
            <ListItem color="secondary">
              Session: <CodeSpan>id, attributes</CodeSpan> (<CodeSpan>faro.api.setSession</CodeSpan>
              )
            </ListItem>
            <ListItem color="secondary">
              User: <CodeSpan>id, email, username, attributes</CodeSpan> (
              <CodeSpan>faro.api.setUser</CodeSpan>)
            </ListItem>
            <ListItem color="secondary">
              View: <CodeSpan>name, attributes</CodeSpan> (<CodeSpan>faro.api.setView</CodeSpan>)
            </ListItem>
            <ListItem color="secondary">
              Browser: <CodeSpan>name, version, os, mobile</CodeSpan>
            </ListItem>
            <ListItem color="secondary">
              Page: <CodeSpan>name</CodeSpan>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </FlexBox>
    </Slide>
  )
}
