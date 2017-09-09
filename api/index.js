const
    setup    = require('./app.server'),
    env  = require('./env');

setup()
    .then(function(http){
        http.listen(env.port,function(){
            console.log('API Magic happens on port: ' + env.port);
        });
    })
    .catch(function(err){
        console.log('--------------------------');
        console.log(err);
        console.log('--------------------------');
    });

