import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Background from "../images/bg.png"
import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`

background-color: #0f9d58;
  background-image: url("${Background}");
  background-repeat: repeat;
  .form-font {
    font-size: 1.5rem;
  }
  .form-font-btn {
    font-size: 1.8rem;
  }
  .register-redirect {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .title-header {
    color: #2e2e2e;
    font-size: 3rem;
  }
  .btn {
    background: #f8d637 !important;
  }
  .form-container {
    background: #f8f8f9 !important;
  }
  .logo {
    width: 70%;
  }
  .logo-box {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .mid-container {
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .forgot {
    margin-left: auto;
  }
  .reg-icons {
    font-size: 3.5rem;
  }
`;

function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
  
    const { onChange, onSubmit, values } = useForm(registerUser, {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
      update(
        _,
        {
          data: { register: userData }
        }
      ) {
        context.login(userData);
        props.history.push('/');
      },
      onError(err) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values
    });
  
    function registerUser() {
      addUser();
    }
  
    return (
        <Wrapper>
        <Grid
          textAlign="center"
          style={{ height: "100vh", margin: 0 }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: "30vw" }}>
            {/* <Header textAlign="center" className="title-header">
        <Image src="/favicon.png" /> 
          <span className="title-header">MyWays Login</span>
        </Header> */}
            <Form
              size="large"
              className="form-font"
              style={{ border: "none" }}
              onSubmit={onSubmit}
              noValidate
            >
              <Message
                stacked
                style={{ padding: "3rem" }}
                className="form-container"
              >
                <div className="logo-box">
                  <Image src="/logo.jpeg" className="logo" />
                </div>
                <Form.Input
                  fluid
                  name="name"
                  icon="user"
                  iconPosition="left"
                  type="text"
                  value={values.name}
                  error={errors.name ? true : false}
                  onChange={onChange}
                  placeholder="Name"
                  className="form-font"
                />
                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  type="text"
                  value={values.email}
                  error={errors.email ? true : false}
                  onChange={onChange}
                  placeholder="E-mail address"
                  className="form-font"
                />
                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  type="password"
                  value={values.password}
                  error={errors.password ? true : false}
                  onChange={onChange}
                  iconPosition="left"
                  placeholder="Password"
                  className="form-font"
                />
                 <Form.Input
                  fluid
                  name="confirmPassword"
                  icon="lock"
                  type="password"
                  value={values.confirmPassword}
                  error={errors.confirmPassword ? true : false}
                  onChange={onChange}
                  iconPosition="left"
                  placeholder="Confirm password"
                  className="form-font"
                />
                {/* <div className="mid-container">
                  <Checkbox label="Remember Me" style={{ fontSize: "1.5rem" }} />
                  <a href="#" className="forgot">
                    Forgot Password?
                  </a>
                </div> */}
                <Button fluid size="large" className="btn"  type="submit">
                  <span className="form-font-btn">Register</span>
                </Button>
              </Message>
            </Form>
            <Message className="register-redirect">
              <div >
                Already have an account? <a href="login">Sign In</a>
              </div>
              {/* <div style={{ marginBottom: "1rem" }}>OR</div>
              <div className="reg-icons">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    color: "rgb(66,103,178)",
                    marginRight: "1.5rem",
                    cursor: "pointer"
                  }}
                />
                <FontAwesomeIcon
                  icon={faGooglePlus}
                  style={{ color: "rgb(235,65,50)", cursor: "pointer" }}
                />
              </div> */}
            </Message>
          </Grid.Column>
        </Grid>
      </Wrapper>
    );
  }
  
  const REGISTER_USER = gql`
    mutation register(
      $name: String!
      $email: String!
      $password: String!
      $confirmPassword: String!
    ) {
      register(
        registerInput: {
          name: $name
          email: $email
          password: $password
          confirmPassword: $confirmPassword
        }
      ) {
        id
        email
        name
        createdAt
        token
      }
    }
  `;
  
  export default Register;
