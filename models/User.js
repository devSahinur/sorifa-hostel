import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'https://i.ibb.co/MRX27MK/images.png',
  },
  verified: {
    type: Boolean,
    default: false
  },
  customName: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  phoneNumber: {
    type: String,
    default: '',
  },
  guardianName: {
    type: String,
    default: '',
  },
  guardianNumber: {
    type: String,
    default: '',
  },
  semester: {
    type: String,
    default: '',
  },
  collageName: {
    type: String,
    default: '',
  },
  shift: {
    type: String,
    default: '',
  },
  department: {
    type: String,
    default: '',
  },
  birthday: {
    type: String,
    default: '',
  },
  room: {
    type: String,
    default: '',
  },
  payData: {
    type: [{}],
    default: [
      {
        id: 1,
        month: 'January',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 2,
        month: 'February ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 3,
        month: 'March',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 4,
        month: 'April',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 5,
        month: 'May ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 6,
        month: 'June ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 7,
        month: 'July ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 8,
        month: 'August',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 9,
        month: 'September',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 10,
        month: 'October',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 11,
        month: 'November ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
      {
        id: 12,
        month: 'December ',
        pay: false,
        payData: '22-03-2020',
        price: '700',
      },
    ],
  },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
