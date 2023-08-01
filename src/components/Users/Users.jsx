import React from 'react';
import User from './User/User';
import st from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullname: 'Dmitry',
        imageUrl: 'https://bogdo.studio/assets/images/resources/69/medium/biznes_portret_neformalny_muhchina_v-studii_na_temnom_fone.jpg',
        followed: true,
        status: 'Lorem ipsum dolor sit amet consectetur.',
        location: { country: 'Belarus', city: 'Minsk' },
      },
      {
        id: 2,
        imageUrl: 'https://bogdo.studio/assets/images/resources/69/medium/delovaya_fotosessia_biznesman_na_fone_biznescentra.jpg',
        fullname: 'Georgiy',
        followed: true,
        status: 'Lorem ipsum dolor sit  consectetur.',
        location: { country: 'Russia', city: 'Ulyanovsk' },
      },
      {
        id: 3,
        imageUrl: 'https://bogdo.studio/assets/images/resources/69/medium/biznes_fotosessia_devushka_v_ofise.jpg',
        fullname: 'Valentina',
        followed: true,
        status: 'Lorem ipsum dolor sit amet consectetur amet.',
        location: { country: 'Ukraine', city: 'Kiev' },
      },
      {
        id: 4,
        imageUrl: 'https://bogdo.studio/assets/images/resources/69/medium/502.jpg',
        fullname: 'Nikita',
        followed: false,
        status: 'Lorem ipsum dolor sit amet consectetur.',
        location: { country: 'USA', city: 'New York' },
      },
    ]);
  }

  const userElement = props.users.map(u => (
    <User
      name={u.fullname}
      status={u.status}
      image={u.imageUrl}
      followed={u.followed}
      location={u.location}
      follow={props.follow}
      unfollow={props.unfollow}
      id={u.id}
    />
  ));

  return <div className={st.users}>{userElement}</div>;
};

export default Users;
