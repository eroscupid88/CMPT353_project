const router = require('express').Router();

const passport = require('passport');

const mongoose = require('mongoose');

const Company = require('../../model/company');

const Request = require('../../model/request')




router.post("/",
    // passport.authenticate('jwt', { session: false }),
    (req,res)=>{
    const user = res.locals.user;
    const {staffRequest,customerRequest,company} = req.body
    const request= new Request({
        staffRequest,customerRequest}
    )
    Company.findById((company._id)).populate('Request').populate('User').exec(function(err, foundCompany) {
        console.log("errorß")
        if (err) {
            return res.status(422).json(err);
        }
        console.log('checking point')
        return res.status(202).json({a: "success"})
    })
})
module.exports = router;
