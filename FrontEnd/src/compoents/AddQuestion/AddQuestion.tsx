import axios from "axios";
import React, { useEffect, useState } from "react";

const AddQuestion = () => {
  const [setSubject, setShowSubject] = useState(null)
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
  type no_of_question = {
    subjectName: String,
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
    setquestionForm({ ...questionForm, [name]: value })
  }
  console.log(questionForm)
  const validation = () => {
    let flag = 0
    if (questionForm.subjectName.length == 0 && questionForm.subjectName === "Select Subject") {
      document.getElementById('subjectNameErr').innerHTML = 'please select subject'
    } else {
      flag = flag + 1
      document.getElementById('subjectNameErr').innerHTML = ''
    }
    if (questionForm.totalQuestion == 0) {
      document.getElementById('subjectQuestionErr').innerHTML = 'please Enter No of Question'
    } else {
      flag = flag + 1
      document.getElementById('subjectQuestionErr').innerHTML = ''
    }
    return flag
  }
  const data = JSON.stringify(questionForm)
  console.log(typeof(data))
  const handlesubmit = (e: any) => {
    e.preventDefault()
    let valid = validation()
    if (valid == 2) {
      console.log(questionForm)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <form onSubmit={(e) => handlesubmit(e)} className="mt-2">
              <select className="form-select mt-3 px-2 p-2" id="subjectName" name="subjectName" onChange={(e) => handleSubject(e)}>
                <option value="Select Subject">Select Subject</option>
                {setSubject && setSubject.map((value, idx) => (
                  <option key={idx} value={value.subjectName}>{value.subjectName}</option>
                ))}
              </select>
              <label id="subjectNameErr" className="px-1" style={{ color: "red" }}></label>
              <label htmlFor="question" className="px-1">Enter no of Question</label>
              <input type="text" name="totalQuestion"
                className="form-control px-2"
                placeholder="Enter of Question you want to Create"
                onChange={(e) => setquestion(e)} />
              <label id="subjectQuestionErr" className="px-1" style={{ color: "red" }}></label>

              <button type="submit" className="btn btn-primary mt-2">Add Question Fileds</button>
            </form>
          </div>
        

          <div className="col-9 mt-2">
            {
              JSON.parse(questionForm).map((value,index)=>{
                <>
               
                <label>Question-{index + 1}</label>
                <input type="text" className="form-control" placeholder="Enter Question" />
                <div className="row g-3 mt-1">
                  <div className="col-sm mb-2">
                    <input type="text" className="form-control" placeholder="Enter Option-1" aria-label="City" />
                  </div>
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Enter Option-2" aria-label="State" />
                  </div>
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Enter Option-3" aria-label="Zip" />
                  </div>
                  <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Enter Option-4" aria-label="Zip" />
                  </div>
                </div>
                <div>
                  <label htmlFor="Answer" className="ml-1">SelectAnswer</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="selectanswer" id="flexRadioDefault2" />
                    <label className="form-check-label">
                      Option-1
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="selectanswer" id="flexRadioDefault2" />
                    <label className="form-check-label">
                      Option-2
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="selectanswer" id="flexRadioDefault2" />
                    <label className="form-check-label">
                      Option-3
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="selectanswer" id="flexRadioDefault2" />
                    <label className="form-check-label">
                      Option-4
                    </label>
                  </div>
                </div>
                </>
              })
            }
            
        


          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
