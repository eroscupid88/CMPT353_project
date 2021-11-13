// create company
// private
// Router
const router = require('express').Router();

const isEmpty = require('../../validation/isempty');
// model from mongoose
const Company = require('../../model/company');

const User = require('../../model/user');

const Profile = require('../../model/profile');

const passport = require('passport');

const validateCompanyInputs = require('../../validation/company');

const mongoose = require('mongoose');

/**
 * REST API to create a company
 */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCompanyInputs(req.body);
    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    let companyFields= {}
    companyFields.owner = req.user[0].id;
    companyFields.name = req.body.name;
    if (req.body.description) companyFields.description = req.body.description;
    Company.findOne({owner: req.user[0].id}).then(result =>{
        if(result){
            Company.findOneAndUpdate(
                {owner: req.user[0].id},
                { $set: companyFields },
                { new: true }
            ).then(company=> res.status(200).json(company))
        }else{
            // create new company
                new Company({
                    _id: mongoose.Types.ObjectId(),
                    name: req.body.name,
                    owner: req.user[0].id,
                    description: req.body.description,
                })
                .save()
                .then((result) => {
                    // Update
                    Profile.findOneAndUpdate(
                        { user: req.user[0].id },
                        { company: result.id },
                        { new: true }
                    ).then((profile) => res.status(200).json(profile)).catch(err=>res.status(404).json(err));
                })
                .catch((error) => {
                    res.status(404).json(error);
                });
        }
    }
    )


  }
);
/**
 * Rest API to get a company invoke by getCurrentCompany
 */
router.get('/',passport.authenticate('jwt', { session: false }),
    (req, res) => {
  Company.findOne({owner: req.user[0].id})
    .then((company) => res.json(company))
    .catch((err) =>
      res.status(404).json({ nocompanyfound: 'No company found ' })
    );
});

/**
 * Rest API to get all companies invoke by getCompanies
 */
router.get('/all',
    (req, res) => {
        Company.find()
            .then((company) => res.json(company))
            .catch((err) =>
                res.status(404).json({ nocompanyfound: 'No company found ' })
            );
    });



/**
 * rest API to get company by id
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Company.findById(req.params.id)
    .then((company) =>
      res.json({
        name: company.name,
        description: company.description,
        total_employee: company.staff.length + 1,
        total_customer: company.customer.length
      })
    )
    .catch((err) =>
      res.status(404).json({
        nocompanyfound: `No company found with that + ${id}`,
      })
    );
});

/**
 * Rest API to delete company
 */

router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
      Company.findOne({owner: req.user[0].id})
        .then((company) => {

          company.remove().then(() => res.status(204).json({ success: true }));
        }).catch(err=>{res.status(404).json(err)})
  }
);

/**
 * REST API to hire staff
 */

router.post(
  '/staff/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Company.findOne({ owner: req.user[0].id })
      .populate('User')
      .then(
        (company) => {} // find user
       // need to be done
      )
      .catch((err) => {
        res.json({
          noowner: 'you does not own a company',
        });
      });
  }
);
/**
 * REST API to accept customer
 */

module.exports = router;
