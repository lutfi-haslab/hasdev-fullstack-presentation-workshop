import { Sandpack } from "@codesandbox/sandpack-react";
import { Link } from "react-router-dom";
import React from "react";
import
{
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  MarkdownSlide,
  Notes,
  Progress,
  Slide,
  SpectacleLogo
} from "spectacle";
import Logo from '../assets/logo-hasdev-white.png'

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

const Home = () =>
{
  return (
    <Deck theme={theme} template={({ slideNumber, numberOfSlides }) => <Template slideNumber={slideNumber} numberOfSlides={numberOfSlides} />}>
      <Slide className="p-10">
        <FlexBox height="100%">
          <img src={Logo} />
        </FlexBox>
        <Notes>
          Spectacle supports notes per slide.
          <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
          </ol>
        </Notes>
      </Slide>
      <Slide className="p-10">
        <h1>Go to:</h1>
        <Link to="/intro-html"><p className="font-bold text-blue-600 underline text-4xl hover:text-red-600">Intro HTML</p></Link>
        <Link to="/intro-css"><p className="font-bold text-blue-600 underline text-4xl hover:text-red-600">Intro CSS</p></Link>
        <Link to="/intro-javascript"><p className="font-bold text-blue-600 underline text-4xl hover:text-red-600">Intro Javascript</p></Link>
        <Link to="/intro-jsframework"><p className="font-bold text-blue-600 underline text-4xl hover:text-red-600">Intro JSFramework</p></Link>
        <Link to="/intro-jsserver"><p className="font-bold text-blue-600 underline text-4xl hover:text-red-600">Intro JSServer</p></Link>
      </Slide>
    </Deck>
  );
};

export default Home;
