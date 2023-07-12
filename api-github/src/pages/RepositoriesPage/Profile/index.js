import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} alt="gpt image" />
        <Login>{user.login}</Login>
        <Name> {user.name} </Name>
      </Header>
      <Inner>
        {user.location && (
          <Data>
            <MdGroup size={20} /> {user.followers} seguidores &middot; seguindo{' '}
            {user.followings ? user.followings : 0}
          </Data>
        )}
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            {' '}
            <MdLocationCity size={20} /> {user.location}
          </Data>
        )}
        {user.login && (
          <Data>
            {' '}
            <MdLink size={20} />
            <a href={`\\${user.blog}`}>{user.login} </a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number,
    followings: PropTypes.number,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
