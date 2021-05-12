
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import app from "./Firebase/Firebase.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NAVIGATION_BAR from './Components/Navbar/Navbar_top.jsx';
import FOOTER from './Components/Footer/Footer.jsx';
import HOMESCREEN from './Components/HomeScreen/HomeScreen.jsx';
import PROFILESCREEN from './Components/ProfileScreen/Profile_Screen.jsx';
import UPLOADSHOTSCREEN from './Components/UploadShot/UploadShot_Screen.jsx';
import POSTSCREEN from './Components/Post_Screen/Post_Screen.jsx';




const App = () => {

  const db = firebase.firestore();

  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);

  const [loading, setLoading] = useState(false);
  const [USER, set_USER] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  // const [personName, setPersonName] = useState(''); // @type string

  const [items, setItems] = useState([]);


  const USER_DET = firebase.auth().currentUser;
  console.log(USER_DET);


  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("USER EXIST")
        console.log(user.displayName, " , ", user.uid);
        const User_Obj = {
          Name: user.displayName,
          Email: user.email,
          UID: user.uid
        };
        console.log(User_Obj);
        // console.log(Object.keys(User_Obj).length)    // 3
        set_USER(User_Obj);

      } else {
        console.log('No User');
        set_USER({});
      }
    });
  }, [set_USER]);






  const fetched_Data = () => {

    if (Object.keys(USER).length !== 0) {
      console.log("Logged In. ")
      console.log(USER_DET.uid);
      db.collection('USER_INFO').doc(USER_DET.uid).collection('POSTS').onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        console.log(listItems);
        setItems(listItems)
      })

    }
    else {
      console.log("Currently No User Logged In. ")
    }
  };





  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#edf2f4" }} >
        <NAVIGATION_BAR
          signUp={signUp}
          setSignUp={setSignUp}
          login={login}
          setLogin={setLogin}
          USER={USER}
          set_USER={set_USER}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmpass={confirmpass}
          setConfirmpass={setConfirmpass}
        />

        <main >
          <Route path='/'
            render={(props) => (
              <HOMESCREEN {...props}
                USER={USER}
                set_USER={set_USER}
                items={items}
                setItems={setItems}
                fetched_Data={fetched_Data}
              />
            )}
            exact
          />

          <Route path='/profile' component={PROFILESCREEN} exacr />

          <Route path='/uploadpost'
            render={(props) => (
              <UPLOADSHOTSCREEN {...props}
                USER={USER}
                set_USER={set_USER}
                loading={loading}
                setLoading={setLoading}
              />
            )}
            exact
          />


          <Route path='/post/:id'
            render={(props) => (
              <POSTSCREEN {...props}
                USER={USER}
                set_USER={set_USER}
                items={items}
                setItems={setItems}
                fetched_Data={fetched_Data}
              />
            )}
            exact
          />



        </main>


        <FOOTER />
      </div>
    </Router>

  )
}

export default App;

