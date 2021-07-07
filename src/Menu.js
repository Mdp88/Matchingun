import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsIcon from '@material-ui/icons/Settings';
import Add from '@material-ui/icons/AddCircleOutlineRounded';
import {useState, useEffect} from 'react'

const Menu = ({notifications, handleView, resetNotifications}) => {

    const [opacity, setOpacity] = useState(0)
    const [notiamount, setNotiamount] = useState(0)

    useEffect(() => {
        if(notifications >0){
            setOpacity(1)
        }
    
        if(notifications === 0){
            setOpacity(0)
        }
    }, [notifications])

    useEffect(() => {
        if(notifications <10){
            setNotiamount(notifications)
        }
    
        if(notifications >= 10){
            setNotiamount('!')
        }
    }, [notifications])


    return (
        <div className='Menu'>
            <div className='Dot' style={{opacity: opacity}}>{notiamount}</div>
            <div className='Icon' onClick={()=>{handleView('Matches');resetNotifications()}}>
            <InboxIcon className='InboxIcon'/>
            </div>
            <div className='Icon' onClick={()=>handleView('Add')}>
            <Add className='AddIcon'/>
            </div>
            <div className='Icon' onClick={()=>handleView('Settings')}>
            <SettingsIcon className='SettingsIcon' value='Settings'/>
            </div>
        </div>
    )
}

export default Menu
