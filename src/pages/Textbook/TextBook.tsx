import React from 'react';
import { useAppSelector } from 'app/hooks';
import Header from 'components/Header/Header';

const TextBook = () => {
  const { user } = useAppSelector((state) => state.app);
  const { userToken } = user;

  return (
    <div>
      <Header />
      {!userToken && <h2>Зайдите в свой кабинет</h2>}
    </div>
  );
};

export default TextBook;
