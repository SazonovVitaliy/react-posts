import React from "react";
import MyLoader from "./UI/loader/MyLoader";

const PostIdPageComments = ({comError, isComLoading, comments}) => {
	return(
		<>
		{comError && <h1>Произошла ошибка {comError}</h1>}
		{isComLoading
		?<MyLoader/>
		:<>
			<h1 style={{marginTop: '30px'}}>Комментарии</h1>
			<div>
				{comments.map(comm => 
					<div key = {comm.id} >
						<h5>{comm.email}</h5>
						<div>{comm.body}</div>
					</div>)}
			</div>
		</>
		}
		</>
	)
}

export default PostIdPageComments