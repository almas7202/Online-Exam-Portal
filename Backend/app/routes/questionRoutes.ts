import express from 'express'
import {questionCreate} from '../controller/questionController'

const routes = express.Router()
routes.route('/newQuestion').post(questionCreate)

export default routes