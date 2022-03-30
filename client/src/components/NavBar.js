import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">E-Mogilev</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            style={{ margin: "0 20px 0 0" }}
                            variant={"light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >Админ панель</Button>
                        <Button
                            variant={"light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)} variant={"light"}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar >
    );
});

export default NavBar;