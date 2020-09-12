const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Skill = require('../../models/Skills');



// @ route POST api/skills
// @ desc add skill to portfolio
// PRIVATE route
router.post('/',[auth, [
    check('title', "Title is required")
    .not()
    .isEmpty(),
    check('img', "Image is required")
    .not()
    .isEmpty(),
    check('type', "Type is required")
    .not()
    .isEmpty()
]
] ,
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, img, type } = req.body;
    try{
        let checkSkill = await Skill.findOne({ title });

        if(checkSkill) {
            return res.status(400).json({ errors: [{ msg:'There is already skill like this' }] });
         }

        const newSkill = new Skill ({
            title,
            img,
            type
        })

        const skill = await newSkill.save();

        res.json(skill);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
});

// @ route GET api/skills
// @ desc get all post
// piblic route

router.get('/', async (req, res) => {
    try{
        const skills = await Skill.find();
        res.json(skills);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @ route Delete api/skills/:id
// @ desc delete single project by id
// private

router.delete('/:id', auth, async (req, res) => {
    try{
        const skill = await Skill.findById(req.params.id);
        await skill.remove();
        if(!skill){
            return res.status(404).json({ msg: 'Skill not found' });
        }
        res.json({ msg: 'Skill removed' });
    } catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({ msg: 'skill not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;