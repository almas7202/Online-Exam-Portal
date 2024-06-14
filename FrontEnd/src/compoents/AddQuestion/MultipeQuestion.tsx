import axios from 'axios';
import React, { useState } from 'react'

export const MultipeQuestion = ({questionForm}:any) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleOptionChange = (index) => {
        setSelectedAnswer(index);
    };
    console.log(question)

    const handleOptionTextChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };
    console.log(options)
    console.log(selectedAnswer)
    const handleFormSubmit = (e:any) => {
        e.preventDefault();

        const data = {
            subject:questionForm.subjectName,
            question: question,
            options: options,
            correctAnswer: selectedAnswer
        };
        console.log(data)
        axios.post('http://localhost:3000/question/newquestion', {data}, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        })
        .then((res) => console.log(res.data))
        .then(() => {
            setQuestion('');
            setOptions(['', '', '', '']);
            setSelectedAnswer('');
        })
        .catch((err) => console.log(err));
        console.log(data);
    };
    return (
        <div>
        <div className="container">
            <form onSubmit={(e)=>handleFormSubmit(e)}>
                <label htmlFor="Enter Question">Question</label>
                <input type="text" className="form-control" name='question' placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <div className="row g-3 mt-1">
                    {options.map((option, index) => (
                        <div className="col-sm mb-2" key={index}>
                            <input type="text" className="form-control" placeholder={`Enter Option-${index + 1}`} value={option} onChange={(e) => handleOptionTextChange(index, e.target.value)} />
                        </div>
                    ))}
                </div>
                <div>
                    <label htmlFor="Answer" className="ml-1">Select Answer</label>
                    {options.map((option, index) => (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="radio" name="selectanswer" id={`option-${index + 1}`} checked={selectedAnswer === `Option-${index + 1}`} onChange={() => handleOptionChange(index)} />
                            <label className="form-check-label" htmlFor={`option-${index + 1}`}>
                                {`Option-${index + 1}`}
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mt-2 px mb-2">Save Question</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default MultipeQuestion
