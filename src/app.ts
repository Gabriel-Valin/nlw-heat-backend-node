import express from 'express'
import 'dotenv/config'
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(routes)

app.get('/github', (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_KEY}`)
})

app.get('/signin/callback', (request, response) => {
    const { code } = request.query
    return response.json(code)
})

app.listen(4000, () => console.log('Server running at port 4000'))