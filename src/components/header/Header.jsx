
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.scss"
import  { useEffect, useState } from 'react';



export default function Header() {

    
  const className = 'header-scroll';
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
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    <section >
      <Navbar id={'navbar1'} className={isScrolled ? className : ''} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  className='navbarBrand' href="/">Wanderlust</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorites" >Favorites</Nav.Link>
              <Nav.Link href="/bookings" >Bookings</Nav.Link>
              <NavDropdown title="Our Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/restaurants" >Resturents</NavDropdown.Item>
                <NavDropdown.Item href="/hotels" >
                  Hotels
                </NavDropdown.Item>
                <NavDropdown.Item href="/activities" >Activities</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/aboutus" >
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
    </section>
  )
}
