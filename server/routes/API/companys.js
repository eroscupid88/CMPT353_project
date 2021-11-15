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
                    staff : {user: req.user[0].id}
                })
                .save()
                .then((result) => {
                    // Update user with new company
                    User.findOneAndUpdate(
                        {id: req.user[0].id},
                        {company: result.id},
                        {new: true}
                    )
                    // Update profile with new company
                    Profile.findOne(
                        {user: req.user[0].id}
                    ).then(profile =>{
                        const comp = {
                            company : result
                        }
                        profile.companies.unshift(comp)
                        profile.save().then(result =>res.status(200).json(result))
                    }).catch(err => res.status(404).json(err))

                })
                .catch((error) => {
                    res.status(404).json(error);
                });

            }
        })
  }
);
/**
 * Rest API to get a company invoke by getCurrentCompany (for onwer only)
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
 * Rest API to get a company invoke by getCurrentCompanyByStaff (for staffs only)
 */
router.get('/staff',passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // find company by auth user
        Company.findOne({id: req.user[0].company.id})
            .then((company) => res.json(company))
            .catch((err) =>
                res.status(404).json({ nocompanyfound: 'No company found ' })
            );
    });


/**
 * Rest API to get all companies invoke by getCompanies
 */

// {company_name: company.name,
//     company_onwer: company.owner,
//     company_staff_number: company.staff.length + 1,
//     company_staff_customer: company.customer.length,
//     company_description: company.description}

router.get('/all',
    (req, res) => {
        Company
            .find()
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
 * REST API to get staffs and customer data from staff
 */

router.get(
  '/:companyid/staff',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
      const { companyid } = req.params;
    Company.findOne({ id: companyid })
      .populate('User')
      .then(
        (company) => {
            if (
                // check if auth user is employee or not. If not return null else return list of staffs and customers
                company.staff.filter(
                    staff => staff._id.toString() === req.user[0].id
                ).length === 0
            ){
                return json.status(204).json(null)
            }else{
                return json.status(200).json({
                    staffs: company.staff,
                    customers: company.customer
                })
            }
        }
      )
      .catch((err) => {
        res.json({
          noowner: 'you does not own a company',
        });
      });
  }
);

// manage company by owner

router.get('/ownermanagement',passport.authenticate('jwt', { session: false }), function(req, res) {
    const owner = res.locals.user;
    Company.where({ owner })
        .populate('Request')
        .exec(function(err, foundRequest) {
            if (err) {
                return res.status(422).send(err);
            }
            return res.json(foundRequest);
        });
});



/**
 * REST API to accept customer
 */

module.exports = router;
