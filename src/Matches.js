import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

const Matches = ({match, handleDelete}) => {

    if(match[0] !== undefined){
    return (
    match.map((match, matchIdx)=>{

        return(
            <div key={matchIdx} className='ListaMatch'>
                <img className='FotoMatch' src={match.picture.thumbnail} alt="foto de perfil" />
                <div className='MatchHeading'><span className='MatchName'>{match.name.first}</span><CloseIcon className='DeleteMatch' onClick={(e)=>handleDelete(e, matchIdx)}/></div>
                <p>You have a match! send {match.gender==='male'? 'him': 'her'} a message at <b>{match.email}</b> to start a conversation!</p>
            </div>   
                )}))}
if(match[0] === undefined){
    return(
    <div className='ListaMatch'>
    <p>No Matches yet...</p>
    <p>Keep looking for your soulmate!</p>
    </div>
    )
}


}

export default Matches
