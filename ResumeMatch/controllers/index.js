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

};
