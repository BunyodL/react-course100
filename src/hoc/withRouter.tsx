import { ComponentType } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const withRouter = (WrappedComponent: ComponentType) => (props: any) => {
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
