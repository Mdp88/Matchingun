import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import './App.css'





const Settings = ({handleGender, gender, view, age, handleAge, handleAgeCommited}) => {



if(view==='Settings'){

    return (
        <div className='SettingsContainer1'>
            
        <h3 className='YourMatches'>Settings</h3>
        <div className='SettingsContainer'>
            <br /><br /><br />
            <div className='SettingsContainer2'>
                <FormControl component="fieldset" >
      <FormLabel component="legend" classes={{ root: 'Label'}} >I want to meet:</FormLabel><br />
      <RadioGroup row   name="gender1" onChange={e=>handleGender(e)} >
        <FormControlLabel checked={gender === '?gender=female&nat=us'} value="women" control={<Radio classes={{ root: 'Radio' , checked: 'RadioChecked'}}/>} label="Women" />
        <FormControlLabel checked={gender === '?gender=male&nat=us'} value="men" control={<Radio classes={{ root: 'Radio' , checked: 'RadioChecked'}}/>}  label="Men" />
        <FormControlLabel checked={gender === '?nat=us'} value="both" control={<Radio classes={{root: 'Radio' , checked: 'RadioChecked'}}/>}  label="Both" />
      </RadioGroup>
    </FormControl>
            <br />
            <br />
            <br />
            <FormLabel component="legend" classes={{ root: 'Label'}} >Between the ages:</FormLabel><br />
            <Slider
            min={21}
            max={100}
        value={age}
        onChange={handleAge}
        onChangeCommitted={handleAgeCommited}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        classes={{root: 'Slider'}}
      />
      </div>
            </div>
            <br /><br />

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


export default Settings
