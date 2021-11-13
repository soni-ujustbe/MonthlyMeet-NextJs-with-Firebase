import React, { useEffect, useState } from 'react'

import { collection, addDoc, setDoc, doc, docs, getDocs, getDoc, updateDoc, deleteDoc, query } from "firebase/firestore";
import firebaseApp from '../firebaseConfig';
import { getFirestore, onSnapshot } from "firebase/firestore";


const db = getFirestore();

function Form() {

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  // }


  // const [checkedFour ,setCheckedFour] =useState([]),
  // const [checkedSix ,setCheckedSix] =useState([]),
  const [users, setUsers] = useState([]);
  const [onecheck, setOneCheck] = useState('');
  const [twocheck, setTwoCheck] = useState('');

  const usersCollectionRef = collection(db, "MonthlyMeetData");

  const [threecheck, setThreeCheck] = useState('');

  const [fourcheck, setFourCheck] = useState([]);

  const [fivecheck, setFiveCheck] = useState('');

  const [sixcheck, setSixCheck] = useState('');

  const [UserData, setUserData] = useState([]);

  const [userId, setuserId] = useState('');
  const [error, seterror] = useState(false);
  const [formsubmit, setformsubmit] = useState(false)



  const CreatForm = async (event) => {
    event.preventDefault();

    const data = {
      oneAns: onecheck,
      twoAns: twocheck,
      threeAns: threecheck,
      fourAns: fourcheck,
      fiveAns: fivecheck,
      sixAns: sixcheck,

    };
    if (userId === "") {
      seterror(true)
    }
    else {
      const cityRef = doc(db, 'MonthlyMeetData', userId);
      await setDoc(cityRef, data, { merge: true });
      console.log("Form data", data);
      setformsubmit(true);
    }

    // 

    // await addDoc(usersCollectionRef, data);


    setOneCheck("");
    setTwoCheck("");
    setThreeCheck("");
    setFourCheck("");
    setFiveCheck("");
    setSixCheck("");

  }

  const onChangeCheckboxFour = (event) => {
    console.log(fourcheck);
    console.log(event.target.checked);
    const isChecked = event.target.checked;
    if (isChecked) {
      setFourCheck([...fourcheck, event.target.value]);
    } else {
      let index = fourcheck.indexOf(event.target.value);
      fourcheck.splice(index, 1);
      setFourCheck(fourcheck);
    }
  }

  const onChangeCheckboxSix = (event) => {
    console.log(sixcheck);
    console.log(event.target.checked);
    const isChecked = event.target.checked;
    if (isChecked) {
      setSixCheck([...sixcheck, event.target.value]);
    } else {
      let index = sixcheck.indexOf(event.target.value);
      sixcheck.splice(index, 1);
      setSixCheck(sixcheck);
    }
  }

  const questionOne = (event) => {
    const target = event.target;
    if (target.checked) {
      setOneCheck(target.value);
    }
  };

  const questionTwo = (event) => {
    const target = event.target;
    if (target.checked) {
      setTwoCheck(target.value);
    }
  };

  const questionThree = (event) => {
    const target = event.target;
    if (target.checked) {
      setThreeCheck(target.value);
    }
  };

  const questionFour = (event) => {
    const target = event.target;
    if (target.checked) {
      setFourCheck(target.value);
    }
  };

  const questionFive = (event) => {
    const target = event.target;
    if (target.checked) {
      setFiveCheck(target.value);
    }
  };

  const questionSix = (event) => {
    const target = event.target;
    if (target.checked) {
      setSixCheck(target.value);
    }
  };

  const getUserId = (event) => {
    const target = event.target.value;

    setuserId(target);
    seterror(false);
    console.log(userId);
  };

  useEffect(() => {
    const getContent = async () => {
      const data = await getDocs(usersCollectionRef);
      // onSnapshot(collection(db, "dewdropusers3"), (snapshot) => {
      //   console.log("Suraj", snapshot);
      //   setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // })
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getContent();
  }, []);

  return (
    <div>
      <div className="logo">
        <a
          href="https://www.ujustbe.com/"
          target="_blank"
          rel="noopener noreferrer">

          <img src="/logo.png" alt="ujustbe Logo" />
        </a>
      </div>
      
      {
        formsubmit?<div className="sucess">
          <h2>
          Thanks you for submitting your form.
          </h2>
        </div>:<div>
        <form>
        {
        error?<div className="error"><p>Please Select your name</p></div>:null
      }
          <div className="form-row">
            <h2>Select Your Name ?</h2>
            <br />
            <select onChange={getUserId} >
            <option selected >Select Name</option>
              {
                users && users.map(formUser => {
                  //console.log(formUser);
                  return (

                    <option value={formUser.id}>{formUser.username}</option>

                  )
                })
              }
            </select>
          </div>
          <div className=" form-row radio-buttons">

            <h2>1. What is the top most priority in your life?</h2>
            <ul>
              <li><input
                id="1A"
                value="answerOne"
                name="questionOne"
                type="radio"
                checked={onecheck == 'answerOne'}
                onChange={questionOne}
              /><label htmlFor="1A">Relationship</label></li>
              <li><input
                id="1B"
                value="answerTwo"
                name="questionOne"
                type="radio"
                checked={onecheck == 'answerTwo'}
                onChange={questionOne}
              />
                <label htmlFor="1B">Health</label></li>
              <li><input
                id="1C"
                value="answerThree"
                name="questionOne"
                type="radio"
                checked={onecheck == 'answerThree'}
                onChange={questionOne}
              />
                <label htmlFor="1C"> Wealth</label></li>
            </ul>



          </div>

          <div className="form-row radio-buttons">
            <h2>2. Do you believe that you can help others?</h2>

            <ul>
              <li>
                <input
                  id="2A"
                  value="answerOne"
                  name="questionTwo"
                  type="radio"
                  onChange={questionTwo}
                  checked={twocheck == 'answerOne'}
                /><label htmlFor="2A">Recognition</label>
              </li>
              <li>
                <input
                  id="2B"
                  value="answerTwo"
                  name="questionTwo"
                  type="radio"
                  onChange={questionTwo}
                  checked={twocheck == 'answerTwo'}

                />
                <label htmlFor="2B">Money</label>
              </li>
              <li>
                <input
                  id="2C"
                  value="answerThree"
                  name="questionTwo"
                  type="radio"
                  onChange={questionTwo}
                  checked={twocheck == 'answerThree'}
                />
                <label htmlFor="2C">Self-Satisfaction</label>
              </li>
            </ul>






          </div>
          <div className="form-row radio-buttons">
            <h2>3. Do you believe that you can help others?</h2>
            <ul>
              
              <li>
                <input
                  id="3A"
                  value="answerOne"
                  name="questionThree"
                  type="radio"
                  onChange={questionThree}
                  checked={threecheck == 'answerOne'}

                />
                <label htmlFor="3A">Yes</label>
              </li>
              <li>
                <input
                  id="3B"
                  value="answerTwo"
                  name="questionThree"
                  type="radio"
                  onChange={questionThree}
                  checked={threecheck == 'answerTwo'}
                />


                <label htmlFor="3B">No</label>
              </li>
            </ul>





          </div>


          <div className="checkbox-buttons">
            <h2>4. What do you prefer when it comes to helping others? <span>*</span></h2>
            <ul>
              <li>
                <input
                  id="4A"
                  value="answerOne"
                  name="questionFour"
                  type="checkbox"
                  onChange={onChangeCheckboxFour}
                //checked={fourcheck == 'answerOne'}

                />
                <label htmlFor="4A">Give Mental Support through personal availability</label>
              </li>
              <li>
                <input
                  id="4B"
                  value="answerTwo"
                  name="questionFour"
                  type="checkbox"
                  onChange={onChangeCheckboxFour}
                //checked={fourcheck == 'answerTwo'}

                />
                <label htmlFor="4B">Give Financial Support</label>
              </li>
              <li>
                <input
                  id="4C"
                  value="answerThree"
                  name="questionFour"
                  type="checkbox"
                  onChange={onChangeCheckboxFour}
                //checked={fourcheck == 'answerThree'}

                />

                <label htmlFor="4C">Share contacts to get their work done</label>
              </li>
              <li><input
                id="4D"
                value="answerFour"
                name="questionFour"
                type="checkbox"
                //checked={fourcheck == 'answerFour'}
                onChange={onChangeCheckboxFour}
              />
                <label htmlFor="4D">Receive Money for the help provided</label></li>
            </ul>
          </div>

          <div className="radio-buttons">
            <h2>5. What kind of people you prefer to be with?<span>*</span></h2>
            <ul>
              <li>
                <input
                  id="5A"
                  value="answerOne"
                  name="questionFive"
                  type="radio"
                  onChange={questionFive}
                  checked={fivecheck == 'answerOne'}

                />
                <label htmlFor="5A">Entreprenuers/Businessmen</label>
              </li>




              <li>
                <input
                  id="5B"
                  value="answerTwo"
                  name="questionFive"
                  type="radio"
                  onChange={questionFive}
                  checked={fivecheck == 'answerTwo'}

                />
                <label htmlFor="5B">Homemakers</label>
              </li>


              <li>
                <input
                  id="5C"
                  value="answerThree"
                  name="questionFive"
                  type="radio"
                  onChange={questionFive}
                  checked={fivecheck == 'answerThree'}

                />
                <label htmlFor="5C">Retired</label>
              </li>

              <li><input
                id="5D"
                value="answerFour"
                name="questionFive"
                type="radio"
                onChange={questionFive}
                checked={fivecheck == 'answerFour'}

              />
                <label htmlFor="5D">Students</label></li>

              <li>
                <input
                  id="5E"
                  value="answerFive"
                  name="questionFive"
                  type="radio"
                  onChange={questionFive}
                  checked={fivecheck == 'answerFive'}

                />
                <label htmlFor="5E">Employed</label>

              </li>
            </ul>
          </div>

          <div className="checkbox-buttons">
            <h2>6. What do you prefer when it comes to helping others? <span>*</span></h2>

            <ul>
              <li>
                <input
                  id="6A"
                  value="answerOne"
                  name="questionSix"
                  type="checkbox"
                  onChange={onChangeCheckboxSix}
                // checked={sixcheck == 'answerOne'}

                />
                <label htmlFor="6A">Personal Development</label>
              </li>
              <li>
                <input
                  id="6B"
                  value="answerTwo"
                  name="questionSix"
                  type="checkbox"
                  // checked={sixcheck == 'answerTwo'}
                  onChange={onChangeCheckboxSix}
                />
                <label htmlFor="6B">People Development</label>
              </li>
              <li>
                <input
                  id="6C"
                  value="answerThree"
                  name="questionSix"
                  type="checkbox"
                  onChange={onChangeCheckboxSix}
                // checked={sixcheck == 'answerThree'}

                />


                <label htmlFor="6C">Earning Money with minimum efforts</label>
              </li>
              <li>
                <input
                  id="6D"
                  value="answerFour"
                  name="questionSix"
                  type="checkbox"
                  // checked={sixcheck == 'answerFour'}
                  onChange={onChangeCheckboxSix}
                />
                <label htmlFor="6D">Peace of mind</label>
              </li>
            </ul>






          </div>

          <div>
            <button
              type="submit"
              onClick={CreatForm}
            >Submit
            </button>
          </div>

        </form>
      </div>
      }

    </div>
  );
}

export default Form
