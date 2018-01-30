var knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.redirect('/landingPage');
  },

  lndg: function(req, res) {
    knex('workers').then((result)=>{
    res.render('landingPage', {workers: result})
  })
  .catch((err)=>{
    console.error(err)
  });
},

  admin: function(req, res) {
    knex('admins')
    .where('id', req.params.id)
    .then((result)=>{
      console.log("hitting the admin route");
    res.render('AdminAccount', {admins: result[0]})
  })
  .catch((err)=>{
    console.error(err)
  });
},

/*admin: function(req, res) {
  knex('admins')
  .then((result)=>{
  res.render('AdminAccount', {admins: result})
})
.catch((err)=>{
  console.error(err)
});
},*/


  ca: function(req, res) {
    knex('workers')
    .where('id', req.params.id)
    .then((result)=>{
    res.render('CandidateAccount', {workers: result[0]})
  })
  .catch((err)=>{
    console.error(err)
  });
},

cp: function(req, res) {
  knex('workers')
  .where('id', req.params.id)
  .then((result)=>{
  res.render('CandidateProfile', {workers: result[0]})
})
.catch((err)=>{
  console.error(err)
});
},


  ea: function(req, res) {
    knex('employers')
    .where('id', req.params.id)
    .then((result)=>{
    res.render('EmployerAccount', {employers: result[0]})
  })
  .catch((err)=>{
    console.error(err)
  });
},

  jp: function(req, res) {
    knex('jobs')
    .where('id', req.params.id)
    .then((result)=>{
    res.render('JobProfile', {jobs: result[0]})
  })
  .catch((err)=>{
    console.error(err)
  });
},

  js: function(req, res) {
    knex('jobs').then((result)=>{
    res.render('JobSearch', {jobs: result})
  })
  .catch((err)=>{
    console.error(err)
  });
},

  sign: function(req, res) {
    knex('workers').then((result)=>{
    res.render('SignUp', {workers: result})
  })
  .catch((err)=>{
    console.error(err)
  });
},

  create: function(req, res){
    console.log(req.body)
    knex('workers')
    .insert({
      email: req.body.email,
      password: req.body.password
    })
    .then((result)=>{
      console.log(result)
      console.log(req.headers)
    })
    .then(res.redirect('/landingPage'))
    .catch((err)=>{
      console.error(err)
    });
  },

  ws: function(req, res) {
    knex('workers').then((result)=>{
    res.render('WorkerSearch', {workers: result})
  })
  .catch((err)=>{
    console.error(err)
  });
},

};
