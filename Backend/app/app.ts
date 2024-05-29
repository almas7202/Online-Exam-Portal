import express from 'express'
import userRoutes from './routes/userRoutes'
import subjectRoutes from './routes/subjectRoutes'
import questionRoutes from './routes/questionRoutes'

const app = express()
app.use(express.json())

app.use('/user',userRoutes)
app.use('/subject',subjectRoutes)
app.use('/question',questionRoutes)
export default app