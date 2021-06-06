import Component from './Header';
import * as actions from './actions.js';
import * as selectors from './selectors.js';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    getData: selectors.onGetData(state)
});

const mapDispatchToProps = dispatch => ({
    setData : (data) => dispatch(actions.onSendData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);