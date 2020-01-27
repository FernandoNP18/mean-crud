const mongoose = require("mongoose");
const { Schema } = mongoose;
const vehicleSchema = new Schema({
    marc:{type:String,required:true},
    brand:{type:String,required:true},
    model:{type:String,required:true},
    color:{type:String,required:true},
    type:{type:String,required:true}
});
module.exports = mongoose.model("Vehicle", vehicleSchema);