import { useState } from "react"
import UserData from "./UserData"
import {nanoid} from 'nanoid'
import { useMemo } from "react"
import { useEffect } from "react"
import { useCallback } from "react"
export default function App(){
  const [title,setTitle] = useState('UseMemoHook')
  const [count,setCount] = useState(0)
  const users = useMemo(()=>{
    return [
      {
       name:"Sandy",
       details:['age : 23', 'Job-role : solar Technision']
      },
      {
       name:"Deepu",
       details:['age : 23', 'Job-role : Senior Full Stack Developer']
      },
      {
       name:"Lilly",
       details:['age : 23', 'Job-role : Sub Inspector of police']
      },
      {
       name:"Sticker",
       details:['age : 21', 'Job-role : Java Full Stack Developer']
      }
     ]
  },[])

  // // Here when ever state get upated the child component geting rendered because of for child,component we are passing reference base array
  // // so when ever the state updated the refernce of old is overiting to over come this unnecessary renders we go with 
  // // useMemo Hook That means this useMemo hook set the array reference same until the actual updation done to it.
  // const users = [
  //   {
  //    name:"Sandy",
  //    details:['age : 23', 'Job-role : solar Technision']
  //   },
  //   {
  //    name:"Deepu",
  //    details:['age : 23', 'Job-role : Senior Full Stack Developer']
  //   },
  //   {
  //    name:"Lilly",
  //    details:['age : 23', 'Job-role : Sub Inspector of police']
  //   },
  //   {
  //    name:"Sticker",
  //    details:['age : 21', 'Job-role : Java Full Stack Developer']
  //   }
  //  ]
  const [user,setUserDetails] = useState(users[0].details)
  const userDetails = useCallback(
    (e)=>{
      let usr = users.filter((user)=> user.name === e.target.value)
      setUserDetails(usr[0].details)
  }
  ,[])
  useEffect(()=>{
    console.log('useEffect called')
  },[users,userDetails])
  function inc(){
    setCount(()=>count +1)
  }
  return(
    <div>
      <UserData userData={users} titleName={title} onChnageUser={userDetails}></UserData>
      <select>
        {
          user.map((usr)=>{
            return <option key={nanoid()}>{usr}</option>
          })
        }
      </select>
      <h2>Counter :: {count}</h2>
      <button onClick={()=>inc()}>inCreament</button>
    </div>
  )
}