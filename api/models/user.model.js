'use strict';

const
    mongoose        = require('mongoose'),
    bcrypt          = require('bcrypt-nodejs'),
    MogooseSchema   = mongoose.Schema;

let
    Schema = new MogooseSchema({
        name: String,
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        created_at: {
            type : Date,
            default: Date.now,
            select: false
        },
        deleted_at: {
            type: Date,
            select: false
        }
    });

Schema.pre('save', function(next) {
    var user = this;
    
    // Hash the password only if the user is changed or user is new
    if(!user.isModified('password')) return next();

    // Generate the hash
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if(err) return next(err);

        // Change the password to the hashed version
        user.password = hash;
        next();
    });
});


let
    model = mongoose.model("User",Schema);

module.exports = model;