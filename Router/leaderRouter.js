const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leader to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leader');
})
.delete((req, res, next) => {
    res.end('Deleting all leader');
});

leaderRouter.get('/:leaderId', (req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})

.post('/:leaderId', (req, res, next) => {
res.statusCode = 403;
res.end('POST operation not supported on /leader/'+ req.params.leaderId);
})

.put('/:leaderId', (req, res, next) => {
res.write('Updating the leader: ' + req.params.leaderId+ '\n');
res.end('Will update the leader: ' + req.body.name + 
' with details: ' + req.body.description);
})

.delete('/:leaderId', (req, res, next) => {
res.end('Deleting leaderId: ' + req.params.leaderId);
})




module.exports = leaderRouter;