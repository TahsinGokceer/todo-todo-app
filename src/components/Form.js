import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function Form() {
    const [title, setTitle] = useState('')
    const {setTodoList} = useTodo()

    const handleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            setTodoList(prev => [...prev, {title: title, completed: false}])
            setTitle('')
        }        
    }

    return (
        <div className='form'>
            <h1 className="title">to-do</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input className='input' placeholder='What can I do?' value={title} type="text" onChange={e => handleChange(e)}/>               
            </form>           
        </div>
    )
}

export default Form