import { Button, DropdownButton, Navbar , Dropdown} from "react-bootstrap";
import logoLight from "../assets/img/jdvlogo/logoLight.png";
import { MdOutlineSettings } from "react-icons/md"
import decode from "jwt-decode";

export const Navibar = (props) => {

    function Logout(){
        localStorage.removeItem("token");
        props.setToken(undefined);
    }
    function LoginButton() {
    

        if(props.token){
         
            return(
                <DropdownButton id="loginButton" title={decode(props.token).userName}>
                    <Dropdown.Item>My Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => Logout()}>Logout</Dropdown.Item>
                </DropdownButton>
            )
        }else{
          
            return(
                <Button id="loginButton">Login</Button>
            )
        }

    }
    return (
        <Navbar id="navibar" variant="dark" className="justify-content-between">

            <div className="d-flex">
                <Navbar.Brand href="#home" style={{ marginLeft: "10vw" }}>
                    <img
                        alt=""
                        src={logoLight}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    JDVNews
                </Navbar.Brand>
            </div>

            <div className="d-flex justify-content-end" style={{ marginRight: "10vw" }}>
                <LoginButton/>
                <Button id="settingsButton" style={{ marginLeft: "5vw" }}>
                    <MdOutlineSettings />
                </Button>
            </div>

        </Navbar>

    );
};
