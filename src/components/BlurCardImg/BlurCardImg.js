import React from "react";
import { Content, Wrapper, Flex } from "./styles";
const BlurCardImg = ({
	headone,
	headtwo,
	headthree,
	headfour,
	headfive,
	headsix,
	imgone,
	imgtwo,
	imgthree,
	imgfour,
	paraone,
	paratwo,
}) => {
	return (
		<Wrapper>
			<Content>
				<h3>{headone}</h3>
				<h1>{headtwo}</h1>
				<Flex>
					<div>
						<img className="img-fluid" src={imgone} alt={headthree} srcSet="" />
						<h2>{headthree}</h2>
					</div>
					<div>
						<img className="img-fluid" src={imgtwo} alt={headfour} srcSet="" />
						<h2>{headfour}</h2>
					</div>
					<div>
						<img className="img-fluid" src={imgthree} alt={headfive} srcSet="" />
						<h2>{headfive}</h2>
					</div>
					{imgfour !== undefined ?(
						<div>
						<img className="img-fluid" src={imgfour} alt={headsix} srcSet="" />
						<h2>{headsix}</h2>
					</div>
					) :<noscript></noscript> } 
					
				</Flex>
				<p>{paraone}</p>
				<p>{paratwo}</p>
			</Content>
		</Wrapper>
	);
};

export default BlurCardImg;
