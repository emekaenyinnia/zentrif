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
import LoginLeftImage from "../assets/images/auth/rest-left-log.png";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLock } from "react-icons/sl";
function ResetPassword() {
  return (
    <main>
      <div className="main-div-container">
        <Row>
          <Col lg={6} md={5} sm={12}>
            <main className="form-main ">
              <div className="form-main-div-large-forget-2">
                <h1 className="main-header text-center">
                  Forgot <span className="text-name-color">Password</span>
                </h1>

                <Form className="mt-5">
                  <FormGroup>
                    <Label for="exampleEmail" className="input-label-2">
                      Old Password
                    </Label>
                    <div className="form-group">
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your previous password"
                        type="password"
                        bsSize="lg"
                        className="input-no-icon"
                      />
                      <AiOutlineEye className="form-left-side-right" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail" className="input-label-2">
                      New Password
                    </Label>
                    <div className="form-group">
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your previous password"
                        type="password"
                        bsSize="lg"
                        className="input-no-icon"
                      />
                      <AiOutlineEye className="form-left-side-right" />
                    </div>
                    <p className="input-note">Atleast 8 characters, but longer is better</p>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail" className="input-label-2">
                      ConfirmPassword
                    </Label>
                    <div className="form-group">
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your previous password"
                        type="password"
                        bsSize="lg"
                        className="input-no-icon"
                      />
                      <AiOutlineEye className="form-left-side-right" />
                    </div>
                  </FormGroup>
                  <div className="form-btn-div">
                    <Button className="form-action-button">Submit</Button>
                  </div>
                </Form>
              </div>
            </main>
          </Col>
          <Col lg={6} md={7} sm={12}>
            <div className="col-left-div">
              <main className="left-main ">
                <img src={Logo} alt="" className="logo" />

                <img src={LoginLeftImage} alt="" className="left-side-image" />
                <div className="left-side-div-description2">
                  <p className="left-side-description2">
                    "Elevate your security game! Change your password and
                    fortify your account
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

export default ResetPassword;
