import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default function PersistableContainer(DataComponent, firebaseRef) {

    return class PersistableContainer extends Component {

        static propTypes = {
            persistablePath: PropTypes.string.isRequired,
        };

        static defaultProps = {};
        SERVER_TIMESTAMP = null;
        state = {
            data: null
        };

        data = {current: null};
        firebaseRef = null;

        render() {
            this.data.current = this.state.data;
            if (DataComponent) {
                return <DataComponent data={this.data} changeData={this.changeData} {...this.props} />;
            }
            return null;
        }

        onValue = (snapshot) => {
            const data = snapshot.val() || {};
            this.setState({data});
        };

        changeData = (data) => {
            if (this.firebaseRef) {
                this.firebaseRef.set(data);
            }
        };



        onDispose = () => {
            this.firebaseRef && this.firebaseRef.off('value', this.onValue);
            this.firebaseRef = null;
        };

        componentDidMount() {
            const {store} = this.context;
            this.firebaseRef = firebaseRef;
            if (this.props.persistablePath) {
                this.firebaseRef.on('value', this.onValue);
            }
        }

        componentWillUnmount() {
            this.onDispose();
        }

    }
}