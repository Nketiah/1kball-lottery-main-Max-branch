import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
	align-items: center;
	justify-content: center; */
  /* border: solid; */
  margin: 0 10%;

  /* backdrop-filter: blur(70px); */

  /* width: var(--maxWidth); */
  width: 78vw;
  height: 100vh;
`;

export const Content = styled.div`
  /* height: 100vh; */
  border-radius: 10px;
  background: #ffffffbe;
  padding: 80px 40px;
  h1 {
    /* color: #076696; */
    /* width: 10px; */
    /* white-space: nowrap; */
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: var(--fontSuperBig);
    /* color: var(--fontColorBlue); */
  }
  p {
  }
`;

export const Heading = styled.h1``;
