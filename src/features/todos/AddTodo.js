import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

export const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text)
        if(text) {
            dispatch(addTodo(text));
            setText('');
        }
    }

    return (
        <form className='addTodo' onSubmit={handleSubmit}>
            <input className='addTodo__input' onChange={(e) => setText(e.target.value)} type='text' value={text} placeholder='What do you need to do?'/>
            <button className='addTodo__btn' type='submit'>Add</button>
        </form>
    )
}