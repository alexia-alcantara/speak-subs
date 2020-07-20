import React, { useState } from 'react';

import Progress from '../../components/Progress';

const Home = () => {
  const [subsCount, setSubsCount] = useState(133);
  const goal = 1000;

  return(
    <article className="App__container">
      <p className="App__container__text">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div className="App__container__subs">
        <p className="App__container__subs__count">133</p>
        <p className="App__container__subs__label">Inscritos</p>
      </div>
      <Progress count={subsCount} goal={goal} />
    </article>
  )
}

export default Home;