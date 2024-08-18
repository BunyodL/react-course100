import { ProjectRoutes } from '@/projectRoutes';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { HeaderContainer } from '@/components/header';
import { NavbarContainer } from '@/components/navbar';
import { Preloader } from '@/components/common/preloader';
import { initializeApp } from '@/redux/reducers/app-reducer.ts';
import { RootState } from '@/redux/redux-store.ts';

type MapStateToProps = {
    initialized: boolean;
};

type MapDispatchToProps = {
    initializeApp: () => void;
};

type Props = MapStateToProps & MapDispatchToProps;

class App extends PureComponent<Props, {}> {
    handleUncaughtErrors(e: PromiseRejectionEvent) {
        console.log('Error occurred: ' + e.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.handleUncaughtErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.handleUncaughtErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <ProjectRoutes />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
    initialized: state.app.initialized,
});

export const AppContainer = connect<MapStateToProps, MapDispatchToProps, {}, RootState>(
    mapStateToProps,
    { initializeApp },
)(App);
