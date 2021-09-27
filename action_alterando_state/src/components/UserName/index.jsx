import { useSelector } from "react-redux"
const UserName = () =>{
    const name =  useSelector((state)=>state.user.name)
    return(
        <p>Bem vindo, {name}</p>
    )
}
export default UserName