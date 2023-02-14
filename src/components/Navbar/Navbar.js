import {
  Wrapper,
  Content,
  FlagDiv,
  SearchBar,
  RightContent,
  FlagImg,
  FlagImgDropDown,
  Logo,
  NavList,
} from "./styles";
// import SearchBar from "../SearchBar/SearchBar";
import flag from "../../images/n_200px-Flag_of_Germanysvg_lg.png";
import flagDropdown from "../../images/down-arrow-263-1094530@2x.png";
import logo from "../../images/n_K_NEW_LOGO.png";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react";
import ApiData from "../Apis/ApiData";
import axios from "axios";
import About from "../About/About"





const Navbar = ({setHidePage}) => {

const[showApis, setShowApis] = useState(false)
const[gameCategory, setGameCategory] = useState([])




const getApiData =async () => {
    const {data} = await axios.get("http://89.47.162.79/1kball/dev/")
    setGameCategory(data)
  
}

const getData = (url) => {
   window.open(url, '_blank')
}

const toggleApi  = () => {
  setShowApis(!showApis)
  setHidePage(!showApis)
 
}


useEffect(() =>{
  getApiData()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



  return (
    <Wrapper>
      <Content>
        <NavLink to="/">
          <Logo src={logo} alt="logo" style={{width: "120px", height:"50px"}} />
        </NavLink>
        <RightContent>
          {/* <SearchBar>
            <input type="text" name="name" id="nmae" />
            <button type="submit">Submit</button>
          </SearchBar> */}
          {/* <FlagDiv>
            <FlagImg src={flag} alt="flag" />
            <FlagImgDropDown src={flagDropdown} alt="flag" />
          </FlagDiv> */}
        </RightContent>
      </Content>
      <NavList>
        <ul>
          <NavLink to="/">
            {/* <li>Home</li> */}
          </NavLink>
          <NavLink to="/product">
            {/* <li>Product</li> */}
          </NavLink>
          <NavLink to="/result" >
            <li>Result</li>
          </NavLink>
          <NavLink to="/about" >
            <li>About Us</li>
          </NavLink>
          <NavLink >
            <li onClick={()=> toggleApi()}>API'S <IoIosArrowDown size={18}/> </li>
                <ul className={`${'apis-items '}`} style={{ visibility: `${showApis ? 'visible' : 'hidden'}` }}>
                  { 
                   gameCategory.map((game, index)=> 
                     <div key={index} style={{backgroundColor:"white", width:"100%", zIndex:"500px"}}>
                       <li onClick={(e)=> getData(game.data_url) }>{game.game_name}</li>
                     </div>
                  )}
               </ul>
          </NavLink>
        </ul>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
