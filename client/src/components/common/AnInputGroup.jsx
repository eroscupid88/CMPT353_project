import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const AnInputGroup = ({ name, placeholder, value, icon, type, errors, onChange }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames('form-control form-control-lg', {
          'is-invalid': errors,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  )
}

AnInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,

  icon: PropTypes.string,
  errors: PropTypes.string,
  type: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,
}
AnInputGroup.defaultProps = {
  type: 'text',
}

export default AnInputGroup
