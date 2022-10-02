import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) =>{

	return (
		<>
		
		<MyInput
			placeholder="Поиск..."
			value={filter.query}
			onChange={e => setFilter({...filter, query: e.target.value})}
			/>
			<MySelect 
			value={filter.sort}
			onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
			defaultValue='Сортировать'
			options={[
				{value:'title', name: 'По заголовку'},
				{value:'body', name: 'По содержанию'}
			]}
			/>
		</>
	)
}


export default PostFilter