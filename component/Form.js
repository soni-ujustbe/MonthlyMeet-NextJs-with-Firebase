// import React, { useEffect, useState } from 'react'
// import style from '../styles/Home.module.css'

// import { collection, addDoc, setDoc, doc, docs, getDocs, getDoc, updateDoc, deleteDoc, query} from "firebase/firestore";
// import firebaseApp from '../firebaseConfig' ;
// import { getFirestore, onSnapshot } from "firebase/firestore";


// const db = getFirestore();

// function Form() {
  
//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     // }
    

//     // const [checkedFour ,setCheckedFour] =useState([]),
//     // const [checkedSix ,setCheckedSix] =useState([]),

//     const [onecheck, setOneCheck] = useState('');
//     const [twocheck, setTwoCheck] = useState('');
    
//     const usersCollectionRef = collection(db, "MonthlyMeetData");

//     const [threecheck, setThreeCheck] = useState('');

//     const [fourcheck, setFourCheck] = useState('');

//     const [fivecheck, setFiveCheck] = useState('');

//     const [sixcheck, setSixCheck] = useState('');




//     const CreatForm = async(event) => {
//         event.preventDefault();
    
//         const data={
//             oneAns:onecheck,
//             twoAns:twocheck,
//             threeAns:threecheck,
//             fourAns:fourcheck,
//             fiveAns:fivecheck,
//             sixAns:sixcheck,
    
//         };
//         console.log("Form data",data);
//         await addDoc(usersCollectionRef,data);
//         setOneCheck("");
//         setTwoCheck("");
//         setThreeCheck("");
//         setFourCheck("");
//         setFiveCheck("");
//         setSixCheck("");
            
//       }

//     const questionOne = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setOneCheck(target.value);
//         }
//       };

//       const questionTwo = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setTwoCheck(target.value);
//         }
//       };

//       const questionThree = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setThreeCheck(target.value);
//         }
//       };

//       const questionFour = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setFourCheck(target.value);
//         }
//       };

//       const questionFive = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setFiveCheck(target.value);
//         }
//       };

//       const questionSix = (event) => {
//         const target = event.target;
//         if (target.checked) {
//           setSixCheck(target.value);
//         }
//       };
 
//     //   useEffect(() => {
//     //      cosnt  getFormData =async()={
//     //         const data = await getDocs(collection(db, "MonthlyMeetData"));
         
//     //      setUsers(data.docs.map((doc) => ({ ...doc.data(), id:doc.id  })));
//     //      console.log(data);
//     //     };
//     //      getFormData();
//     //   }, [])

//     return (
//       <div>

//       <div>
//           <form>

//           <div>
//               <label>Select Your Name ?</label>
//               <br/>
//                 <select>
//                     <option>priority</option>
//                     <option>howSubmitted</option>
//                     <option>priority</option>
//                     <option>priority</option>
//                 </select>
//               </div>

//               <br/><br/>

//               <div className="radio-buttons">

//               <label>1. What is the top most priority in your life?</label>
//                <br />
              
//                   <input
//                    id="1A"
//                   value="answerOne"
//                   name="questionOne"
//                   type="radio"
//                   checked={onecheck == 'answerOne'}
//                   onChange={questionOne}
//                   />Relationship
                  
//                   <br />

//                   <input
//                    id="1B"
//                   value="answerTwo"
//                   name="questionOne"
//                   type="radio"
//                   checked={onecheck == 'answerTwo'}
//                   onChange={questionOne}
//                   />
//                   Health

//                   <br />
           
//                   <input
//                   id="1C"
//                   value="answerThree"
//                   name="questionOne"
//                   type="radio"                      
//                   checked={onecheck == 'answerThree'}
//                   onChange={questionOne}
//                   />
//                      Wealth
//               </div>

//   <br /><br/>
//               <div className="radio-buttons">
//               <label>2. Do you believe that you can help others?</label>
//                <br />
              
//                   <input
//                   id="2A"
//                   value="answerOne"
//                   name="questionTwo"
//                   type="radio"
//                   onChange={questionTwo}
//                   checked={twocheck == 'answerOne'}
//                   />Recognition
                  
//                   <br />

//                   <input
//                    id="2B"
//                   value="answerTwo"
//                   name="questionTwo"
//                   type="radio"
//                    onChange={questionTwo}
//                    checked={twocheck == 'answerTwo'}

//                   />
//                   Money

//                   <br />
           
//                   <input
//                    id="2C"
//                   value="answerThree"
//                   name="questionTwo"
//                   type="radio"
//                   onChange={questionTwo}
//                   checked={twocheck == 'answerThree'}
//                   />
//                      Self-Satisfaction

//               </div>

//           <br/><br/>
//               <div className="radio-buttons">
//               <label>3. Do you believe that you can help others?</label>
//                <br />
              
//                   <input
//                   id="3A"
//                   value="answerOne"
//                   name="questionThree"
//                   type="radio"
//                   onChange={questionThree}
//                   checked={threecheck == 'answerOne'}

//                   />
//                   Yes
                  
//                   <br />

//                   <input
//                   id="3B"
//                   value="answerTwo"
//                   name="questionThree"
//                   type="radio"
//                   onChange={questionThree}
//                   checked={threecheck == 'answerTwo'}
//                   />
//                   No

//                   <br />
          
//               </div>

//               <br/><br/>

//               <div className="checkbox-buttons">
//               <label>4. What do you prefer when it comes to helping others? <span>*</span></label>
//                <br />
              
//                   <input
//                   id="4A"
//                   value="answerOne"
//                   name="questionFour"
//                   type="checkbox"
//                   onChange={questionFour}
//                   checked={fourcheck == 'answerOne'}

//                   />
//                   Give Mental Support through personal availability

                  
//                   <br />

//                   <input
//                   id="4B"
//                   value="answerTwo"
//                   name="questionFour"
//                   type="checkbox"
//                   onChange={questionFour}
//                   checked={fourcheck == 'answerTwo'}

//                   />
//                   Give Financial Support

//                   <br />

//                   <input
//                   id="4C"
//                   value="answerThree"
//                   name="questionFour"
//                   type="checkbox"
//                   onChange={questionFour}
//                   checked={fourcheck == 'answerThree'}

//                   />
                  
//                   Share contacts to get their work done

//                   <br />
          

//                   <input
//                   id="4D"
//                   value="answerFour"
//                   name="questionFour"
//                   type="checkbox"
//                   checked={fourcheck == 'answerFour'}
//                   onChange={questionFour}
//                   />          
//                   Receive Money for the help provided

//                   <br />
//               </div>

//               <br/><br/>
              
//               <div className="radio-buttons">
//               <label>5. What kind of people you prefer to be with?<span>*</span></label>
//                <br />
              
//                   <input
//                   id="5A"
//                   value="answerOne"
//                   name="questionFive"
//                   type="radio"
//                   onChange={questionFive}
//                   checked={fivecheck == 'answerOne'}

//                   />
//                   Entreprenuers/Businessmen
                  
//                   <br />

//                   <input
//                   id="5B"
//                   value="answerTwo"
//                   name="questionFive"
//                   type="radio"
//                    onChange={questionFive}
//                    checked={fivecheck == 'answerTwo'}

//                   />
//                  Homemakers

//                   <br />

//                   <input
//                   id="5C"
//                   value="answerThree"
//                   name="questionFive"
//                   type="radio"
//                    onChange={questionFive}
//                    checked={fivecheck == 'answerThree'}

//                   />
//                  Retired


//                   <br />

//                   <input
//                   id="5D"
//                   value="answerFour"
//                   name="questionFive"
//                   type="radio"
//                   onChange={questionFive}
//                   checked={fivecheck == 'answerFour'}

//                   />
//                  Students

//                   <br />

//                   <input
//                   id="5E"
//                   value="answerFive"
//                   name="questionFive"
//                   type="radio"
//                    onChange={questionFive}
//                    checked={fivecheck == 'answerFive'}

//                   />
//                  Employed

//                   <br />
      
//               </div>

//               <br/><br/>

//               <div className="checkbox-buttons">
//               <label>6. What do you prefer when it comes to helping others? <span>*</span></label>
//                <br />
              
//                   <input
//                   id="6A"
//                   value="answerOne"
//                   name="questionSix"
//                   type="checkbox"
//                    onChange={questionSix}
//                    checked={sixcheck == 'answerOne'}

//                   />
                  
//                   Personal Development

                  
//                   <br />

//                   <input
//                   id="6B"
//                   value="answerTwo"
//                   name="questionSix"
//                   type="checkbox"
//                   checked={sixcheck == 'answerTwo'}
//                   onChange={questionSix}
//                   />
//                   People Development


//                   <br />

//                   <input
//                   id="6C"
//                   value="answerThree"
//                   name="questionSix"
//                   type="checkbox"
//                   onChange={questionSix}
//                   checked={sixcheck == 'answerThree'}

//                   />
                  
                  
//                   Earning Money with minimum efforts  

//                   <br />
          

//                   <input
//                   id="6D"
//                   value="answerFour"
//                   name="questionSix"
//                   type="checkbox"
//                   checked={sixcheck == 'answerFour'}
//                   onChange={questionSix}
//                   />          
                  
//                   Peace of mind
//                   <br />
//               </div>
              
//               <br/><br/>

//               <div>
//                       <button 
//                       type="submit"
//                       onClick={CreatForm}
//                       >Submit
//                       </button>
//                   </div>
            
//           </form>
//       </div>
      
//   </div>
//     );
// }

// export default Form
