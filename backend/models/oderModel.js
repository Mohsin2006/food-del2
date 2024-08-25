import mongoose from "mongoose"
const orderSchema=new mongoose.Schema({
userId:{type:String,requireed:true},
items:{type:Array,requireed:true},
amount:{type:Number,requireed:true},
address:{type:Object,requireed:true},
status:{type:String,default:"Food Processing"},
date:{type:Date,default:Date.now()},
payment:{type:Boolean,default:false}
})

const orderModel=mongoose.models.order||mongoose.model("order",orderSchema);
export default orderModel;