import { useEffect, useState } from "react"

const useTeams=(url)=>{
   const [teams,setTeams]= useState([])
   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>setTeams(data.teams))
   },[url])
   console.log(teams)
   return [teams]
}
export default useTeams;