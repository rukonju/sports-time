import React from 'react';
import { useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router';
const Details = () => {
    const {teamId}=useParams()

    const history=useHistory();
    const handleBackBtn=()=>{
        history.push('/english_league')
    }
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    const getTeam=teams.find(team=>team.idTeam===teamId)
    console.log(getTeam);
    if(getTeam){
        const {strDescriptionEN,strTeam,strStadium, strStadiumLocation,strStadiumThumb,strTeamFanart1 }=getTeam;
        return (
            <div>
                <h1>{strTeam}{teamId}</h1>
                <p>{strDescriptionEN.slice(0,200)}</p>
                <img src={strStadiumThumb} alt="" width="500px" style={{margin:'auto'}}/>
                <small>{strStadium}</small>
                <p>{strStadiumLocation}</p>
                <img src={strTeamFanart1} alt="" width="500px" />
                <Button onClick={handleBackBtn} variant="secondary" size="lg"> back</Button>
            </div>
        );

    }
    else{
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }
    
    /* const {strDescriptionEN,strTeam,strStadium,strStadiumDescription,strStadiumLocation,strStadiumThumb,strTeamBadge,strTeamFanart1,strTeamLogo}=getTeam */

    
};

export default Details;