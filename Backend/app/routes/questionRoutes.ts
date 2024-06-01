import express from 'express'
import {questionCreate} from '../controller/questionController'
import userAuth from '../middlewear/auth'
import userRole from '../middlewear/userRole'

const routes = express.Router()
routes.route('/newQuestion').post(userAuth,userRole,questionCreate)

export default routes