import React from "react";
import MyLoader from "./UI/loader/MyLoader";
const PostIdPageContent = ({id, title, body, error, isLoading}) => {
	return(
		<div>
			
			{error && <h1>Произошла ошибка {error}</h1>}
			{isLoading
				?<MyLoader/>
				:<>
					<h1 style={{textAlign: 'center'}}>Вы открыли страницу поста с ID={id} </h1>
					<h3 style={{margin: '40px 0 20px'}}>{id}. {title}</h3>
					<div>{body}</div>
				</>
			}
		</div>
	)
}

export default PostIdPageContent