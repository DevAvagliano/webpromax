import { connect } from 'mongoose'

export const connectToDB = async () => {
  // await connect('mongodb://localhost:27017/WebProMax')
  await connect(
    'mongodb+srv://avagliano:rD0jlqbviu6fW9Sy@cluster0.3rfgou3.mongodb.net/webpromaxdb'
  )
}
