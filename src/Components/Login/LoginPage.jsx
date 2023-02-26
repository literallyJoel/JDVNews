import { useState } from "react";
import { Tabs, Tab, Col } from "react-bootstrap";
import jdvdark from "../../assets/img/jdvlogo/logoDark.png";
import "./login.css";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Login = (props) => {
  const [formUserEmail, setFormUserEmail] = useState("");
  const [formUserPassword, setFormUserPassword] = useState("");

  //defined here so both login and register forms can call it
  function handleLogin() {
    const formData = new URLSearchParams({
      email: formUserEmail,
      password: formUserPassword,
    });
    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    }).then((resp) => resp.json()).then((data) =>{
      localStorage.setItem("token", data.token);
      props.setToken(data.token);
    });
    

  }
  return (
    <>
      <div id="headerText">
        <div id="headerLogo">
          <img src={jdvdark} width="60" />
        </div>
        <div style={{ textAlign: "center", marginTop:"1%" }}>
          Login or Register to view your personalised feed.
        </div>
      </div>
      <div style={{ marginLeft: "28%" }}>
        <Tabs defaultActiveKey="login" id="tabs" className="mb-3">
          <Tab eventKey="login" title="Login">
            <LoginForm formUserEmail={formUserEmail}
              setFormUserEmail={setFormUserEmail}
              formUserPassword={formUserPassword}
              setFormUserPassword={setFormUserPassword}
              handleLogin={handleLogin} />
          </Tab>

          <Tab eventKey="register" title="Register">
            <RegisterForm formUserEmail={formUserEmail}
              setFormUserEmail={setFormUserEmail}
              formUserPassword={formUserPassword}
              setFormUserPassword={setFormUserPassword}
              handleLogin={handleLogin} />
          </Tab>

        </Tabs>
      </div>

    </>
  );



}

