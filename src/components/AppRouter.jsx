import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import RequireAuth from "../hoc/RequireAuth";
import { AuthProvider } from "../hoc/AuthProvider";
const AppRouter = () => {
	
	return(
		<AuthProvider>
			<Routes>
			<Route path="/" element = {<Layout />}>
				<Route path="login" element={<Login/>}/>
				<Route index element={<About/>}/>
				<Route path="posts" element={
					<RequireAuth>
						<Posts/>
					</RequireAuth>
				}/>
				<Route path="posts/:id" element={<PostIdPage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Route>
		</Routes>
		</AuthProvider>
	)
}

export default AppRouter