import React from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import { handleInitialData } from '../actions/todos';
// import Test from './Test';

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const { loading } = this.props;
        return <>{loading ? <h3>Loading...</h3> : <ConnectedTodos />}</>;
    }
}

// for each 'connected' component
// connect invokes store.getState() under the hood, invokes callback passed to connect specifying slice to be provided to component
// connect provides dispatch via prop (<App dispatch={store.dispatch} />)
export default connect((state) => ({
    loading: state.loading,
}))(App);

// Redux library code for reference
// const Context = React.createContext()
//     function connect (mapStateToProps) {
//       return (Component) => {
//         class Receiver extends React.Component {
//           componentDidMount() {
//             const { subscribe } = this.props.store
//             this.unsubcribe = subscribe(() => this.forceUpdate())
//           }
//           componentWillUnmount() {
//             this.unsubcribe()
//           }
//           render() {
//             const { dispatch, getState } = this.props.store
//             const state = getState()
//             const stateNeeded = mapStateToProps(state)
//             return <Component {...stateNeeded} dispatch={dispatch} />
//           }
//         }
//         class ConnectedComponent extends React.Component {
//           render() {
//             return (
//               <Context.Consumer>
//                 {(store) => <Receiver store={store}/>}
//               </Context.Consumer>
//             )
//           }
//         }
//         return ConnectedComponent
//       }
//     }
