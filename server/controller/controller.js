import mongoose from 'mongoose';
import { DataUser } from '../data/data'

export const getStudent = async (req, res) => {
    try {
        const userStudents = await DataUser.find();
        console.log(userStudents)
        res.status(200).json(userStudents)
    }
    catch(err) {
        res.status(500).json({error: err})
    }
}

export const postStudent = (req, res) => {
    try {
        const db = mongoose.createConnection;

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
        console.log('Connected successfully');
        });

        const User = mongoose.model('students', DataUser);

        for (let i=0; i<35; i++) {
            const newUser = new User({
                name: 'User ' + i,
                class: '10a1',
                password: 'user123',
                description: []
              });
              
              newUser.save((err, user) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log(user);
                }
              });
        }
    }
    catch(err) {
        res.status(500).json({error: err})
    }
}