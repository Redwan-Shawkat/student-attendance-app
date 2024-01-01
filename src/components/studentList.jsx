import React from 'react'

export const StudentList = (props) => {

  const 
  { studentName, 
    setStudentName, 
    students, 
    setStudents, 
    editableMode, 
    setEditableMode, 
    editableStudent, 
    setEditableStudent
  } = props;

    //editHandler
    //To change it in update mode
    const editHandler = (student) => {
        setEditableMode(true);
        setEditableStudent(student)
        //null got replaced with student whom we wanna 
        setStudentName(student.name);
        //student name will be shown at input field
      }

      //removeHandler
    const removeHandler = (studentId) => {
        const existingStudents = students.filter((student) => student.id !== studentId)
   
   
      setStudents(existingStudents)
    }
  
  return (
    

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
  )
}
