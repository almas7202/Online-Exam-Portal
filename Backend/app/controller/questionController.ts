import questionModel,{questionValidation} from "../models/questionSchema";
import { Request,Response } from "express";

export const questionCreate = async(req:Request,res:Response) =>{
    const {error} = questionValidation.validate(req.body)
    console.log(error)
    if(error) return res.status(403).send(error.details[0].message)

    const {subject_id,question,options,answer} = req.body
    console.log(subject_id,question,options,answer)

    let questions = await questionModel.findOne({question : question})
    if(questions){
        return res.status(403).send('Question already there')
    }else{
        questionModel.create({
            subject_id,
            question,
            options,
            answer
        })
        res.status(200).send('Question Added Succesfully')
    }
}
// export const questionCreate = async (req: Request, res: Response) => {
//     const questionsData = req.body.questions; // Assuming 'questions' is the key containing the array of questions in the request body

//     // Iterate over each question in the array
//     for (const questionData of questionsData) {
//         const { error } = questionValidation.validate(questionData);
//         if (error) {
//             return res.status(400).send(error.details[0].message);
//         }

//         const { subject_id, question, options, answer } = questionData;

//         try {
//             // Check if the question already exists
//             const existingQuestion = await questionModel.findOne({ question });
//             if (existingQuestion) {
//                 return res.status(403).send('Question already exists: ' + question);
//             }

//             // Create the new question
//             await questionModel.create({
//                 subject_id,
//                 question,
//                 options,
//                 answer
//             });
//         } catch (err) {
//             console.error("Error creating question:", err);
//             return res.status(500).send("Internal Server Error");
//         }
//     }

//     res.status(200).send('Questions Added Successfully');
// };  