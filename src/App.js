import "./App.css"
import React, { useState } from 'react';
import { StudentList } from "./components/studentList";
import { InsertingStudentList } from "./components/insertingStudentList";

const App = () => {
  
    // Creating the States

    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const [editableMode, setEditableMode] = useState(false);
    const [editableStudent, setEditableStudent] = useState(null);
    //will add the id of whom I wanna edit

    // const formProps = {
    //   studentName,
    //   setStudentName,
    //   students,
    //   setStudents,
    //   editableMode,
    //   setEditableMode,
    //   editableStudent,
    //   setEditableStudent,
    // }

    const studentList = {
      studentName,
      setStudentName,
      students,
      setStudents,
      editableMode,
      setEditableMode,
      editableStudent,
      setEditableStudent,
    }

  return (  
    <div className="App">

        <InsertingStudentList
                studentName={studentName}
                setStudentName={setStudentName}
                students={students}
                setStudents={setStudents}
                editableMode={editableMode}
                setEditableMode={setEditableMode}
                editableStudent={editableStudent}
                setEditableStudent={setEditableStudent}
        />

        <StudentList {...studentList}/>
      </div>
  );
}

export default App;
