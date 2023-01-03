import React from "react";
import './Paginate.css'

const Paginate = ({currentPage, paginate, totalPages, setCurrentPage}) => {

  const pageNumbers = []

  for(let i = 0; i < totalPages; i++){
    pageNumbers.push(i+1) 
  }

  function nextPage() {
      setCurrentPage(currentPage +1)
  }

  function prevPage() {
    setCurrentPage(currentPage - 1)
  }


  return (
    <div className="paginate-container">
         <button className="btnPrev" disabled={currentPage <= 1} onClick={prevPage}>
        {'<'}
      </button>
      {pageNumbers.map((e)=>{
        return (
          <button className={e === currentPage ? "btnActive" : "btnPaginate"} key={e} onClick={()=>paginate(e)} >
            {e}
          </button>
        )
      })}
      <button className="btnNext" disabled={currentPage >= totalPages} onClick={nextPage}>
        {'>'}
      </button>
    </div>
  );
};

export default Paginate;