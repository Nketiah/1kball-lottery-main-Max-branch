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
  img{
    margin-right: 4px;
  }
  table, tbody, td, tfoot, th, thead, tr{
    text-align: center;
  }
`;

export const Heading = styled.h1``;
export const TableHeader = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;


// export const createTheme(
//   	'solarized',
//   	{
//   		text: {
//   			primary: '#268bd2',
//   			secondary: '#2aa198',
//   		},
//   		background: {
//   			default: '#002b36',
//   		},
//   		context: {
//   			background: '#cb4b16',
//   			text: '#FFFFFF',
//   		},
//   		divider: {
//   			default: '#073642',
//   		},
//   		button: {
//   			default: '#2aa198',
//   			hover: 'rgba(0,0,0,.08)',
//   			focus: 'rgba(255,255,255,.12)',
//   			disabled: 'rgba(255, 255, 255, .34)',
//   		},
//   		sortFocus: {
//   			default: '#2aa198',
//   		},
//  	},
//   	'dark',
//   );