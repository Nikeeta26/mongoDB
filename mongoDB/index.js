const mongoose = require('mongoose');
main().then((result)=>{
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//create schema it just consider like table colunm
const userSchema = new mongoose.Schema({
  name:String ,
  email:String,
  age :Number

})

//create the model like table of row. through this code create collection 
const User = mongoose.model("User",userSchema);

//find data
User.find({name:"nik"}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});

User.findByIdAndDelete("664c41955d2568ef57ac6b6c").then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
});


//update data

User.updateOne({name:"nik"},{name:"nikeeta"}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})

User.findOneAndUpdate({_id:"664c41955d2568ef57ac6b6d"},{age:4000},{new:true}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})


User.findByIdAndUpdate({_id:"664c41955d2568ef57ac6b6d"},{age:4000}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})

//delete data
User.findByIdAndDelete('664c41955d2568ef57ac6b6a').then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})


//insert one data in DB 
const user2 = new User({
  name:"nik",
  email:"abc@gail.com",
  age:45
});
user2.save().then((result)=>{
console.log(result,"save data");
}).catch((err)=>{
  console.log(err);
});

//insert multiple data.
User.insertMany([
  {name:"sakshi",email:"sakshi@gamil.com",age:56},
  {name:"sneha",email:"sneha@gamil.com",age:67},
  {name:"netra",email:"netra@gamil.com",age:90},
  {name:"zinat",email:"zinat@gamil.com",age:78},
  {name:"vaishnavi",email:"vashuu@gamil.com",age:876},
]).then((result)=>{
  console.log(result);
}).catch((error)=>
{
  console.log(error);
});

