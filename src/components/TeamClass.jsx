import React from 'react';

class TeamClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'John Doe',
        location: 'New York',
        avatar_url: 'https://abc',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      `https://api.github.com/users/${this.props.user_name}`
    );
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { p_name, p_location, p_url, p_role } = this.props;
    return (
      <div className="team-cart-container">
        <img className="avatar" src={avatar_url || p_url} alt="User Avatar" />
        <h3 className="user-name">{name || p_name}</h3>
        <p className="user-role">{p_role}</p>
        <p className="user-location">Location: {location || p_location}</p>
      </div>
    );
  }
}

export default TeamClass;
