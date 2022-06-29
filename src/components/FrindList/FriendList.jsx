import PropTypes from 'prop-types';
import style from './friendsList.module.css';


function FriendList({ friends }) {
    
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li key={ id } className={style.item}>
                    <span className={isOnline ? style.online : style.offline}></span>
                    <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={style.name}>{ name}</p>
                </li>
            ))}
            
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf( PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
)}

export default FriendList;