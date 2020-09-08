import React from 'react'
import {Button as ButtonBase} from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

function Button(props) {
    return <ButtonBase {...props} className={classNames('button', props.className, {
        'button--large': props.size === 'large'
    })}/>
}

Button.propTypes = {
    className: PropTypes.string
}

export default Button
