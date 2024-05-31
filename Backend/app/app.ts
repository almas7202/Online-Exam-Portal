import express from 'express'
import userRoutes from './routes/userRoutes'
import subjectRoutes from './routes/subjectRoutes'
import questionRoutes from './routes/questionRoutes'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)
app.use('/subject',subjectRoutes)
app.use('/question',questionRoutes)
export default app