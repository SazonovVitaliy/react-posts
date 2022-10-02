import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsService } from "../API/PostsService";
import { useFetching } from "../hooks/useFetching";
import PostIdPageContent from "../components/PostIdPageElem";
import PostIdPageComments from "../components/PostIdPageComments";
import MyButton from "../components/UI/button/MyButton";

const PostIdPage = () => {
	const params = useParams()
	const navigate = useNavigate()
	const [ post, setPost] = useState ({})
	const [ comments, setComments] = useState([])
	const [fetchPostById, isLoading, error ] = useFetching( async () => {
		const posts = await PostsService.getById(params.id)
		setPost(posts.data)
	})

	const [fetchComments, isComLoading, comError] = useFetching ( async () => {
		const comments = await PostsService.getCommentsById(params.id)
		setComments(comments.data)
	})

	useEffect(()=>{
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	const goBack = () => navigate(-1)
	
		return(
			<>
				<MyButton onClick={()=>goBack()}>Назад</MyButton>
				<PostIdPageContent 
					error={error} 
					isLoading={isLoading} 
					id={post.id} title= {post.title} 
					body ={post.body}
				/>
				<PostIdPageComments 
					comError={comError} 
					isComLoading={isComLoading} 
					comments={comments}
				/>
			</>
		)
	}


export default PostIdPage