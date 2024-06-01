import React from "react";

const AddQuestion = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <form action="" className="mt-2">
            <select className="form-select mt-3 px-2 p-2">
              <option selected>Select Subject</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            
                <label htmlFor="question" className="px-1">Enter no of Question</label>
                <input type="text" className="form-control px-2" name="noOfQuestion" placeholder="Enter of Question you want to Create" />
                <button type="submit" className="btn btn-primary mt-2">Add Question Fileds</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
