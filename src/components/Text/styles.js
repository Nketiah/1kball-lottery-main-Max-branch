import styled from "styled-components";

export const Wrapper = styled.div`
	/* width: 390px; */
	margin: 0px 20px;
`;

export const Content = styled.div`
	/* width: 390px; */
    pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
`;

export const HeadText = styled.div`
	width: 500px;
    word-wrap: break;
	h1 {
		/* color: #076696; */
		/* width: 10px; */
        /* word-wrap: break; */
		/* white-space: nowrap; */
        line-height: 50px;
		text-align: left;
		font-style: normal;
		font-weight: normal;
		font-size: var(--fontSuperBig);
		color: var(--fontColorBlue);
	}
`;

export const SpanText = styled.div`
    width: 900px;

    /* white-space: nowrap; */
    word-wrap: break;
    line-height: 38px;
    text-align: left;
    /* font-family: Montserrat; */
    /* font-style: normal;
    font-weight: normal; */
    margin: 30px 0px;
    padding: 10px;
    font-size: var(--fontMedium);
    /* color: rgba(86,83,83,1); */
    span{

    }


`
