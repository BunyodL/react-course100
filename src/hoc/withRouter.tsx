import { ComponentType } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function withRouter<WCP>(WrappedComponent: ComponentType<WCP>) {
  return (props: WCP) => {
    const params = useParams();
    const navigate = useNavigate();

    return (
      <WrappedComponent
        {...props}
        params={params}
        navigate={navigate}
      />
    );
  };
}
