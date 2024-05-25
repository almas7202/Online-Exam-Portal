import { createUser, userLogin } from "../controller/authController";
import express from 'express'

const routes = express.Router()
routes.route('/newUser').post(createUser)
routes.route('/login').post(userLogin)

export default routes