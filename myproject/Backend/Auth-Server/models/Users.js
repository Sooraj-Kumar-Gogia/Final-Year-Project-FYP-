const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { hash } = require('bcrypt')


const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    }

})




UserSchema.pre('save', function(next) {
    const user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) {return next();}

// generate a salt
bcrypt.genSalt(10, function(err, salt) {
    if (err){return next(err);}

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {return next(err);}

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});



UserSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;
    return new Promise((resolve, reject)=> {
        bcrypt.compare(this.comparePassword, user.password, (err, isMatch) => {
            if (err) {
                res.send("first if te ahyan")
                return reject(err)
            }
            if (!isMatch) {
                res.send("second if te ahyan")
                return reject(err)
            }
            resolve(true)
        })
    })
}





// UserSchema.methods.comparePassword = function(candidatePassword) {
//     bcrypt.compare(candidatePassword, user.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

mongoose.model('Users', UserSchema);