// import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function ContentFooter() {
	const {todoList, setTodoList, select, setSelect} = useTodo()	
	const activeNum = todoList.filter(item => item.completed === false).length

	const onClick = (info) => {
		setSelect(info)	
	}

	const deleteCompleted = () => {
		const filtered = todoList.filter(item => item.completed === false)
		setTodoList(filtered)
	}

	return (
		<div className='content-footer'>
			<div className='left'>
				<p><span>{activeNum}</span> item{activeNum > 1 ? 's' : ''} left</p>
				<div>
					<button className={select === 'all' ? "selected" : ""} onClick={() => onClick('all')}>All</button>
					<button className={select === 'active' ? "selected" : ""} onClick={() => onClick('active')}>Active</button>
					<button className={select === 'completed' ? "selected" : ""} onClick={() => onClick('completed')}>Completed</button>
				</div>
			</div>
			<button onClick={() => deleteCompleted()}>Clear Completed</button>
		</div>
	)
}

export default ContentFooter