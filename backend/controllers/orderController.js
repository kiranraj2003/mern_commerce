const orderModel = require("../models/orderModels");

//create order -/api/v1/order - post
exports.createOrder = async(req, res, next) => {
  // orderModel.create()
  const cartItems = req.body;
  // const amount=cartItems.reduce((acc,item)=>(acc+ item.product.price * item.qty),0)
 const amount=Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2)
  const status = 'pending'
  
  const order=await orderModel.create({cartItems,amount,status})
  console.log(amount, 'amount')
  res.json({
    success: true,
    message: "order works",
    order
  });
};
