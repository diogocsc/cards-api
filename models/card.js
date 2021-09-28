import { Schema, model } from 'mongoose';

const cardSchema = new Schema({
    cardText: {
        type: String,
        required:true
    }
})

export default model('Card', cardSchema);