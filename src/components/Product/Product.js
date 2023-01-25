import React from "react";
import BlurCard from "../BlurCard/BlurCard";
import { Wrapper, Content, Heading } from "./styles";
import EmptyComponent from "../EmptyComponent/EmptyComponent";

const Product = () => {
  return (
    <Wrapper>
      {/* <Content>
            Product
        </Content> */}
      <BlurCard className="p-blur-card"
        heading="5 D"
        body={`The draw will open every 1.5 minute. Total 840 draws.
Each winning numbers consists of a 5-digit number.
There will be 5 positions which are the ten thousands, thousands, hundreds, tens and ones.
Each position will have a number drawn from number 0 to 9. There are many ways to play such as Base No.
Non Base No. , High Low Odd Even, etc which you can bet on any any position you want.
There are many choices for players to choose. `}
      />
      <BlurCard
        heading="3 D"
        body={`The draw will be drawn every 1.5 minutes, with a total of 840 draws.
Each lottery number is a group of three-digit numbers,
each seat has 10 balls, and the number is 0-9, which is divided into units, tens and hundreds.
The playing method is divided into positioning, non-locating, big or small, single or double,
and optional. You can choose to bet on any one of the three digits, so that players have more choices.`}
      />
      <BlurCard
        heading="FAST 3"
        body={`The draw will be drawn every 1 minute, and the total number of draws is 1260.
Three numbers are randomly generated in each period as the lottery numbers of the current period.
The three numbers are combined into one bet for betting.
Each betting number is any one of six natural numbers from 1 to 6.`}
      />
      <BlurCard
        heading="PK 10"
        body={`The draw will be drawn every 90 seconds, with a total of 840 draws. The 10 balls are numbered from 1 to 10.
10 balls are raced on the track at the same time.
The ranking order of the champion, runner-up and third place is determined according to the order
of the number of the balls.
There are various ways to choose and match. The gameplay is simple and the size is the most important.
Odds and doubles and dragon and tiger are the most popular.`}
      />
      <BlurCard
        heading="11 X 5"
        body={`The draw open every 1 minute. Total 1260 draws.
There will be 11 numbers choose from number 01 to 11.
The winning numbers consists of 5 numbers in each draw.
There are 8 classic gameplay which also has many different kinds of betting method.
Flexible betting method and high frequency draw to satisfy different players' needs`}
      />
      <BlurCard
        heading="PC 28"
        body={`The draw will be drawn every 1 minute, and the total number of draws is 1260. 3 digits between 0 and 9.
Then the sum of these 3 numbers is the result of the lottery,
without losing the fun of the classic gameplay, the lottery speed is fast,
the main gameplay is: special code, size odd and double, combination size odd and even, extreme value size.`}
      />
      <BlurCard
        heading="49/7"
        body={`The draw will be drawn every 6 minutes, and the total number of draws will be 210. 49 ball numbers are 1-49.
Multi-party betting content, main gameplay: special code, positive code special, positive code 1-6,
continuous code, Chinese zodiac, combined zodiac, continuous zodiac,
providing a variety of betting options, among which special code single code in special code and
Chinese zodiac Teshaw's most popular.`}
      />
      <EmptyComponent />
    </Wrapper>
  );
};

export default Product;
