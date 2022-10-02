import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import MyButton from "../UI/button/MyButton";
import classes from "./Layout.module.css"

const Layout = () => {
	const navigate = useNavigate()
	const {user, signOut} = useAuth()
	const handleOut = () => {
		signOut(()=>navigate('/login', {replace: true}))
	}
	return(
		<>
			<header className={classes.header}>
				
				<Link className={classes.links} to="/about">О сайте</Link>
				<Link className={classes.links} to="/posts">Посты</Link>
				{user
				?<>
					<div className={classes.layout__header}>
					<h1 >Добро пожаловать {user}!</h1>
					</div>
					<MyButton onClick={handleOut}  style={{color:'red', padding: '3px 0 0 16px'}}>Выйти</MyButton>
				</>
				:null}
			</header>
			<main className={classes.main}>
				<Outlet/>
			</main>
			<footer className={classes.footer}>2022</footer>
		</>
	)
}

export default Layout
