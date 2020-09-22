import React from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ruLocale from 'date-fns/locale/ru'
import './Message.scss'
import classNames from 'classnames'

function Message({avatar, text, date, isMe}) { 
    return(
        <div className={isMe ? 'message message--isme' : 'message'}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar`}/>
                {/* TODO user.fullname in alt */}
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className='message__text'>{text}</p>
                </div>
                <span className="message__date">
                    {distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale})}
                </span>
            </div>
        </div>
    )
} 
Message.defaultProps = {
    user: {
    }
}

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
}

export default Message