import React, { useEffect } from "react";
import { Wrapper, Content, Heading } from "./styles";

import GridContainer from "../GridContainer/GridContainer";
import RectangleBar from "../RectangleBar/RectangleBar";
import BlurCardImg from "../BlurCardImg/BlurCardImg";
import Text from "../Text/Text";

import images from "../../constants/images";
import EmptyComponent from "../EmptyComponent/EmptyComponent";



const Home = () => {

 

  return (
    <Wrapper>
      <Content>
        <Text
          heading="The advanced state of Lotto games"
          body='1kball Lottery has always been in the leading position in the industry with
"fairness, safety, fast and accuracy", and has an all-round system of artificial intelligence.
We have all kinds of mainstream lottery here, mainly divided into "1kball Live streaming lottery".
We are also developing the "1Kball" series of games, determined to give customers more diversified choices.
1kball will continue to create and progress, in order to introduce more new kind lottery for the public,
and create an all-round entertainment environment.'
        />
        <Text
          heading="Easy integration of our elegant product"
          body="Our intuitive and beautifully crafted interfaces offered by our team of
gaming and images.Tech professionals are built to allow unobstructed playtime
for players and total transparency and control for images.Managers. They are elegant,
simple, and without lag time offering a robust but intuitive control."
        />
        <GridContainer />
        <RectangleBar />
      </Content>
      <BlurCardImg
        headone="DETAILED YET SIMPLE"
        headtwo="Powerful backoffice"
        headthree="MADE FOR MANAGERS"
        headfour="HIGH-LEVEL REPORTING"
        headfive="24/7 FULL SUPPORT"
        headsix="OPTIMAL SECURITY"
        imgone={images.Manager}
        imgtwo={images.Report}
        imgthree={images.Tech}
        imgfour={images.Secure}
        paraone={`Data should make your lottery images.Manager’s job easier.\n\n That’s why we’ve built a detailed yet simple backoffice with high-level images.Reporting with full statistics about games, players, payouts and 24/7 images.Technical and ticket support.`}
        paratwo="Our system is extremely flexible and can be integrated into your current gaming platform within short period of time via manageable API’s. You maintain control of the data at all time, allowing for optimal security of your database."
      />
      <BlurCardImg
        headone="USER-CENTRIC"
        headtwo="Beautiful front-end"
        headthree="MADE FOR PLAYERS"
        headfour="FULLY RESPONSIVE"
        headfive="BEAUTIFULLY
				CRAFTED UI"
        imgone={images.Gamepad}
        imgtwo={images.Responsive}
        imgthree={images.Paint}
        paraone={`The design and functionality of the lottery front-end is key to success and profitability.
				We designed elegant, simple and beautiful front-end interface which guarantee intuitive user journey.`}
        paratwo="Using HTML5 images.Technology allows us to offer cross-platform solution for
				non-stop gaming experience for our players."
      />
      <EmptyComponent />
    </Wrapper>
    // </div>
  );
};
// text="The advanced state"
export default Home;
