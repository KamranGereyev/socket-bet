import constants from '../../constants/index';

export const onSendData = payload => ({
    type: constants.SET_DATA,
    payload,
})