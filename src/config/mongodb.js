


import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment.js'
//Khởi tạo 1 đối tượng trelloDatabaseInstace ban đầu là null (vì chưa connect)
let trelloDatabaseInstance = null

//Khởi tạo 1 đối tượng mongoClientInstance để connect tới mongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//Kết nối tới database
export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}
//Function GET_DB  này có nhiệm vụ export ra cái Trello Database Instance
//sau khi đã connect thành công tới MongoDB để chúng ta có thể sử dụng ở  nhiều nơi khác nhau trong code

//chỉ  luôn gọi getDB khi đã connect DB thành công
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first')
  return trelloDatabaseInstance
}

//Đóng kết nối tới database khi cần
export const CLOSE_DB = async () => {
  console.log('code chạy vào close')
  await mongoClientInstance.close()
}