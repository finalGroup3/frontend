import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LoginContext } from "../Auth/login/LogInContext";
import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { When } from "react-if";
import profile from "./laith profile.png";

export default function Header() {
  const state = useContext(LoginContext);

  const className = "header-scroll";
  const scrollTrigger = 200;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollTrigger) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Navbar
        id={"navbar1"}
        className={isScrolled ? className : ""}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="navbarBrand" href="/">
            Wanderlust
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/bookings">Bookings</Nav.Link>
              <Nav.Link href="/reels">Reels</Nav.Link>
              <Nav.Link href="/map">Map</Nav.Link>
              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/restaurants">
                  Resturents
                </NavDropdown.Item>
                <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
                <NavDropdown.Item href="/activities">
                  Activities
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <When condition={!state.loggedIn}>
            <Nav.Link href="/login" className="logInfo">
              Login
            </Nav.Link>
            <Nav.Link href="/login" className="logInfo">
              Sign up
            </Nav.Link>
          </When>
          <When condition={state.loggedIn}>
            <When condition={state.user.role === "owner"}>
              <Nav.Link href="/dashboard/owner" className="logInfo">
                Dashboard
              </Nav.Link>
            </When>
            <When condition={state.user.role === "admin"}>
              <Nav.Link href="/dashboard/admin" className="logInfo">
                Dashboard
              </Nav.Link>
            </When>
            <Nav.Link onClick={state.logout}>Signout</Nav.Link>
            <Nav.Link>
              <img src={profile} alt="" className="img" />
            </Nav.Link>
          </When>
        </Container>
      </Navbar>
    </section>
  );
}
