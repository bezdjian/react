const Course = require('../../../models/Course');

module.exports = {
    Query: {
        courses: async (parent, args, context, info) => {
            const courses = await Course.find({})
                .populate()
                .exec();
            console.log("Querying courses: "  + courses);

            return courses;

            // OR you can map if there are other variables...
            /*courses.map( c => ({
                _id: c._id,
                title: c.title,
                author: c.author,
                description: c.description,
                topic: c.topic,
                url: c.url
            }));*/
        }
    }
    /*
    ,
  Mutation: {
    createUser: async (parent, { user }, context, info) => {
      const newUser = await new User({
        name: user.name,
        email: user.email,
        age: user.age
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent, { _id, user }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  User: {
    posts: async ({ _id }, args, context, info) => {
      return await Post.find({ author: _id });
    },
    comments: async ({ _id }, args, context, info) => {
      return await Comment.find({ author: _id });
    }
  }
     */
};

