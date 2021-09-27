import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../../store/modules/user/action'
import './style.css'
const UserCard = () =>{
    const dispatch = useDispatch()
    const [ input, setInput ] = useState("")
    const handleClick = () =>{
        dispatch(changeName(input))
        setInput("")
    }
    return(
        <div className='user-container'>
            <TextField  
                id='outlined-basic'
                label='Insira seu nome'
                variant='outlined'
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />
            <Button variant='text' onClick={handleClick}>Enviar</Button>
        </div>
    )
}
export default UserCard