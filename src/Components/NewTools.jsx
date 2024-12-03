/* eslint-disable react/jsx-key */
import styled, { keyframes, css } from "styled-components";
function NewTools() {
  const row1 = [
    "https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-701751694771801xidtztxanv.png",
    "https://coryrylan.com/assets/images/posts/types/css.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    "https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png",
    "https://w7.pngwing.com/pngs/203/560/png-transparent-github-logo-thumbnail.png",
    "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png",
  ];

  const row2 = [
    "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQktpK3Jy3GkxXutGPzl8R3OBCNMxfFWP5A&s",
    "https://i.pinimg.com/736x/6a/fb/f4/6afbf45910b9b4c344737f76043d2cbc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9tKSm-H9nOPOypNjRleWadabE9DtpDqWnw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM91T1S4z84bTfnQg-ExIMn9MW_bs43wkg5g&s",
    "https://download.logo.wine/logo/WordPress.com/WordPress.com-Logo.wine.png",
    "https://icon2.cleanpng.com/20180420/cie/avu6ydxvj.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdlB1Jh18fFOgn0ZLbc_5jJQr6qAj5gixnA&s",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <h1 className="text-4xl py-10  text-white  font-bold text-center">
          Tools & Technologies
        </h1>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
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
  margin-bottom:5%;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1400px;
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
