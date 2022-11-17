import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap'
import logo from "../images/logo.png";
import { CgProfile } from "react-icons/cg";

export const Navigation = () => {
    const [screenSize, setscreenSize] = useState(false)
    const handleResize = () => window.matchMedia("(max-width:450px)").matches ? setscreenSize(true) : setscreenSize(false)
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <Navbar className='nav-height bg-white'>
            <Container>
                <Navbar.Brand href="#home"><Image src={logo} className='logo' /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className='d-none d-md-block' style={{ color: "rgba(128, 0, 128, 0.25)" }}>My Assignment</Nav.Link>
                        <Nav.Link href="#" className='d-none d-md-block' style={{ color: "rgba(128, 0, 128, 0.25)" }}>Chat With Mentor</Nav.Link>
                        {screenSize
                            ? <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant='primary'>     profileName  </Dropdown.Toggle>
                                <Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>
                            : <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className='bg-white text-primary border-0'>
                                    <CgProfile /> profileName
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
