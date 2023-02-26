import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function RegisterForm(props) {
    const [registerFormName, setRegisterFormName] = useState("");
    const [registerFormConfirmPass, setRegisterFormConfirmPass] = useState("");

    function handleRegister() {

        if (props.formUserPassword === registerFormConfirmPass) {
            const formData = new URLSearchParams({
                name: registerFormName,
                email: props.formUserEmail,
                password: registerFormConfirmPass,
            });
            fetch("/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString()
            }).then((resp) =>{
                if(resp.status === 200){
                    props.handleLogin();
                }
            });
        }else{
            console.log("Nomatch")
        }
    }

    return (

        <Form id="Form" className="border p-4 rounded">
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={registerFormName} onChange={(e) => setRegisterFormName(e.target.value)} placeholder="Enter name" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={props.formUserEmail} onChange={(e) => props.setFormUserEmail(e.target.value)} type="email" placeholder="Enter email" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control alue={props.formUserPassword} onChange={(e) => props.setFormUserPassword(e.target.value)} type="password" placeholder="Password" className="mb-3" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" value={registerFormConfirmPass} onChange={(e) => setRegisterFormConfirmPass(e.target.value)} placeholder="Confirm password" className="mb-3" />
            </Form.Group>

            <div className="d-flex justify-content-end">
                <Button id="formButton" variant="primary" onClick={() => handleRegister()}>
                    Register
                </Button>
            </div>
        </Form>

    );
}