import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { Wrapper, Content, Heading } from "./styles";

const BlurCard = ({ heading, body }) => {
  const bodyContents = body;
  //   console.log(bodyContents);
  let arr = [];
  let currentLocation = window.location.href;
  if (typeof bodyContents !== "undefined") {
    
    // arr = bodyContents.trim().split(",  ");
    
    // console.log(currentLocation);
    return (
      <Wrapper>
        <Content>
          <h1>{heading}</h1>
          <pre>
            <ul>
              {body}
              {/* {arr.map((e, i) => (
              <li key={i}>{e}</li>
            ))} */}
            </ul>
          </pre>
          {currentLocation !== 'http://localhost:3000/product' ? <ContactForm /> : null} 
        </Content>
      </Wrapper>
    );
  } else {
    return <div>hshs</div>;
  }
};

export default BlurCard;
