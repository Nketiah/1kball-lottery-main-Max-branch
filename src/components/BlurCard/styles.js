import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 0;
	/* display: flex;
	align-items: center;
	justify-content: center; */
	/* border: solid; */

	/* backdrop-filter: blur(70px); */
`;

export const Content = styled.div`
	/* margin: 5% 10%; */
	margin: 2rem 0;
	height: fit-content;
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
	ul {
		list-style-type: none;
		/* margin-left: 0; */
		padding-left: 0;
	}
`;

export const Heading = styled.h1``;
