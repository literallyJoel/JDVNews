import { Form, Button } from "react-bootstrap";

export function LoginForm(props) {

    return (
        <Form
            id="Form"
            className="border p-4 rounded"
        >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    value={props.formUserEmail}
                    onChange={(e) => props.setFormUserEmail(e.target.value)}
                    placeholder="Enter email"
                    className="mb-3"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={props.formUserPassword}
                    onChange={(e) => props.setFormUserPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-3"
                />
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button id="formButton" variant="primary" onClick={() =>    props.handleLogin()}>
                    Log In
                </Button>
            </div>
        </Form>
             
    );
}
