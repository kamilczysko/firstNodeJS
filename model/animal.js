let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnimalSchema = new Schema({
  name:{
    type:String,
    required: [true, 'required name']
  },
  breed: {type:String,
    required: [true, 'required breed']
  }
  });
AnimalSchema.methods.intruduce = function(){
  console.log('hello my name is '+this.name+' and I am '+this.breed);
};
let Animal = mongoose.model('animal', AnimalSchema);
module.exports = Animal;
