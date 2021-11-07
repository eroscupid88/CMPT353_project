import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CFormInput, CInputGroup, CInputGroupText, CForm } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import AnInputGroups from '../../views/forms/input-group/InputGroup'
import TextFieldGroup from '../common/TextFieldGroup'

class CreateProfile extends Component {
  constructor() {
    super()
    this.state = {
      handle: '',
      location: '',
      githubusername: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {},
    }
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    const { errors, displaySocialInputs } = this.state
    // select options for status
    let socialInputs
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <CFormInput
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            errors={errors.twitter}
          />
          <CFormInput
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            errors={errors.facebook}
          />
          <CFormInput
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            errors={errors.linkedin}
          />
          <CFormInput
            placeholder="YouTube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            errors={errors.youtube}
          />
          <CFormInput
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            errors={errors.instagram}
          />
        </div>
      )
    }
    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Create Your Profile</h1>
                <CForm onSubmit={this.onSubmit}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">@</CInputGroupText>
                    <CFormInput
                      placeholder="* Profile Handle"
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      errors={errors.handle}
                      info="User name"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">@</CInputGroupText>
                    <CFormInput
                      placeholder="Website"
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      errors={errors.website}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">@</CInputGroupText>
                    <CFormInput
                      placeholder="Github Username"
                      name="githubusername"
                      value={this.state.githubusername}
                      onChange={this.onChange}
                      errors={errors.githubusername}
                    />
                  </CInputGroup>

                  <TextFieldGroup
                    placeholder="Github Username"
                    name="githubusername"
                    value={this.state.githubusername}
                    onChange={this.onChange}
                    errors={errors.githubusername}
                    info="If you want your latest repos and a Github link, include your username"
                  />
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState((prevState) => ({
                          displaySocialInputs: !prevState.displaySocialInputs,
                        }))
                      }}
                      className="btn btn-light m-5"
                    >
                      Add Social Network Links
                    </button>
                  </div>
                  {socialInputs}
                  <input type="submit" value="submit" className=" btn btn-info btn-block mt-4" />
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})
export default connect(mapStateToProps)(CreateProfile)
