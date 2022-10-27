import React from "react";
import PropTypes from 'prop-types';
import { MessageBox, Message } from "../Notification/Notification.styled";

export const Notification = ({message}) => {
 
    return (
        <MessageBox>
            <Message>{message}</Message>
        </MessageBox>
    )
}

Notification.propTypes = {
    message:PropTypes.string.isRequired
}
