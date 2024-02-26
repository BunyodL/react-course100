import { useState } from 'react';
import st from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, setPage, portionSize }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={st.pages}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>LEFT</button>}

      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span className={currentPage === p && st.selectedPage} onClick={() => setPage(p)}>
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>RIGHT</button>}
    </div>
  );
};

export default Paginator;
