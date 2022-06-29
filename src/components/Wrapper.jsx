
import Statistics from './Statistics/Statistics'
import data from './data/data.json'

import FriendList from './FrindList/FriendList'
import friends from './data/friends.json'

import Profile from './Profile/Profile'
import userCard from './data/user.json'


import style from './wrapper.module.css';

export default function Wrapper() {
    return (
        <div className={style.contactBlock}>
            <Profile username={userCard.username}
                tag={userCard.tag}
                location={userCard.location}
                avatarUrl={userCard.avatar}
                followers={userCard.stats.followers}
                views={userCard.stats.views}
                likes={userCard.stats.likes}
            />
            <FriendList friends={friends} />
            <Statistics title="Upload stats"
                stats={data} />
            
        </div>
    )
}