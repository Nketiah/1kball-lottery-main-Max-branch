import React from "react";
import { Wrapper, Content, RectangleCon } from "./styles";
import Tech from "../../images/n_250593_ms@2x.png";
import Tech2 from "../../images/n_250593_ms.png";
import Adjust from "../../images/adjustable_odds@2x.png";
import Adjust2 from "../../images/adjustable_odds.png";
import Stream from "../../images/av63fa1d6082bbbeb54d8@2x.png";
import Stream2 from "../../images/av63fa1d6082bbbeb54d8.png";

const RectangleBar = () => {
	return (
		<Wrapper>
			<Content>
				<RectangleCon>
					<img src={Tech} style={{marginRight: "1rem" }} className="img-fluid" alt="Proprietary tech" srcSet={Tech2} />
					<span className="display-2">Proprietary tech</span>
				</RectangleCon>
				<RectangleCon>
					<img
						src={Stream}
						
						alt="Continuous live stream"
						className="img-fluid"
						srcSet={Stream2}
					/>
					<span className="display-2">Continuous live stream</span>
				</RectangleCon>
				<RectangleCon>
					<img src={Adjust} style={{marginRight: "1rem" }} className="img-fluid" alt="Adjustable odds" srcSet={Adjust2} />
					<span className="display-2">Adjustable odds</span>
				</RectangleCon>
			</Content>
		</Wrapper>
	);
};

export default RectangleBar;
