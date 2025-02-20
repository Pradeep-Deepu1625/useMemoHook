import { nanoid } from "nanoid"
import { memo } from "react"
export default memo(function UserData({titleName,userData,onChnageUser}){
    console.log(titleName,'this Child was called')
    return(
        <>
            <h1 style={{textAlign:"center"}}>{titleName}</h1>
            <select onChange={onChnageUser}>
            {userData.map((userName)=>(<option key={nanoid()}>{userName.name}</option>))}
            </select>
        </>
    )
})