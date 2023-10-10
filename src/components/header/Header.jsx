import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LoginContext } from "../Auth/login/LogInContext";
import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { When } from "react-if";
import profile from "./laith profile.png";
import { Link } from "react-router-dom";

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
              <Link className="nav-link" to="/">
                Home
              </Link>
              <When condition={state.user.role === "user"}>
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </When>
              <When condition={state.user.role === "user"}>
                <Link className="nav-link" to="/bookings">
                  {" "}
                  Bookings{" "}
                </Link>
              </When>
              {/* <Link to="/bookings">Bookings</Link> */}
              <Link className="nav-link" to="/reels">
                Reels
              </Link>
              <Link className="nav-link" to="/map">
                Map
              </Link>
              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/restaurants">
                    {" "}
                    Resturents{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/hotels">
                    {" "}
                    Hotels{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/activities">
                    {" "}
                    Activities{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link className="nav-link" to="/aboutus">
                    {" "}
                    About Us{" "}
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <When condition={!state.loggedIn}>
            <Link to="/login" className="logInfo nav-link">
              Login
            </Link>
            <Link to="/login" className="logInfo nav-link">
              Sign up
            </Link>
          </When>
          <When condition={state.loggedIn}>
            <When condition={state.user.role === "owner"}>
              <Link to="/dashboard/owner" className="logInfo nav-link">
                Dashboard
              </Link>
            </When>
            <When condition={state.user.role === "admin"}>
              <Link to="/dashboard/admin" className="logInfo nav-link">
                Dashboard
              </Link>
            </When>
            <Link className="nav-link" onClick={state.logout}>
              Signout
            </Link>
            <Link className="nav-link">
              <img src={profile} alt="" className="img" />
            </Link>
          </When>
        </Container>
      </Navbar>
    </section>
  );
}
