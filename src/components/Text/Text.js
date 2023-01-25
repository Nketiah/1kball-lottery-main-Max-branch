import React from "react";
// import './styles'
import { Content, HeadText, SpanText, Wrapper } from "./styles";
const Text = ({ heading, body }) => {
  return (
    <Wrapper>
      <Content>
        <HeadText>
          <h1>{heading}</h1>
        </HeadText>
        <pre>
          <SpanText>
            <span>{body}</span>
          </SpanText>
        </pre>
      </Content>
    </Wrapper>
  );
};

export default Text;
