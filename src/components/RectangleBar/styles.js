import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  height: 100px;
  border-radius: 5px;
  box-shadow: 1px 1px 30px 1px #bbbbbb;
  /* padding: 20px; */
  margin: 0 20px;
`;

export const Content = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
`;

export const RectangleCon = styled.div`
/* width: 100%; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  overflow: hidden;
  img {
	  /* margin-right: 1rem; */
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

  span {
    /* white-space: nowrap; */
    font-size: var(--fontBig) !important;
    
  }
`;
// @media (max-width: 768px) {
// 	font-size: 10px !important;
//   }
//   @media (max-width: 1024px) {
// 	  /* width: 50px; */
// 	  /* height: 50px; */
// 	  white-space: break-spaces;

// 	font-size: 1.2rem !important;
// 	/* margin-right: 0.2rem; */
//   }