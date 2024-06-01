import { createSubject , updateSubject ,deleteSubject,getSubject} from "../controller/subjectController";
import express from 'express'
import userAuth from "../middlewear/auth";
import userRole from "../middlewear/userRole";

const routes = express.Router()

routes.route('/newSubject').post(userAuth,userRole,createSubject)
routes.route('/updateSubject/:id').put(userAuth,userRole,updateSubject)
routes.route('/deleteSubject/:id').delete(userAuth,userRole,deleteSubject)
routes.route('/getSubject').get(userAuth,getSubject)
export default routes