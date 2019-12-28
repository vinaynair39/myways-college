import React from "react";
import Sidebar from "./Sidebar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Deatils from "./userDetails/UserExperienceQuestion";
import styled from "styled-components";
import Background from "../images/bg.png"

const Wrapper = styled.div`
background-color: #0f9d58;
  background-image: url("${Background}");
  background-repeat: repeat;

`;

function Landing() {
  return (
    <Wrapper>
      <Deatils />
    </Wrapper>
  );
}

export default Landing;
