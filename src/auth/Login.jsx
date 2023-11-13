import React from "react";
import {
  Row,
  Col,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  FormFeedback,
} from "reactstrap";
import Google from "../assets/images/auth/Google.png"
import Logo from "../assets/images/auth/logo.png";
import LoginLeftImage from "../assets/images/auth/login-left-log.png";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import {MdOutlineMailOutline} from "react-icons/md"
import {SlLock} from 'react-icons/sl'
function Login() {
  return (
    <main>
      <div className="main-div-container">
        <Row>
          <Col lg={6} md={5} sm={12}>
            <main className="form-main ">
              <h1 className="main-header">
                Welcome to <span className="text-name-color">Sentrif</span>
              </h1>
              <div className="form-main-div">
                <h5 className="form-header-text">Log In</h5>
                <Form>
                  <FormGroup className="form-group">
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                      bsSize="lg"
                    />
                    <MdOutlineMailOutline className="form-left-side-icon" />
                  </FormGroup>

                  <FormGroup className="form-group">
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                      bsSize="lg"
                    />
                    <SlLock className="form-left-side-icon" />
                    <AiOutlineEye className="form-left-side-right" />
                  </FormGroup>

                  <FormGroup check>
                    <Link to="/forget-password" className="form-action-link">
                      Forget Password?
                    </Link>
                  </FormGroup>
                  <Button className="form-action-button">Log in</Button>
                </Form>
                <div className="or-div">
                  <span className="form-line"></span>
                  <h6 className="form-text">Or continue with </h6>
                  <span className="form-line"></span>
                </div>
                <Button className="socialite-btn">
                  <img src={Google} alt="" />
                  <h6 className="socialite-btn-text">Google</h6>
                </Button>
                <div className="or-div">
                  <h6 className="form-text">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="link-color">
                      Sign Up
                    </Link>
                  </h6>
                </div>
              </div>
            </main>
          </Col>
          <Col lg={6} md={7} sm={12}>
            <div className="col-left-div">
              <main className="left-main ">
                <img src={Logo} alt="" className="logo" />

                <img src={LoginLeftImage} alt="" className="left-side-image" />
                <div className="left-side-div-description">
                  <p className="left-side-description">
                    Log into your account with us, keep up with your customers
                    everywhere.{" "}
                    <p className="left-side-description-small">
                      just a few clicks and your dashboard is ready!.
                    </p>
                  </p>
                </div>
              </main>
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Login;
