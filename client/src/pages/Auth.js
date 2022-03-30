import React, { useContext, useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI"
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 56 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column align-items-center">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button onClick={click} style={{ width: 200 }} className='mt-3 mb-3' variant={"dark"}>
                        {
                            isLogin ? "Войти" : "Создать аккаунт"
                        }
                    </Button>
                    {
                        isLogin ?
                            <div>Ещё нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Создать аккаунт</NavLink></div>
                            :
                            <div>Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>
                    }

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;