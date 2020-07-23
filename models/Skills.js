const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});


module.exports = Skill = mongoose.model('skill', SkillSchema);