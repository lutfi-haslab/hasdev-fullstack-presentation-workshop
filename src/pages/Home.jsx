import React from "react";
import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  DefaultTemplate,
  SlideLayout,
} from "spectacle";
import { Sandpack } from "@codesandbox/sandpack-react";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
const template = <DefaultTemplate />;

const Home = () => {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <FlexBox height="100%">
          <SpectacleLogo size={500} />
        </FlexBox>
        <Notes>
          Spectacle supports notes per slide.
          <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
          </ol>
        </Notes>
      </Slide>
      <MarkdownSlide componentProps={{ color: "yellow" }}>
        {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
      </MarkdownSlide>
      <Slide>
        <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
        <Box height={20} />
        <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
      </Slide>
      <Slide>
        <h1>React Playground</h1>
        <Sandpack template="react" />
      </Slide>
    </Deck>
  );
};

export default Home;
