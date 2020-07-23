const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    liveDemo: {
        type: String
    },
    gitHub:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = Post = mongoose.model('project', ProjectSchema);