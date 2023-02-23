import { Button, Navbar, Nav, Container } from "react-bootstrap";
import logoLight from "../assets/img/jdvLogo/logoLight.png";
import { MdOutlineSettings } from "react-icons/md"
export const Navibar = () => {
    return (
        <Navbar id="navibar" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logoLight}
                        width="35"
                        className="d-inline-block align-top"
                    />{" "}
                    <b>JDV News</b>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Button id="settingsButton"className="mr-2">
                        <MdOutlineSettings/>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
};
