import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
	const {signIn} = useAuth()
	const navigate = useNavigate()
	const location = useLocation()
	const logIn = (e) => {
		e.preventDefault()
		const form = e.target
		const user = form.username.value
		signIn(user, ()=>navigate(fromPage, {replace: true}))
	}
	const fromPage = location.state?.form?.pathname || '/posts'
	return(
		<>
			<h1>Выполните вход</h1>
			<form onSubmit={logIn}>
				<label>
					<MyInput type = 'text' name="username" placeholder = 'Введите логин'/>
				</label>
				{/*<MyInput type = 'password' placeholder = 'Введите пароль'/>*/}
				<MyButton type = 'submit'>Войти</MyButton>
			</form>
		</>
	)
}

export default Login