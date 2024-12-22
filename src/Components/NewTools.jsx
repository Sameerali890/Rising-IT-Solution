/* eslint-disable react/jsx-key */
import styled, { keyframes, css } from "styled-components";
import Html from "../assets/Tools-Image/html.svg"
import Github from "../assets/Tools-Image/Github.svg"
import Tailwind from "../assets/Tools-Image/Tailwind-css.svg"
import Firebase from "../assets/Tools-Image/Firebase.svg"
import Python from "../assets/Tools-Image/Python.svg"
import Vscode from "../assets/Tools-Image/Vs-code.svg"
import Mysql from "../assets/Tools-Image/My-sql.svg"
import Wordpress from "../assets/Tools-Image/Word-press.svg"
import Php from "../assets/Tools-Image/Php.svg"
import Jquery from "../assets/Tools-Image/Jquery.svg"
function NewTools() {
  const row1 = [
    Html,
    "https://coryrylan.com/assets/images/posts/types/css.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    "https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png",
    Github,
    "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png",
  ];

  const row2 = [
    Tailwind,
    Firebase,
    Python,
    Vscode,
    Mysql,
    Wordpress,
    Php,
    Jquery,
  ];

  return (
    <AppContainer>
      <Wrapper className="mt-8">
        <h1 className="text-4xl text-white  font-bold text-center">
          Tools & Technologies
        </h1>
        <p className="text-center mb-5 text-1xl text-white">
          Innovative Tools, Seamless IT Solutions.
        </p>
       <marquee >
       <div className="flex gap-6 lg:gap-10 p-4">
          {row1.map((r) => (
            <img className="size-16 lg:size-24 object-contain " src={r} alt="" />
          ))}
        </div>
       </marquee>
       <marquee direction="right">
       <div className="flex gap-6 lg:gap-10 p-4">
          {row2.map((r) => (
            <img className="size-16 lg:size-24 object-contain " src={r} alt="" />
          ))}
        </div>
       </marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default NewTools;

const AppContainer = styled.div`
  width: 99vw;
  color: #000000;
  position: relative;
  display: flex;
  margin-bottom: 5%;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;

  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
