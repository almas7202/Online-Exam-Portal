import React, { useState } from 'react'

export const MultipeQuestion = () => {
    interface QuestionType {
        question: string;
        options: string[];
        answer: string;
    }

    const initialQuestionState: QuestionType = {
        question: "",
        options: [],
        answer: ""
    };
   
    const [questionForm, setQuestionForm] = useState<QuestionType[]>([initialQuestionState]);
    const handletxtFilds = (e:any) =>{
        const {name,value} = e.target
        setQuestionForm({...questionForm,[name]:value})
    }
    console.log(questionForm)
    return (
        <div>
            <div className="container">
                <label htmlFor="Enter Question">Question</label>
                <input type="text" className="form-control" name='question' placeholder="Enter Question" onChange={(e)=>handletxtFilds(e)} />
                <div className="row g-3 mt-1">
                    <div className="col-sm mb-2">
                        <input type="text" name='options' className="form-control" placeholder="Enter Option-1" onChange={(e)=>handletxtFilds(e)}  />
                    </div>
                    <div className="col-sm">
                        <input type="text" name='options' className="form-control" placeholder="Enter Option-2" onChange={(e)=>handletxtFilds(e)}/>
                    </div>
                    <div className="col-sm">
                        <input type="text" name='options' className="form-control" placeholder="Enter Option-3" onChange={(e)=>handletxtFilds(e)} />
                    </div>
                    <div className="col-sm">
                        <input type="text" name='options' className="form-control" placeholder="Enter Option-4" onChange={(e)=>handletxtFilds(e)}/>
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
                <div>
                    <button className="btn btn-primary mt-2 px mb-2">Save Question</button>
                </div>
            </div>
        </div>
    )
}

export default MultipeQuestion
