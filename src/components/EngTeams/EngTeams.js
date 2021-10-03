import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
//import useTeams from '../../hooks/useTeams';
import EngTeam from '../EngTeam/EngTeam';

const EngTeams = () => {
    // const [teams]=useTeams('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League');
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    if(teams.length){
        return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                 teams.map(team=> teams.length?<EngTeam key={team.idTeam} team={team}></EngTeam>:<div>
                    <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
                </div>)    
                              
                }
            </Row>
            
        </Container>
    )
    }
    else{
        return(
           <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> 
        )
        
    }
        
    
};

export default EngTeams;