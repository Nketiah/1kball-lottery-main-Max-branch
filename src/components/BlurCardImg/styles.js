import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* border: solid; */
  /* margin: 0 10%; */
  padding: 50px 50px;
  margin: 5% 0%;
  /* height: 768px; */
  border-radius: 1%;
  background: #ffffffbe;

  /* backdrop-filter: blur(70px); */
`;

export const Content = styled.div`
  p {
	  font-size: var(--fontSmall);
	  margin-top: 3rem;
	  width: 780px;
  }

  h1 {
    margin-top: 50px;
  }
`;

export const Flex = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 70px;
  overflow-wrap: break-word;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* text-align: left; */
    /* align-items: center; */

    width: 200px;
  }
  img {
    height: 80px;
    width: 90px;
    margin-left: 1.4rem;
    margin-bottom: 0.3rem;
    /* al */
    /* display: inline-block; */
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      /* font-size: 10px !important; */
      /* margin-right: 0.2rem; */
    }
    @media (max-width: 1024px) {
      width: 50px;
      height: 50px;
      /* font-size: 10px !important; */
      /* margin-right: 0.2rem; */
    }
  }

  

  h2 {
    white-space: pre-wrap;
    /* text-align: center; */
    font-size: var(--fontBig);
    @media (max-width: 768px) {
      font-size: 10px !important;
    }
    @media (max-width: 1024px) {
      /* width: 50px; */
      /* height: 50px; */
      white-space: break-spaces;

      font-size: 1.2rem !important;
      /* margin-right: 0.2rem; */
    }
  }
`;
