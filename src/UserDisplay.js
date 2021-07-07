import './App.css'
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import NotInterestedIcon from '@material-ui/icons/NotInterested';


const UserDisplay = ({ users, userLiked, userSkiped, liked, notInterested, view }) => {

    if(view === 'Add'){
    if (users[users.length - 1] === undefined) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else{
        return (
            <div className='UserContainer'>
                <div className='NotContainer'>
                <NotInterestedIcon style={{ fontSize: 100 }} className={notInterested}/>
                </div>
                <div className='LikedContainer'>
                <FavoriteIcon style={{ fontSize: 100 }} className={liked}/>
                </div>
                <br />
                <img className='FotoDisplay' src={users[users.length - 1].picture.large} alt="foto" />
                <br />
                <h1 className='NameAge'>{users[users.length - 1].name.first} {users[users.length - 1].dob.age}</h1>
                <br />
                <div className='BotonContainer'>
                    <button className='BotonSkip' onClick={()=>userSkiped()}><CloseIcon fontSize='large' /></button>
                    <button className='BotonLike' onClick={() => userLiked()}><FavoriteIcon fontSize='large' /></button>
                </div>

            </div>
        )
    }
    }
    else{
        return(
            <>
            </>
        )
    }

}

export default UserDisplay
