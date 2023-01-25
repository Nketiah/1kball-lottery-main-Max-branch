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

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <NavLink to="/">
          <Logo src={logo} alt="logo" />
        </NavLink>
        <RightContent>
          <SearchBar>
            <input type="text" name="name" id="nmae" />
            <button type="submit">Submit</button>
          </SearchBar>
          <FlagDiv>
            <FlagImg src={flag} alt="flag" />
            <FlagImgDropDown src={flagDropdown} alt="flag" />
          </FlagDiv>
        </RightContent>
      </Content>
      <NavList>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product">
            <li>Product</li>
          </NavLink>
          <NavLink to="/result">
            <li>Result</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
        </ul>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
