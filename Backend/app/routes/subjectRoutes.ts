import { createSubject , updateSubject ,deleteSubject,getSubject} from "../controller/subjectController";
import express from 'express'

const routes = express.Router()

routes.route('/newSubject').post(createSubject)
routes.route('/updateSubject/:id').put(updateSubject)
routes.route('/deleteSubject/:id').delete(deleteSubject)
routes.route('/getSubject').get(getSubject)
export default routes