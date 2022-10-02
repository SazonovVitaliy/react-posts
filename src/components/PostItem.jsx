import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";


const PostItem = ({post,number,remove}) =>{


	const onDeletePost = () =>{
		remove(post)
	}

	let navigate=useNavigate()

	
	const id = post.id
		const hahdlePost = () =>{
			navigate(`/posts/${id}`)
		}

	return (
		<div className="post">
			<div className="post__content">
				<strong>{number}. {post.title}</strong>
				<div>{post.body}</div>
			</div>
			<div className="post__btns">
				<MyButton  onClick={hahdlePost}>Открыть</MyButton>
				<MyButton onClick={()=>onDeletePost()}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem