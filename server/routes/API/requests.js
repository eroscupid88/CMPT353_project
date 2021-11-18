const router = require('express').Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Company = require('../../model/company');




router.post("/",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const user = res.locals.user;
    const {staffRequest,customerRequest,company} = req.body
    const request= new Request({
        staffRequest,customerRequest}
    )
    Company.findById((company._id)).populate('Request').populate('User').exec()

})
module.exports = router;
