import React, { useEffect, useState } from 'react';
import usersApi from '../../../api/usersApi';
import CardsList from '../../ui/cardsList/cardsList';
import { stateOfCardsArray } from '../../../store/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from './mainPage.module.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.api.cards);
  const [pageState, setPageState] = useState('loading');

  useEffect(() => {
    usersApi
      .fetchUsers()
      .then((users) => {
        dispatch(stateOfCardsArray(users));
        setPageState('success');
      })
      .catch((error) => {
        console.error(error);
        setPageState('error');
      });
  }, []);

  if (pageState === 'loading') {
    return <h1>Loading</h1>;
  }

  if (pageState === 'error') {
    return <h1>Error</h1>;
  }

  if (cards.length === 0) {
    return <h1>Нет данных...</h1>;
  }

  return (
    <div className={styles.main}>
      {cards.map((card) => (
        <div className={styles.article} key={card.id}>
          <CardsList {...card} />
        </div>
      ))}
    </div>
  );
};

export default MainPage;
