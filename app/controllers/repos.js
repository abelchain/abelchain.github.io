var Repo = require('../models/repo');

var Repos = {
    //get '/'
    index: function(req, res) {
        res.render('index');
    },

    //get '/search'
    search: function(req, res) {
        Repo.search(req.query.query, function(err, data) {
            res.json(data);
        })
    }
}

module.exports = Repos;
