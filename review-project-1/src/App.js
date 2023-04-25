import React, { useState } from 'react';

import AddNewUser from './components/CreatedUser/AddNewUser';
import CreatedUser from './components/CreatedUser/CreatedUser';


function App() {

  const [userData, setUserData] = useState([]);

  const userInfo = (userName, userAge) => {
    // console.log(userData);
    setUserData(prevuUserData => {
      const id = Math.random().toString()
      return [
        ...prevuUserData,
        { name: userName, age: userAge, id: Math.random().toString() },
      ]
    })
  }

  // console.log(userData);
  
  // console.log(userData.map((itmes => itmes)));
  // console.log(userData.map((itmes => itmes.name)));

  return (
    <div>
      <AddNewUser 
        onUserInfo = {userInfo}
      />
      <CreatedUser users={userData}/>
    </div>
  );
}

export default App;
