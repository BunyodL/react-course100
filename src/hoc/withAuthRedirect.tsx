import { Navigation } from '../@types/navigation';
import { ComponentType, Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from 'redux/redux-store';

type MapStateToPropsForRedirect = {
  isAuth: boolean;
};

const mapStateToPropsForRedirect = (state: RootState) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (
  MyComponent: ComponentType<MapStateToPropsForRedirect>
) => {
  class RedirectComponent extends Component<MapStateToPropsForRedirect, {}> {
    render() {
      if (!this.props.isAuth) return <Navigate to={`${Navigation.Login}`} />;
      return <MyComponent {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
