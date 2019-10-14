import mongoConnection from './mongo'

const setupDatabase = async () => {
  try {
    await mongoConnection()
  } catch (err) {
    throw err
  }
}

export default setupDatabase
