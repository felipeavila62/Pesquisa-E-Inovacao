const { Schema, model } = require('mongoose');

const ProfSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    user:{
        type: String,
        required: true,
    },
    
}, {
    timestamps: true,
});

module.exports = model('profile', ProfSchema);