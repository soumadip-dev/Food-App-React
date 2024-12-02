import { Component } from 'react';
import { DUMMY_USR_URL_F, DUMMY_USR_URL_M } from '../utils/constants';
import TeamClass from './TeamClass';

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <h1>About Rasoii</h1>
          <p className="about-description">
            Welcome to Rasoii, your go-to food delivery app. Whether you're
            craving a quick meal at home or exploring new tastes, we bring the
            best restaurants and cuisines straight to your door. Enjoy fast,
            reliable, and seamless delivery at your convenience.
          </p>
          <div className="about-values">
            <h2>Our Values</h2>
            <ul>
              <li>Fast and Reliable Delivery</li>
              <li>Wide Range of Cuisines</li>
              <li>Real-Time Order Tracking</li>
              <li>Excellent Customer Support</li>
            </ul>
          </div>
          <div className="about-team">
            <h2>Meet Our Team</h2>
            <div className="team-container">
              <TeamClass
                user_name={'soumadip-dev'}
                p_name={'Soumadip Majila'}
                p_role={'Founder'}
                p_location={'Durgapur-India'}
                p_url={DUMMY_USR_URL_M}
              />
              <TeamClass
                user_name={'mainakchakrabortyCodes'}
                p_name={'Mainak Chakraborty'}
                p_role={'App Developer'}
                p_location={'Chakda-India'}
                p_url={DUMMY_USR_URL_M}
              />
              <TeamClass
                user_name={'singhsanket143'}
                p_name={'Sanket Singh'}
                p_role={'Manager'}
                p_location={'Bengalore-India'}
                p_url={DUMMY_USR_URL_M}
              />
              <TeamClass
                user_name={'riyabansal98'}
                p_name={'Riya Bansal'}
                p_role={'Web Developer'}
                p_location={'Bengalore-India'}
                p_url={DUMMY_USR_URL_F}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
