import styled from "styled-components";

export const Wrapper = styled.div`
	/* width: 390px; */
	margin: 80px 20px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 40px;
	grid-row-gap: 30px;

	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 248px;
		color: var(--white);
		font-size: var(--fontBig);
		border-radius: 5px;
		text-align: center;
		/* ff 3.6+ */
		background: -moz-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* safari 5.1+,chrome 10+ */
		background: -webkit-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* opera 11.10+ */
		background: -o-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* ie 6-9 */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#398EEC', endColorstr='#F18EBE', GradientType=1 );

		/* ie 10+ */
		background: -ms-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* global 94%+ browsers support */
		background: linear-gradient(180deg, #f18ebe 1%, #398eec 100%);
	}
`;

export const Content = styled.div`
	div {
		width: 499px;
		height: 248px;
		/* ff 3.6+ */
		background: -moz-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* safari 5.1+,chrome 10+ */
		background: -webkit-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* opera 11.10+ */
		background: -o-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* ie 6-9 */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#398EEC', endColorstr='#F18EBE', GradientType=1 );

		/* ie 10+ */
		background: -ms-linear-gradient(180deg, #f18ebe 1%, #398eec 100%);

		/* global 94%+ browsers support */
		background: linear-gradient(180deg, #f18ebe 1%, #398eec 100%);
	}
`;
// width="499px" height="248px

// {

//     /* ff 3.6+ */
//     background:-moz-linear-gradient(180deg, #F18EBE 1%, #398EEC 100%);

//     /* safari 5.1+,chrome 10+ */
//     background:-webkit-linear-gradient(180deg, #F18EBE 1%, #398EEC 100%);

//     /* opera 11.10+ */
//     background:-o-linear-gradient(180deg, #F18EBE 1%, #398EEC 100%);

//     /* ie 6-9 */
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#398EEC', endColorstr='#F18EBE', GradientType=1 );

//     /* ie 10+ */
//     background:-ms-linear-gradient(180deg, #F18EBE 1%, #398EEC 100%);

//     /* global 94%+ browsers support */
//     background:linear-gradient(180deg, #F18EBE 1%, #398EEC 100%);

// }
