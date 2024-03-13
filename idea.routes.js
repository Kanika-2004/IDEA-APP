const idea_controller= require('../controllers/idea.controllers')
module.exports=(app)=>{
    app.get("/ideaapp/api/v1/ideas",idea_controller.getallideas)

}
module.exports=(app)=>{
    app.post("/ideaapp/api/v1/ideas",idea_controller.createidea)
}