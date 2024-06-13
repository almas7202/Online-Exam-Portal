import axios from "axios";
import React, { useEffect, useState } from "react";
import MultipeQuestion from "./MultipeQuestion";


const AddQuestion = () => {
  const [setSubject, setShowSubject] = useState(null)
  const [quesiton,setquesiton]= useState(false)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('http://localhost:3000/subject/getSubject', {
          headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          }
        });
        setShowSubject(response.data);

      } catch (err) {
        console.log("Err while Fetching Data", err)
      }
    }
    fetchdata()
  }, [])
  console.log(setSubject)

  type no_of_question = {
    subjectName: string,
    totalQuestion: number
  }

  const [questionForm, setquestionForm] = useState<no_of_question>({
    subjectName: "",
    totalQuestion: 0
  })

  const handleSubject = (e: any) => {
    const { name, value } = e.target
    setquestionForm({ ...questionForm, [name]: value })
  }

  const setquestion = (e: any) => {
    const { name, value } = e.target
      setquestionForm({ ...questionForm, [name]: parseInt(value) });
      setquesiton(false)
  }
  const validation = () =>{
    let flag = 0
    if(questionForm.subjectName.length == 0){
      document.getElementById('subjectNameErr').innerHTML = 'please Select Subject Name'
    }else{
      document.getElementById('subjectNameErr').innerHTML = ''
      flag = flag + 1
    }
    if(questionForm.totalQuestion <= 0 || questionForm.totalQuestion > 10){
      document.getElementById('subjectQuestionErr').innerHTML = 'please Enter Valid Value Between 1 to 10'
    }else{
      document.getElementById('subjectQuestionErr').innerHTML = ''
      flag = flag + 1
    }
    return flag
  }
  const handleSubmit = (e:any) =>{
    e.preventDefault()
    const valid = validation()
    if(valid == 2){
      setquesiton(true)
    } 
  }
  console.log(questionForm)

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <form onSubmit={(e) => handleSubmit(e)} className="mt-2">
              {/* <label htmlFor="question" className="px-1">Enter no of Question</label> */}

              <select className="form-select mt-3 px-2 p-2" id="subjectName" name="subjectName" onChange={(e) => handleSubject(e)}>
                <option value="Select Subject">Select Subject</option>
                {setSubject && (setSubject as any[]).map((subject, index) => (
                  <option key={index} value={subject.subjectName}>{subject.subjectName}</option>
                ))}
              </select>
              <label id="subjectNameErr" className="px-1" style={{ color: "red" }}></label>
                <label htmlFor="question" className="px-1">Enter no of Question</label>
                <input type="number" name="totalQuestion"
                  className="form-control px-2"
                  placeholder="Enter of Question you want to Create"
                  onChange={(e) => setquestion(e)} />
                <label id="subjectQuestionErr" className="px-1" style={{ color: "red" }}></label>
              <button type="submit" className="btn btn-primary mt-2 px-1 mr-1">Add Question Filed</button>
            </form>
          </div>


          <div className="col-9 mt-3">
            {
              quesiton ?
              [...Array(questionForm.totalQuestion)].map((_, index) => (
                <MultipeQuestion key={index} />
              )) : null}
            


          </div>



        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
