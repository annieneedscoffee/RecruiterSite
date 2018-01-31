const index = require("../controllers/index.js");

module.exports = function(app){

    app.get('/', index.main);
    app.get('/landingPage', index.lndg);
    app.get('/AdminAccount/:id', index.admin);
    app.get('/CandidateAccount/:id', index.ca);
    app.get('/CandidateProfile/:id', index.cp);
    app.get('/EmployerAccount/:id', index.ea);
    app.get('/JobProfile/:id', index.jp);
    app.get('/JobSearch', index.js);
    app.get('/SignUp', index.sign);
    app.post('/NewWorker', index.create);
    app.post('/LogWorker', index.logw);
    app.post('/NewEmployer', index.newemp);
    app.post('/LogEmployer', index.loge);
    app.post('/NewJob', index.newjob);
    app.get('/WorkerSearch', index.ws);
}
