import React from "react";
import PostItem from "./PostItem";
//import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({posts,title,remove}) =>{
	return(
		(posts.length)
		?
			<div>
				<h1 style={{textAlign:'center'}}>{title}</h1>
					{posts.map((post, index)=>
							<PostItem key={post.id} remove={remove} number={post.id}  post={post}/>
					)}
			</div>
		:
			<h1 style={{textAlign:'center'}}>Посты не найдены!</h1>
	)	
}


export default PostList