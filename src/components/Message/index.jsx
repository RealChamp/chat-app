import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import ruLocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import './Message.scss';
import checkedMessageModify from '../../assets/img/double-checked-modify.svg';
import uncheckedMessage from '../../assets/img/checked.svg';

function Message({ avatar, text, date, isMe, isReaded, attachments, isTyping }) {
  return (
    <div
      className={classNames('message', {
        'message--isntme': !isMe,
        'message--is-typing': isTyping,
        'message--image': !text && attachments && attachments.length === 1,
      })}>
      <div className="message__content">
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar`} />
          {/* TODO user.fullname in alt */}
        </div>
        {(text || isTyping) && (
          <div className="message__bubble">
          {text && <p className="message__text">{text}</p>}
          {isTyping && (
            <div className="message__typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        )}    
        {isReaded ? (
          <img className="checked-icon" src={checkedMessageModify} alt="" />
        ) : (
          <img className="unchecked-icon" src={uncheckedMessage} alt="" />
        )}
      </div>
      <div className="message__attachments">
        {attachments &&
          attachments.map((item) => (
            <div key={item.url} className="message__attachments-item">
              <img src={item.url} alt={item.filename} />
            </div>
          ))}
      </div>
      {date && (
        <span className="message__date">
          {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
        </span>
      )}
    </div>
  );
}
Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
