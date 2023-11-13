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
import LoginLeftImage from "../assets/images/auth/forgetpassword-left-log.png";
import { Link,  useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLock } from "react-icons/sl";

function ForgetPassword() {
    const navigate = useNavigate()
  return (
    <main>
      <div className="main-div-container">
        <Row>
          <Col lg={6} md={5} sm={12}>
            <main className="form-main ">
              <div className="form-main-div-large-forget">
                <h1 className="main-header">
                  Forgot <span className="text-name-color">Password</span>
                </h1>
                <p className="form-head-text">
                  Please enter your email address and we will send you the reset
                  password link to your email inbox
                </p>
                <Form className="mt-2">
                  <FormGroup>
                    <Label for="exampleEmail" className="input-label-2">
                      Email Address
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Enter your email address"
                      type="email"
                      bsSize="lg"
                      className="input-no-icon"
                    />
                  </FormGroup>
                  <div className="form-btn-div">
                    <Button type="button" className="form-action-button" 
                    
                    onClick={()=> navigate('/reset-password')}
                    >Submit</Button>
                  </div>
                </Form>

                <div className="or-div">
                  <h6 className="form-text">
                    <Link to="/signup" className="link-color">
                      Back to login
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
                <div className="left-side-div-description2">
                  <p className="left-side-description2">
                    Can’t remember your password? Don't worry, we've got your
                    back. Reset your password and regain access with just a few
                    clicks!"
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

export default ForgetPassword;
