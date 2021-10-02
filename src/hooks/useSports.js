import { useEffect, useState } from "react";

const useSports=()=>{
    const [sports,setSports]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
        .then(res=>res.json())
        .then(data=>setSports(data.sports));
    },[])
    return[sports];
}
export default useSports;