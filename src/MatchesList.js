import React from 'react'
import Matches from './Matches'

const MatchesList = ({match, view, handleDelete}) => {

        
if(view === 'Matches'){
    return (
        <div className='MatchesContainer'>
            <h3 className='YourMatches'>Your Matches</h3>
        <div className='MatchesList'>
            <Matches match={match} handleDelete={handleDelete}/>
        </div>
        </div>
    )
    
}
else{
    return(
        <>
        </>
    )
}


}

export default MatchesList
