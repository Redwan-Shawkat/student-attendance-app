import React from 'react'

export const InsertingStudentList = (props) => {
    const { 
      studentName, 
      setStudentName, 
      students, 
      setStudents, 
      editableMode, 
      setEditableMode, 
      editableStudent, 
      setEditableStudent
    } = props;
  
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
 
      <div>    <form onSubmit={submitHandler} id='form'>  
    <label for="name"> Enter Name:  </label>
    <br/>
    <input type="text" placeholder="Enter the Name" id="name" value={studentName} onChange={event => setStudentName(event.target.value)} required/>
     <br/>
     <button type="submit" class="submitbtn"> { editableMode ? "Update Name" : "Submit Name" }</button>
     </form>
    </div>

  )
}
