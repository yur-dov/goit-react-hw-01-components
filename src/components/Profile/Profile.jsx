import PropTypes from 'prop-types'
import style from './profile.module.css'

function Profile({username,tag,location,avatarUrl,followers,views,likes}) {
  return <div className={style.profile}>
      <div className={style.description}>
        <img
        src={ avatarUrl }
          alt="User avatar"
          className={style.avatar}
          width='280'
        />
        <p className={style.name}>{ username }</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.list}>
        <li>
          <span className={style.label}>Followers </span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className={style.label}>Views </span>
        <span className={style.quantity}>{views }</span>
        </li>
        <li>
          <span className={style.label}>Likes </span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location:PropTypes.string,
  avatarUrl:PropTypes.string,
  followers:PropTypes.number,
  views:PropTypes.number,
  likes:PropTypes.number,
}

export default Profile;