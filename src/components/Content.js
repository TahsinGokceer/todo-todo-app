import { useEffect, useState } from 'react'
import ContentFooter from './ContentFooter'
import { useTodo } from '../context/TodoContext'

function Content() {
    const {todoList, setTodoList, select} = useTodo()
    const [filtered, setFiltered] = useState([])

    const onClick = (index) => {
        const selectedItem = filtered[index]
        let n = todoList.findIndex(item => item === selectedItem)
        let change = []

        for(let i = 0; i < todoList.length; i++){
            if(i === n){
                change.push({title: todoList[n].title, completed: !todoList[n].completed})
            }else{
                change.push(todoList[i])
            }            
        }

        setTodoList(change)
    }

    useEffect(() => {
        if(select === "completed") {
			setFiltered(todoList.filter(item => item.completed === true))
		}
		else if(select === "active"){
			setFiltered(todoList.filter(item => item.completed === false))
		}else{
			setFiltered(todoList)
		}

        localStorage.setItem("todoList", JSON.stringify(todoList))
        localStorage.setItem("select", select)
    }, [select, todoList])    

    const onDelete = (i) => {
        const deleted = todoList.filter(item => item !== todoList[i])
        setTodoList(deleted)
    }

    return (
        <div className='content'>
            <ul>            
                {
                    filtered.map((item, i) => 
                        <li key={i}>
                            <div className='todos'>
                                <button className={item.completed ? "checked" : ""} onClick={() => onClick(i)}><span className='tik'>✔</span></button>
                                <span className={item.completed ? "checked todo" : "todo"}>{item.title}</span>
                            </div>
                            <button className='delete' onClick={() => onDelete(i)}>x</button>
                        </li>)
                }
            </ul>

            <ContentFooter />
        </div>
    )
}

export default Content