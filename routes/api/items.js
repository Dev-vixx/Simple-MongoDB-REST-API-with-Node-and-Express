let express = require("express");
let router = express.Router();


// item module
const Item = require("../../modules/Item")

// @route GET api/items
// @desc Get All Items
// access Public
router.get("/", (req,res)=>
{
    Item.find()
    .sort({date: -1 })
    .then(items => res.json(items))
})
// @route POST api/items
// @desc Ceate A Post
// access Public
router.post("/", (req,res)=>
{
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
    .then(item => res.json(item))
})
// @route Delete api/items/:id  
// @desc Delete An item
// access Public
router.delete("/:id", (req,res)=>
{
  Item.findById(req.params.id)
  .then(item => Item.deleteOne(item).then(()=>res.json({success: true})))
  .catch(err => res.status(404).json({success: false}))
})

module.exports = router;