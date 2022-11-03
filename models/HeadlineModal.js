import mongoose from 'mongoose'

const HeadlineModalSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
})

module.exports =
  mongoose.models.HeadlineModal ||
  mongoose.model('HeadlineModal', HeadlineModalSchema)
