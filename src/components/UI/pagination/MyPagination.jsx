import React from "react";
import { usePagination } from "../../../hooks/usePagination";
import classes from './MyPagination.module.css'

const MyPagination = ( {totalPages, changePage, page }) => {
	const pages = usePagination(totalPages)
	return(
		<div className={classes.pages__wrapper}>
		{pages.map(p => 				
					<span 
						onClick={() => changePage(p)} 
						className={page===p ? 'page page__current': 'page'}
						key = {p}>{p}
					</span>)}
			</div>
		)
}

export default MyPagination