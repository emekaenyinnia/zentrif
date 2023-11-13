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
import Google from "../assets/images/auth/Google.png";
import Logo from "../assets/images/auth/logo.png";
import LoginLeftImage from "../assets/images/auth/sign-left-log.png";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLock } from "react-icons/sl";
function Register() {
  return (
    <main>
      <div className="main-div-container">
        <Row>
          <Col lg={6} md={5} sm={12}>
            <main className="form-main ">
              <h1 className="main-header">
                Join <span className="text-name-color">Sentrif</span> today
              </h1>
              <div className="form-main-div-large reg-div">
                <h5 className="form-header-text-large">Create account</h5>
                <h6 className="form-header-text-large-description">
                  For business, brand or <strong>personal</strong>
                </h6>
                <Form className="mt-4">
                  <Row className="p-0 m-0 ">
                    <Col md={6} sm={12} className=" m-r">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          First name
                        </Label>
                        <div className="form-group">
                          <Input
                            id="firstname"
                            name="password"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} className="p-0 m-0">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          Last name
                        </Label>
                        <div className="form-group">
                          <Input
                            id="lastname"
                            name="password"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} className=" m-r">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          Email
                        </Label>
                        <div className="form-group">
                          <Input
                            id="email"
                            name="password"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} className="p-0 m-0">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          Phone number
                        </Label>
                        <div className="form-group">
                          <Input
                            id="phonenumber"
                            name="phonenumber"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} className="m-r">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          Password
                        </Label>
                        <div className="form-group">
                          <Input
                            id="Password"
                            name="password"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                          <AiOutlineEye className="form-left-side-right" />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={6} sm={12} className="p-0 m-0">
                      <FormGroup>
                        <Label for="exampleEmail" className="input-label">
                          Confirm Password
                        </Label>
                        <div className="form-group">
                          <Input
                            id="confirmpassword"
                            name="password"
                            placeholder=""
                            type="text"
                            bsSize="lg"
                            className="input-no-icon"
                          />
                          <AiOutlineEye className="form-left-side-right" />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="form-check-div">
                    <FormGroup check className="form-check-formGroup">
                      <Input type="checkbox" />{" "}
                      <Label check className="input-label">
                        I agree to all the {""}
                        <Link to="/" className="link-color">
                          Terms and Privacy policy
                        </Link>
                      </Label>
                    </FormGroup>

                    <Link to="/forget-password" className="form-action-link">
                      Forget Password?
                    </Link>
                  </div>

                  <div className="form-btn-div">
                    <Button className="form-action-button">Sign Up</Button>
                  </div>
                </Form>
                <div className="or-div">
                  <h6 className="form-text">
                    Already have an account? {""}
                    <Link to="/" className="link-color">
                      Log In
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

export default Register;
