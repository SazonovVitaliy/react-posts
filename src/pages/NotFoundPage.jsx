import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return(
		<>
			<div style={{color: "red", marginBottom: '20px'}}>Страница не найдена!</div>
			<div>Перейти на страницу <Link to="/">О сайте</Link></div>
			
		</>
	)
}

export default NotFoundPage