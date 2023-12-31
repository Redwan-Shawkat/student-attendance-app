import "./App.css"
import React, { useState } from 'react';

function App() {
  
    // Creating the States

    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const [editableMode, setEditableMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
    //will add the id of whom I wanna edit

    // submitHandler
    const submitHandler= (e) => {
        e.preventDefault();
        editableMode? updateHandler() : createHandler(); 
    }

    //createHandler
    const createHandler = () => {

      const student = {
        id: Date.now() + ``,
        name: studentName
      }

      setStudents([...students, student])
      setStudentName("")
    }

    //removeHandler
    const removeHandler = (studentId) => {
        const existingStudents = students.filter((student) => student.id !== studentId)
   
   
      setStudents(existingStudents)
    }


    //editHandler
    //To change it in update mode
    const editHandler = (student) => {
      setEditableMode(true);
      setEditableStudent(student)
      //null got replaced with student whom we wanna 
      setStudentName(student.name);
      //student name will be shown at input field
    }

    //updateHandler
    const updateHandler = () => {
       const updatedStudents = students.map((student) => {
        if(student.id === editableStudent.id){
          return {...student, name: studentName};
          //returned in {} because it was an object
        }

        //if "if" doesn't match
        return student;
       })

       setStudents(updatedStudents)

      // Remake "Submit Name" from "Update Name"
      setEditableMode(false)
      setEditableStudent(null)
      setStudentName("")
    }



  return (  
    <div className="App">
        
    <form onSubmit={submitHandler} id='form'>  
    <label for="name"> Enter Name:  </label>
    <br/>
    <input type="text" placeholder="Enter the Name" id="name" value={studentName} onChange={event => setStudentName(event.target.value)} required/>
     <br/>
     <button type="submit" class="submitbtn"> { editableMode ? "Update Name" : "Submit Name" }</button>
     </form>

     <div className="students">
            <h4> <u> All Students: </u> </h4>
            <ul className="student-list">
          {students.map((student) => (
              <li key={student.id}> 
                <span> {student.name} </span>
                  <button onClick={() => editHandler(student)} className="btn"> Edit  </button>
                  <button onClick={() => removeHandler(student.id)} className="btn"> Remove </button>
               </li>
            ))}
        </ul>
      </div>

  </div>
  );
}

export default App;
