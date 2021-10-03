import { useEffect, useState } from "react";

const useTeams=(url)=>{
   const [teams,setTeams]= useState([])
   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>setTeams(data.teams))
   },[url])
   
   return [teams]
}
export default useTeams;