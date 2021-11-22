import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import isEmpty from '../../validation/isEmpty'
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
class CompanyCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      company: props.company
    }
  }
  base64_encode(file) {
    return "data:image/gif;base64,"+fs.readFileSync(file, 'base64');
  }
  render(){
    return(
      <>
        <div className="body-organization">
          <div className="profile-card-hover">
            <div className="profile-card__content">
              <div className="about-company">
                <Link to={`/organization/${this.state.company._id}`}>
                  <a className="profile-card__avatar">
                    <img src="https://image.ibb.co/h8LN9K/ea.png" alt="Company Avatar"/>
                  </a>
                </Link>
                <Link to={`/organization/${this.state.company._id}`}>
                <div className="row-wrapper"><a className="profile-card__company-name">{this.state.company.name}</a>
                  <p className="profile-card__company-bio">{this.state.company.name} • Saskatoon Saskatchewan •</p><a className="btn browse-jobs-btn" href="#">See jobs</a>
                </div>
                </Link>
                <div className="user-actions">
                  <button className="btn btn-small follow-btn" type="button"><i className="icon plus-icon">
                    <svg>xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                      x="0px" y="0px" viewBox="0 0 32 40" enable-background="new 0 0 32 32" xml:space="preserve"
                      <polygon
                        points="32,14.5 17.5,14.5 17.5,0 14.5,0 14.5,14.5 0,14.5 0,17.5 14.5,17.5 14.5,32 17.5,32 17.5,17.5 32,17.5 "/>
                    </svg>
                  </i><span>Follow</span></button>
                </div>
              </div>
              <div className="row-wrapper"><span>Total Customer {!isEmpty(this.props.profiles) ? (this.props.profiles.length): ''} • </span>
                <Link to={'/customer'}> See All</Link>
              </div>
              <a className="ellipsis-horizontal-icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"
                     fill="#9ba1ad" width="60px" height="60px">
                  <circle cx="31.14" cy="50" r="6.14"></circle>
                  <circle cx="50" cy="50" r="6.14"></circle>
                  <circle cx="68.86" cy="50" r="6.14"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CompanyCard
