import './App.css';
import {useState, useEffect} from 'react';
import UserDisplay from './UserDisplay';
import Menu from './Menu'
import Settings from './Settings'
import MatchesList from './MatchesList'


function App() {


  const [view, setView] = useState('Add')
  const [notInterested, setNotInterested] = useState('Not')
  const [liked, setLiked] = useState('Liked')
  const [users, setUsers] = useState([])
  const [gender, setGender] = useState('?gender=female&nat=us')
  const [match, setMatch] = useState([])
  const [notifications, setNotifications] = useState(0)
  const [age, setAge] = useState([21,100])

  const minAge = Math.min(...age)
  const maxAge = Math.max(...age)



  const getUsers=()=>{
    fetch(`https://randomuser.me/api/${gender}&results=100`)
      .then(response=> response.json())
      .then(data=> setUsers([data.results.find(user => user.dob.age>minAge && user.dob.age<maxAge)]))
      .catch(error=>console.log(error))
  }

  const userLiked=()=>{
    setLiked('Liked animate__bounceIn')
    let temp = JSON.stringify(match)
    temp = JSON.parse(temp)
    
    // console.log('You liked '+users[users.length - 1].name.first+'!'+users[users.length - 1].nat)
    if(Math.random() > 0.8 ){
      // console.log("It's a Match!")
      setMatch([users[users.length -1],...temp])
      setNotifications(notifications +1)
    }
    setTimeout(()=>{
      setLiked('Liked')
    getUsers()}
    
    , 500)

    
  }

  const userSkiped=()=>{
    setNotInterested('Not animate__bounceOut')
    // console.log('Nope '+users[users.length - 1].name.first+'!')
    setTimeout(()=>{
      setNotInterested('Not')
    getUsers()}
    
    , 500)
  }

  const handleGender=(e)=>{
    if(e.target.value==='women'){
      setGender('?gender=female&nat=us')
    }
    if(e.target.value==='men'){
      setGender('?gender=male&nat=us')
    }
    if(e.target.value==='both'){
      setGender('?nat=us')
    }
  }


  useEffect(()=>{
    getUsers()
  },[gender])


  const handleView =(v)=>{
    setView(v)
  }

  const resetNotifications=()=>{
    setNotifications(0)
  }

  const handleAge=(event, newValue)=>{
    setAge(newValue)
  }


  useEffect(() => {
    if(minAge >= 70){
      setAge([70,maxAge])
    }
    else if(maxAge - minAge < 10){
      setAge([minAge,minAge +10]) 
    }
  }, [minAge])


  useEffect(() => {
    if(maxAge <= 31){
      setAge([21,31])
    }
    else if(maxAge - minAge < 10){
      setAge([maxAge-10,maxAge]) 
    }
  }, [maxAge])

  const handleAgeCommited=()=>{
    getUsers()
  }

  const handleDelete=(e, id)=>{
    let temp = JSON.stringify(match)
    temp = JSON.parse(temp)
    
    temp.splice(id,1)
    setMatch([...temp])
  }


  return (
    <div className="App">
      <Menu notifications={notifications} handleView={handleView} resetNotifications={resetNotifications}/>
      <br />
      <UserDisplay users={users} userLiked={userLiked} userSkiped={userSkiped} liked={liked} notInterested={notInterested} view={view}/>
      <Settings handleGender={handleGender} gender={gender} view={view} age={age} handleAge={handleAge} handleAgeCommited={handleAgeCommited} />
      <MatchesList match={match} view={view} handleDelete={handleDelete}/>
      <div className='LogoContainer'>
        <span className='LogoText'>MatchinGun </span><img src="LogoApp.png" alt="Logo" className='Logo'/>
      </div>
    </div>
  );
}

export default App;
