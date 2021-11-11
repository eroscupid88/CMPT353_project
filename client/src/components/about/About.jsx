import React, { Component } from 'react'
import Paragraph from './Paragraph'
import Member from './Member'

class About extends Component {
  render() {
    return (
      <div id="parallax-world-of-ugg">
        <section>
          <h1>Nomosnow</h1>
        </section>

        <section>
          <div className="parallax one">
            <h2>WHAT WE DO</h2>
          </div>
        </section>

        <section>
          <Paragraph letter="F" first="irst paragraph" second="Second paragraph if needed" />
        </section>

        <section>
          <div className="parallax two">
            <h2>WHERE WE ARE FROM</h2>
          </div>
        </section>

        <section>
          <Paragraph letter="F" first="irst paragraph" second="Second paragraph if needed" />
        </section>

        <section>
          <div className="ourTeam-bg">
            <div className="container">
              <div className="row">
                <Member
                  pic="https://i.ibb.co/2hYPR7D/Dillon.jpg"
                  name="Dillon Vu"
                  github="https://github.com/eroscupid88"
                  linkedin="https://www.linkedin.com/in/dillon-vu/"
                />
                <Member
                  pic="https://i.ibb.co/17rQLM5/Lucius.jpg"
                  name="Lucius Ho"
                  github="https://github.com/lucius-95"
                  linkedin="https://www.linkedin.com/in/lucius-ho/"
                />
                <Member
                  pic="https://i.ibb.co/kKZnVxs/Kyle.jpg"
                  name="Kyle Holtby"
                  github="https://github.com/KyleHoltby"
                  linkedin="https://www.linkedin.com/in/kyle-holtby-7aa152195/"
                />
                <Member
                  pic="https://i.ibb.co/YPfJyMS/Hasin.jpg"
                  name="Hasin Raihan"
                  github="https://github.com/hasinraihan55"
                  linkedin="https://www.linkedin.com/in/hasin-raihan-09b37b1b8/"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default About
