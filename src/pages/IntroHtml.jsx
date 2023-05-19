import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import
  {
    CodePane,
    Deck,
    FlexBox,
    FullScreen,
    MarkdownSlide,
    Notes,
    Progress,
    Slide,
    SlideLayout
  } from "spectacle";
import Logo from '../assets/logo-hasdev-white.png';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  zIndices: 100,
  sizes: {
    width: "100%"
  }
};
// const template = <DefaultTemplate />;
const Template = ({ slideNumber, numberOfSlides }) => (
  <>
    <div className="flex justify-between m-4 text-lg text-gray-300">
      <div className="flex space-x-2 items-center">
        <FullScreen />
        <p>@Lutzfy21 // Mini workshop fullstack developer</p>
      </div>
      <div className="flex space-x-2 items-center">

        <p>{new Date().toDateString()}</p>
      </div>
    </div>
    <div className="fixed w-[90vw] bottom-0 flex justify-between m-4 mr-16 ">
      <Progress />
    </div>
  </>
);

const IntroHtml = () =>
{
  return (
    <Deck theme={theme} template={({ slideNumber, numberOfSlides }) => <Template slideNumber={slideNumber} numberOfSlides={numberOfSlides} />}>
      {/* 1 */}
      <Slide className="p-10">
        <FlexBox height="100%">
          <div className="flex justify-center items-center h-screen flex-col space-y-2">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <a target="_blank" href='/intro-html?exportMode=true&printMode=true' className="cursor-pointer text-blue-200 underline text-xl">
                Download
              </a>
            </div>
          </div>
        </FlexBox>
        <Notes>
          Spectacle supports notes per slide.
          <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
          </ol>
        </Notes>
      </Slide>
      {/* 2 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`
      # Lesson #1
      ## Intro to HTML
      [source: web.dev](https://web.dev/learn/html/)
      `}
      </MarkdownSlide>
      {/* 3 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`
      Welcome to HTML! 
      
      HyperText Markup Language, or HTML, is the backbone of the web, providing the content, as well as the structure of that content, that you see displayed in your web browser.
      `}
      </MarkdownSlide>
      {/* 4 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`
      HyperText Markup Language, or HTML, is the standard markup language for describing the structure of documents displayed on the web. HTML consists of a series of elements and attributes which are used to mark up all the components of a document to structure it in a meaningful way.

      HTML documents are basically a tree of nodes, including HTML elements and text nodes
      `}
      </MarkdownSlide>
      {/* 5 */}
      <Slide componentProps={{ color: "white" }} className="p-10">
        <h1>Elements</h1>
        <img src="https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/oyFzeg8ttK57XMGuVNvG.png?auto=format&w=964" />
        <p>example, element for paragraph:</p>
        <CodePane language="html">{`
        <p>This paragraph has some
        <strong><em>strongly emphasized</em></strong>
        content</p>
        `}</CodePane>
      </Slide>
      {/* 6 */}
      <Slide className="p-10">
        <h1>HTML is very, very forgiving</h1>
        <Sandpack files={{
          '/index.html': `<p>If you add <strong>Strong</oops> text and <em>emphasised</doh> text but forget to close your tags, that doesn't cause the worst problems.</ohno>
<p>All that happens is your text continue to be bold and emphasized.</ohno>

<p>But not closing a "style" or "script" is a more serious issue. 
  <p>The script only shows because we changed the display.
  <style>
    p {
      color:red;
    }
    style {
      display: unset;
     }
  <p>text coming after 
  <table>
    <tr>
      <th>Optional closing
    <tr>
      <td>table cell`
        }}
          template="static" />
      </Slide>
      {/* 7 */}
      <Slide className="p-10">
        <h1>Non-Replaced Element</h1>
        <p>{`Non-replaced elements are HTML elements whose content is not replaced by the browser. In other words, the content of these elements is rendered by the browser as is, without any modifications or substitutions. Common examples of non-replaced elements include "<p>" (paragraph), <span>, <div>, <h1> to <h6> (headings), <ul> (unordered list), <ol> (ordered list), <li> (list item), <table>, etc`}</p>

        <CodePane language="html">{`
        <p>This is a paragraph of text.</p>
        `}</CodePane>

      </Slide>
      {/* 8 */}
      <Slide className="p-10">
        <h1>Replaced Element</h1>
        <p>{`Replaced elements are HTML elements whose content is replaced by the browser with external content, typically an external resource like an image or a video. The browser interprets the element's tag but doesn't render the content within it. Instead, it renders the external resource specified by the element's attributes. Common examples of replaced elements include <img> (image), <video>, <audio>, <object>, <iframe>, etc.`}</p>
        <CodePane language="html">{`
        <img src="image.jpg" alt="Description of the image">
        `}</CodePane>
        <p>{`In this case, the browser will replace the <img> element with the image specified by the src attribute. The alt attribute provides alternative text to be displayed if the image cannot be loaded.`}</p>
      </Slide>
      {/* 9 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`
        # Attribute
        Attributes are extra bits of information in an HTML element's opening tag. They provide information about the element and help define how the content will appear to users. Attributes only appear in the opening tag and are separated by spaces. Most attribute names are followed by an equal sign and a value wrapped in quotation marks.
        `}
      </MarkdownSlide>
      {/* 10 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`![attribute](https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/IdGp51MB61yo6WDSRZZ3.png?auto=format&w=964)`}
      </MarkdownSlide>
      {/* 11 */}
      <Slide className="p-10">
        <h1>Document structure</h1>
        <p>{`HTML documents include a document type declaration and the <html> root element. Nested in the <html> element are the document head and document body. While the head of the document isn't visible to the sighted visitor, it is vital to make your site function. It contains all the meta information, including information for search engines and social media results, icons for the browser tab and mobile home screen shortcut, and the behavior and presentation of your content.`}</p>
      </Slide>
      {/* 12 */}
      <Slide className="p-10">
        <CodePane language="html">{`
        <!DOCTYPE html> //document standard, there is also available for xhtml
        <html lang="en"> //root element, with content language "en" for english
          <head> //metadata header that not visible content
            <meta charset="utf-8" /> //character encoding
            <title>Machine Learning Workshop</title> //docuement title
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" src="css/styles.css" /> //style html content
            <link rel="icon" type="image/png" href="/images/favicon.png" /> //website icon
          </head>
          <body> //visible content
        
            <script defer src="scripts/lightswitch.js"></script> //import javascript content
            <script> //or inline javascript
              console.log('hello world');
            </script>
          </body>
        </html>
        `}</CodePane>
      </Slide>
      {/* 13 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`## The benefit using viewport
![viewport](https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/HahSW2IXIkGux7cMCMpE.png?auto=format&w=964)`}
      </MarkdownSlide>
      {/* 14 */}
      <SlideLayout.MultiCodeLayout numColumns={2} title="Semantic HTML" className="p-10" codeBlocks={[ {
        code: `
      <div>
      <span>Three words</span>
      <div>
        <a>one word</a>
        <a>one word</a>
        <a>one word</a>
        <a>one word</a>
      </div>
    </div>
    <div>
      <div>
        <div>five words</div>
      </div>
      <div>
        <div>three words</div>
        <div>forty-six words</div>
        <div>forty-four words</div>
      </div>
      <div>
        <div>seven words</h2>
        <div>sixty-eight words</div>
        <div>forty-four words</div>
      </div>
    </div>
    <div>
       <span>five words</span>
    </div>`, language: 'html', description: 'without semantic'
      }, {
        code: `
    <header>
  <h1>Three words</h1>
  <nav>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
  </nav>
</header>
<main>
  <header>
    <h1>five words</h1>
  </header>
  <section>
    <h2>three words</h2>
    <p>forty-six words</p>
    <p>forty-four words</p>
  </section>
  <section>
    <h2>seven words</h2>
    <p>sixty-eight words</p>
    <p>forty-four words</p>
  </section>
</main>
<footer>
  <p>five words</p>
</footer>`, language: 'html', description: 'with semantic'
      } ]} />
      {/* 15 */}
      <Slide className="p-10">
        <h1>Headings & Sections</h1>
        <Sandpack files={{
          '/styles.css': `header { background-color: aqua;}
nav { background-color: aquamarine;}
main { background-color: brown;}
aside { background-color: cornflowerblue;}
footer { background-color: darkgreen;}
h1 { color: red;}
body { color: white;}
.wrapper {  display: grid;grid-template-columns: 1fr 3fr 1fr;}
`,
          '/index.html': `<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header>
      <h1>Mini Workshop</h1>
    </header>
    <div class="wrapper">
      <nav>
        <a href="#reg">Register</a>
        <a href="#about">About</a>
        <a href="#teachers">Instructors</a>
        <a href="#feedback">Testimonials</a>
      </nav>
      <main>
        <article>First post</article>
        <article>Second post</article>
      </main>
      <aside>Aside</aside>
    </div>
    <footer>Footer</footer>
  </body>
</html>
`
        }}
          template="static"
          options={{
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300
            editorWidthPercentage: 60, // default - 50 
          }} />

      </Slide>
      {/* 16 */}
      <Slide className="p-10">
        <h1>Text Basics</h1>
        <Sandpack files={{
          '/styles.css': `h1 { color: red;font-size: 2rem;}
h2 { color: red;font-size: 1.8rem;}
h3 { color: red;font-size: 1.6rem;}
h4 { color: red;font-size: 1.4rem;}
h5 { color: red;font-size: 1.2rem;}
p { color: red;font-size: 1rem;}`,
          '/index.html': `<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header>
      <h1>Mini Workshop</h1>
    </header>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <p>Hello</p>
    <blockquote>Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will.</blockquote>
    <cite>Load Balancing Today</cite>
    <p>entities: &#x1F600; &lt; &gt; &amp; </p>
  </body>
</html>
`
        }}
          template="static"
          options={{
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300
            editorWidthPercentage: 60, // default - 50 
          }} />

      </Slide>
    </Deck>
  );
};

export default IntroHtml;;