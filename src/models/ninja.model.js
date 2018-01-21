import mongoose from "mongoose"
const Schema = mongoose.Schema;


const NinjaSchema = new Schema({
    value: { type: String },
    checked: { type: Boolean, default: false }
})

const NinjaModel = mongoose.model('ninja', NinjaSchema)

export default NinjaModel;