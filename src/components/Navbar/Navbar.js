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
import React from "react";
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react";

const Navbar = () => {

const[showApis, setShowApis] = useState(true)


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
          <NavLink to="/result">
            <li>Result</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/about">
            <li onClick={()=> setShowApis(!showApis)}>API'S <IoIosArrowDown size={18}/> </li>
                <ul className={`${'apis-items '} ${showApis ? 'is-visible' : null}`}>
                  <li>one game here</li>
                  <li>one game here</li>
                  <li>one game here</li>
                  <li>one game here</li>
                  <li>one game here</li>
                  <li>one game here new one here</li>
               </ul>
          </NavLink>
        </ul>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
