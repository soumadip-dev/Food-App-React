import React from 'react';

class TeamClass extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with default user info
    this.state = {
      userInfo: {
        name: 'John Doe',
        location: 'New York',
        avatar_url: 'https://abc', // Placeholder avatar URL
      },
    };
  }

  // Fetch user info from GitHub API when component mounts
  async componentDidMount() {
    const data = await fetch(
      `https://api.github.com/users/${this.props.user_name}`
    );
    const json = await data.json();
    console.log(json);

    // Update state with fetched user info
    this.setState({
      userInfo: json,
    });
  }

  render() {
    // Destructure user info from state and props
    const { name, location, avatar_url } = this.state.userInfo;
    const { p_name, p_location, p_url, p_role } = this.props;

    return (
      <div className="team-cart-container">
        {/* Display avatar, falling back to prop URL if not available */}
        <img className="avatar" src={avatar_url || p_url} alt="User Avatar" />
        {/* Display name, falling back to prop name if not available */}
        <h3 className="user-name">{name || p_name}</h3>
        {/* Display role */}
        <p className="user-role">{p_role}</p>
        {/* Display location, falling back to prop location if not available */}
        <p className="user-location">Location: {location || p_location}</p>
      </div>
    );
  }
}

export default TeamClass;
