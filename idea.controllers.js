const ideas=require('../models/idea.models')
let id=3
exports.getallideas=(req,res)=>{
    res.status(200).send(ideas)
}
exports.createidea =(req,res)=>{
    idea_object=req.body
    id++
    idea_object["id"]=id
    ideas.id=idea_object
    res.status(201).send(idea_object)
}