import PropTypes from 'prop-types'
import { ProfiledStyled, NameStyled, StatsNumber, Stats } from './ProfileStyles'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfiledStyled className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <NameStyled className="name">{username}</NameStyled>
            <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <Stats>
    <li>
      <span className="label">Followers</span>
                <StatsNumber>{stats.followers}</StatsNumber>
    </li>
    <li>
      <span className="label">Views</span>
      <StatsNumber>{stats.views}</StatsNumber>
    </li>
    <li>
      <span className="label">Likes</span>
      <StatsNumber>{stats.likes}</StatsNumber>
    </li>
  </Stats>
</ProfiledStyled>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}