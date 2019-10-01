const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function () {
    return this.toString();
};

const CourseSchema = new Schema({
   _id: {
       type: ObjectID
   },
   title: {
       type: String
   },
   author: {
       type: String
   },
   description: {
       type: String
   },
   topic: {
       type: String
   },
   url: {
       type: String
   },
   price: {
        type: String
   }
});

module.exports = mongoose.model("Course", CourseSchema, 'course');