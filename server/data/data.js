const mongoose = require('mongoose')
mongoose.connect('localhost:27017/SchoolDTNT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const UserSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    class: {
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true
    },
    description: [{
        content: String,
        date: Date
    }]
})

export const DataUser = mongoose.model('dataUser', UserSchema)