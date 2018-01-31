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

  edcand: function(req, res){
    let candid = req.body.worker
    knex('workers')
    .where('id', candid)
    .update({
      location: req.body.location,
      relocate: req.body.relocate,
      experience: req.body.experience,
      certifications: req.body.certifications,
      license: req.body.license,
      degrees: req.body.degrees,
      skills: req.body.skills,
      username: req.body.username,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      id: req.body.worker
    })
    .then((result)=>{
      res.redirect(`/CandidateAccount/${candid}`)
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edemp: function(req, res){
    let employid = req.body.employer
    console.log(req.body.employer)
    knex('employers')
    .where('id', employid)
    .update({
      locations: req.body.locations,
      company: req.body.company,
      cp: req.body.cp,
      username: req.body.username,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      id: req.body.employer
    })
    .then((result)=>{
      res.redirect(`/EmployerAccount/${employid}`)
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

  logw: function(req, res){
    knex('workers')
    .where('email', req.body.email)
    .then((result)=>{
      let worker = result[0];
      let workid = result[0].id;
      if(worker.password === req.body.password){
        res.redirect(`/CandidateAccount/${workid}`);
      }

    })
  },

  newemp: function(req, res){
    console.log(req.body)
    knex('employers')
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

  loge: function(req, res){
    knex('employers')
    .where('email', req.body.email)
    .then((result)=>{
      let employer = result[0];
      let empid = result[0].id;
      if(employer.password === req.body.password){
        res.redirect(`/EmployerAccount/${empid}`);
      }

    })
  },

  newjob: function(req, res){
    let empid = req.body.company
    knex('jobs')
    .insert({
      location: req.body.location,
      experience: req.body.experience,
      certifications: req.body.certifications,
      licensing: req.body.licensing,
      degrees: req.body.degrees,
      skills: req.body.skills,
      description: req.body.description,
      company: req.body.company
    })
    .then(res.redirect(`/EmployerAccount/${empid}`))
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
