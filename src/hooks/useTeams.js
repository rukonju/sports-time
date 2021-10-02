import { useEffect, useState } from "react"

const useTeams=()=>{
   const [teams,setTeams]= useState([])
   useEffect(()=>{
       fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
       .then(res=>res.json())
       .then(data=>setTeams(data.teams))
   },[])
   console.log(teams)
   return [teams]
}
export default useTeams;