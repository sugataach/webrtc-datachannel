import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = process.env.PORT || 8080

app.get('/', (req: Request, resp: Response) => {
    resp.send('Express + Typescript Server')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})

