import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import { Link } from "react-router-dom";
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
  SlideLayout,
} from "spectacle";
import Logo from "../assets/logo-hasdev-white.png";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  zIndices: 100,
  sizes: {
    width: "100%",
  },
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
    <Deck
      theme={theme}
      template={({ slideNumber, numberOfSlides }) => (
        <Template slideNumber={slideNumber} numberOfSlides={numberOfSlides} />
      )}
    >
      {/* 1 */}
      <Slide className="p-10">
        <FlexBox height="100%">
          <div className="flex justify-center items-center h-screen flex-col space-y-2">
            <div>
              <img src={Logo} />
            </div>
            <div>
              <a
                target="_blank"
                href="/intro-html?exportMode=true&printMode=true"
                className="cursor-pointer text-blue-200 underline text-xl"
              >
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
        <Sandpack
          files={{
            "/index.html": `<p>If you add <strong>Strong</oops> text and <em>emphasised</doh> text but forget to close your tags, that doesn't cause the worst problems.</ohno>
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
      <td>table cell`,
          }}
          template="static"
        />
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
      <SlideLayout.MultiCodeLayout
        numColumns={2}
        title="Semantic HTML"
        className="p-10"
        codeBlocks={[
          {
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
    </div>`,
            language: "html",
            description: "without semantic",
          },
          {
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
</footer>`,
            language: "html",
            description: "with semantic",
          },
        ]}
      />
      {/* 15 */}
      <MarkdownSlide componentProps={{ color: "white" }} className="p-10">
        {`# Semantic means "relating to meaning".`}
      </MarkdownSlide>
      {/* 16 */}
      <Slide className="p-10">
        <h1>Headings & Sections</h1>
        <Sandpack
          files={{
            "/styles.css": `header { background-color: aqua;}
nav { background-color: aquamarine;}
main { background-color: brown;}
aside { background-color: cornflowerblue;}
footer { background-color: darkgreen;}
h1 { color: red;}
body { color: white;}
.wrapper {  display: grid;grid-template-columns: 1fr 3fr 1fr;}
`,
            "/index.html": `<!DOCTYPE html>
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
`,
          }}
          template="static"
          options={{
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300
            editorWidthPercentage: 60, // default - 50
          }}
        />
      </Slide>
      {/* 17 */}
      <Slide className="p-10">
        <h1>Text Basics</h1>
        <Sandpack
          files={{
            "/styles.css": `h1 { color: red;font-size: 2rem;}
h2 { color: red;font-size: 1.8rem;}
h3 { color: red;font-size: 1.6rem;}
h4 { color: red;font-size: 1.4rem;}
h5 { color: red;font-size: 1.2rem;}
p { color: red;font-size: 1rem;}`,
            "/index.html": `<!DOCTYPE html>
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
`,
          }}
          template="static"
          options={{
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300
            editorWidthPercentage: 60, // default - 50
          }}
        />
      </Slide>
      {/* 18 */}
      <Slide className="p-10">
        <h1>Link</h1>
        <img src="https://web-dev.imgix.net/image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/17yQeLEUX6s88IbDJreQ.png?auto=format&w=964" />
      </Slide>
      {/* 19 */}
      <Slide className="p-10">
        <h1>Links represent a connection between two resources</h1>
        <CodePane language="html">{`
        // Links can be created by <a>, <area>, <form>, and <link>
        // href
        <a href="https://machinelearningworkshop.com">Machine Learning Workshop</a>
        <a href="#teachers">Our teachers</a>
        <a href="#top">Go to top.</a>
        <a href="https://machinelearningworkshop.com#teachers">MLW teachers</a>
        <a href="mailto:hal9000@machinelearningworkshop.com">Email Hal</a>
        <a href="tel:8005551212">Call Hal</a>
        <a href="blob:https://jakearchibald.github.io/944a5fc8-fdb3-458a-91ee-cdd5964b6646" download="hal.svg">
        // area
        <area shape="poly" coords="129,0,260,95,129,138"
        href="https://developer.mozilla.org/docs/Web/HTTP"
        target="_blank" alt="HTTP">
        // link
        <link href="main.css" rel="stylesheet" /> //The rel stands for "relationship"
        <link rel="icon" href="favicon.ico" />

        `}</CodePane>
      </Slide>
      {/* 20 */}
      <Slide className="p-10">
        <a
          href="https://web.dev/learn/html/links/"
          target="_blank"
          className="hover:text-blue-600 underline"
        >
          <h1>Hi, I am a link</h1>
        </a>
        <a href="https://upload.wikimedia.org/wikipedia/id/9/94/NarutoCoverTankobon1.jpg" download>
          <img src="https://upload.wikimedia.org/wikipedia/id/9/94/NarutoCoverTankobon1.jpg" width="200px" />
          <h2 className="hover:text-blue-600 underline">Download Me!</h2>
        </a>
      </Slide>
      {/* 21 */}
      <Slide className="p-10">
        <h1>Lists</h1>
        <Sandpack files={{
          'index.html':
            `<h1>Unordered List</h1>
<ul>
  <li>Blender</li>
  <li>Toaster</li>
  <li>Vacuum</li>
</ul>
<br />
<h1>Unordered List</h1>
<ol>
  <li>Blender</li>
  <li>Toaster</li>
  <li>Vacuum</li>
</ol>
<ol type="A">
  <li>Blender</li>
  <li>Toaster</li>
  <li>Vacuum</li>
</ol>
<ol type="a">
  <li>Blender</li>
  <li>Toaster</li>
  <li>Vacuum</li>
</ol>
          `
        }} template="static" options={{ editorHeight: 500 }} />
      </Slide>
      {/* 22 */}
      <Slide className="p-10">
        <h1>Working with Table</h1>
        <Sandpack files={{
          'index.html': `<head>
  <title>Parcel Sandbox</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<h1>Table</h1>
<table>
  <caption>MLW Alumni</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Destiny</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Hal Gibrah</th>
      <td>Calculator</td>
      <td>2020</td>
    </tr>
    <tr>
      <th>Cathy Terr</th>
      <td>Waste disposal</td>
      <td>2018</td>
    </tr>
    <tr>
      <th>Lou Minious</th>
      <td>Lightbulb</td>
      <td>1956</td>
    </tr>
  </tbody>
</table>
<h1>Table with merging cells</h1>
<table>
  <caption>MLW Alumni</caption>
  <thead>
    <tr>
      <th rowspan="2" id="name" scope="col">Name</th>
      <th colspan="2" id="path">Career path</th>
      <th rowspan="2" id="year">Year</th>
    </tr>
    <tr>
      <th id="past" scope="col">Past</th>
      <th id="future" scope="col">Destiny</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="hal" scope="row">Hal Gibrah</th>
      <td headers="hal path past">Calculator</td>
      <td headers="hal path future">Mars rover</td>
      <td>2020</td>
    </tr>
    <tr>
      <th id="cathy" scope="row">Cathy Terr</th>
      <td headers="cathy path past">Waste disposal</td>
      <td headers="cathy path future">Automated teller</td>
      <td>2018</td>
    </tr>
    <tr>
      <th id="lou" scope="row">Lou Minious</th>
      <td headers="lou path past">Lightbulb</td>
      <td headers="lou path future">Smart bulb</td>
      <td>1956</td>
    </tr>
  </tbody>
</table>`,
          "styles.css": `
table,
tr > * {
  border: 1px solid;
}
`
        }} template="static" options={{ editorHeight: 500 }} />
      </Slide>
      {/* 23 */}
      <Slide className="p-10">
        <h1>Working with Forms</h1>
        <Sandpack template="static" files={{
          'index.html': `<h1>Submiting Forms</h1>
<input type="submit" value="Submit Form">
<button type="submit">Submit Form</button>
<h1>After Submitting Forms</h1>
<form method="GET">
  <label for="student">Pick a student:</label>
  <select name="student" id="student">
    <option value="hoover">Hoover Sukhdeep</option>
    <option>Blendan Smooth</option>
    <option value="toasty">Toasty McToastface</option>
  </select>
  <input type="submit" value="Submit Form">
</form>
<h1>Radio Button</h1>
<label>
<input type="radio" value="blendan" name="machine" /> blenden
</label>
<h1>Checkboxes</h1>
<div>
  <input type="checkbox" id="scales" name="scales" checked>
  <label for="scales">Scales</label>
</div>

<div>
  <input type="checkbox" id="horns" name="horns">
  <label for="horns">Horns</label>
</div>
          `
        }} />
      </Slide>
      {/* 24 */}
      <Slide className="p-10">
        <h1>Images, makes web lot of fun</h1>
        <CodePane language="html">{`
        <img src="switch.svg" alt="light switch" role="img" width="70" height="112" />
        // for svg file, need to add role="img" due to bugs for web features
        `}</CodePane>
        <br />
        <h2>With Image</h2>
        <img src="https://images.squarespace-cdn.com/content/v1/5e3b1164feb39b444b58f15b/88be65d9-7ef6-4ced-85fd-bc7263ecc68a/naruto-g98192d3f2_1920.png" alt="naruto" width="200px" />
        <br />
        <h2>Without Image, only alt</h2>
        <img src="" alt="Kakashi" />
      </Slide>
      {/* 25 */}
      <Slide className="p-10">
        <h1>Video on Webs</h1>
        <Sandpack template="static" files={{
          'index.html': `<video autoplay loop muted width="400" controls>
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
  Your browser does not support HTML video.
</video>
<br/>
<h1>Even more control</h1>
<video controls poster="images/machine.jpg">
  <source src="videos/machines.webm" type="video/webm">
  <source src="videos/machines.mp4" type="video/mp4">
  <source src="videos/machines.ogv" type="video/ogg">
  <track label="English" kind="subtitles" srclang="en" src="vtt/subtitles-en.vtt" default />
  <track label="Francais" kind="subtitles" srclang="fr" src="vtt/subtitles-fr.vtt" />
  <p>Watch <a href="https://youtube.com/link">video on Youtube</a>
</video>`
        }} />
        <h1>Audio</h1>
        <Sandpack template="static" files={{
          'index.html': `<figure>
<figcaption>Listen to the T-Rex:</figcaption>
<audio
    controls
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
        <a href="/media/cc0-audio/t-rex-roar.mp3">
            Download audio
        </a>
</audio>
</figure>`
        }} />
      </Slide>
      {/* 26 */}
      <Slide className="p-10">
        <h1>Document Object Model (DOM)</h1>
        <div className="flex justify-center space-x-2">
          <img src="https://web-dev.imgix.net/image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/xsvSa8YkwHyPWNnQ8Tpi.png?auto=format&w=964" width="800px" />
          <img src="https://web-dev.imgix.net/image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/rX9myUwejCW2Ab0xUu0l.png?auto=format&w=964" width="500px" />
        </div>
      </Slide>
      {/* 27 */}
      <Slide className="p-10">
        <h1>Accessibility Object Model (AOM)</h1>
        <img src="https://web-dev.imgix.net/image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/KMEuk7ub4ejE7zdr5Vyk.png?auto=format&w=964" width="800px" />
      </Slide>
      <Slide>
        <div className="flex items-center justify-center h-full">
          <Link to="/">
            <h1 className="hover:text-blue-600 underline">Back Home</h1>
          </Link>
        </div>
      </Slide>
    </Deck>
  );
};

export default IntroHtml;
