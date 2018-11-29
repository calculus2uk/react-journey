import React from 'react';

const Like = ({ like }) => {
  const likedHeart = 'fas fa-heart';
  const unlikedHeart = 'far fa-heart';

  return (
    <div>
      <i className={like ? likedHeart : unlikedHeart} />
    </div>
  );
};

export default Like;
