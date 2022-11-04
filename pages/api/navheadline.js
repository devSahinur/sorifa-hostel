import dbConnect from './../../lib/dbConnect'
import HeadlineModal from './../../models/HeadlineModal'
dbConnect()

export default async (req, res) => {

  const {
    query: { id },
    method,
  } = req


  switch (method) {
    case 'GET':
      try {
        const data = await HeadlineModal.find()
        res.status(200).json({ data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const data = await HeadlineModal.create(req.body)
        res.status(201).json({ success: true, data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const Headline = await HeadlineModal.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })

        if (!Headline) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: Headline })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const  postId =req.query.postId;
        const deletedPost = await HeadlineModal.deleteOne({ _id: postId })

        if (!deletedPost) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
