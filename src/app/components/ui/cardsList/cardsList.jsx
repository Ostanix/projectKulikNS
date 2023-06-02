import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './cardsList.module.css';

const CardsList = ({ ...card }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className={styles.text} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hovered ? (
        <>
          <li>Company: {card.company.name}</li>
          <li>Company Catchphrase: {card.company.catchPhrase}</li>
          <li>Company BS: {card.company.bs}</li>
          <li>
            <Link to={`/user/${card.id}`} className={styles.btn}>
              Открыть карточку
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>name: {card.name}</li>
          <li>email: {card.email}</li>
          <li>username: {card.username}</li>
          <li>phone: {card.phone}</li>
        </>
      )}
    </div>
  );
};

export default CardsList;
