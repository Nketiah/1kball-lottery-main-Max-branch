import React from "react";
import BlurCard from "../BlurCard/BlurCard";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import Text from "../Text/Text";
import { Wrapper, Content, Heading } from "./styles";

const About = () => {
  return (
    <Wrapper>
      <Content>
        <Text
          heading="About Us"
          body={`1kball Lottery has always been in the leading position in the industry with
"fairness, safety, fast and accuracy", and has an all-round system of artificial intelligence.
We have all kinds of mainstream lottery here, mainly divided into "1kball Live streaming lottery".
We are also developing the "1Kball" series of games, determined to give customers more diversified choices.
1kball will continue to create and progress, in order to introduce more new kind lottery for the public,
and create an all-round entertainment environment.`}
        />
        <Text
          heading="First steps"
          body={`1Kball is a live lottery service of the Asia-based lottery company
with over 15 years in the gaming industry.
1Kball games are a revolution in the lottery betting industry which required great effort to develop.

After market research we have come to know that what we need for the organization
of our games currently does not exist anywhere else and, as such, everything had to be built from scratch.

This venture has meant great engagement of engineers to meet the conditions that we
are proposing in the quality of the machines and the software required for serval studios.`}
        />
      </Content>
      <BlurCard heading={`Where we are today`} body={`Today we can boast that we have a unique product, whose development and testing
lasted several years. According to the results and the acceptance of the games we see that we
have filled the space with new industry games and a new kind of offer.

Every piece of equipment is designed to last incomparably longer than anything currently on the market.
It is because it was developed for the purposes of the draws and games with high frequency in
comparison to classic live lotteries. In this way, and with the new technology we are closer
to the frequency of virtual games, but we maintain the credibility
of the lottery games with a live video feed from the Studio.`}/>
        <EmptyComponent />
    </Wrapper>
  );
};

export default About;
