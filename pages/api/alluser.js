import dbConnect from './../../lib/dbConnect'
import User from './../../models/User'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const data = await User.find()
        res.status(200).json({ data })
      } catch (error) {
        res.status(400).send({ error: 'error, GET method for allUser api' })
      }
      break
    default:
      res.status(400)
      break
  }
}
