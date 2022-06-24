import mongoose from "mongoose"; 
const { Schema } = mongoose;

const secretSchema = new Schema({
    key: String,
    message: String
});

const Secret = mongoose.model('secret', secretSchema);

export { Secret };