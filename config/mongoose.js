const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://salmanaligola1998:NzQtstkxLKjY4BiR@cluster0.u2hfbkm.mongodb.net/');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));