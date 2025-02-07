/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb.js'
import { env } from './config/environment.js'
import { APIs_V1 } from './routes/v1/index.js'

const START_SERVER = () => {
  const app = express()

  app.use('/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello Tu Cong Danh, I am running at ${env.APP_HOST}:${env.APP_PORT}/`
    )
  })
  // Thực hiện các tác vụ cleanup trước khi dừng server
  exitHook(() => {
    CLOSE_DB()
  })
}
CONNECT_DB()
  .then(() => console.log('Conected'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
