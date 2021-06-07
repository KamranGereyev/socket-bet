import Component from './BetInfoRow';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import * as selectors from './selectors.js';

const mapStateToProps = state => ({
    getData: selectors.onGetData(state)
});

const mapDispatchToProps = dispatch => ({
    setData : (data) => dispatch(actions.onSendData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);