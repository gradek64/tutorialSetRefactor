var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});




/* GET object pages */
router.get('/javascript_tuts/tuts_all_scripts_css/:subject', function(req, res) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(`${ pathViews }/javascript_tuts/${ subjectReq }/${ subjectReq }.html`);
});
/* GET array pages */
router.get('/array/:subject', function(req, res, next) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(pathViews+'/javascript_tuts/object_tuts/object_tuts.html');
});
/* GET promise pages */
router.get('/promise/:subject', function(req, res, next) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(pathViews+'/javascript_tuts/object_tuts/object_tuts.html');
});
/* GET loops pages */
router.get('/loops/:subject', function(req, res, next) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(pathViews+'/javascript_tuts/object_tuts/object_tuts.html');
});

/* GET Fumction pages */
router.get('/loops/:subject', function(req, res, next) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(pathViews+'/javascript_tuts/function_tuts/function_tuts.html');
});
/* GET String pages */
router.get('/string/:subject', function(req, res, next) {
    const pathViews  = req.app.locals.pathViews;
    const subjectReq = req.params.subject;
    res.sendFile(pathViews+'/javascript_tuts/string_tuts/string_tuts.html');
});

module.exports = router;
