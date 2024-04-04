import { useState } from 'react'
import './TwitterCard.css'

export function TwitterCard({ userName='desconocido', name }){
    const [isFollowing, stateIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        stateIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} alt="avatar" className='tw-followCard-avatar' />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}