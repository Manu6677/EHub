// import  Pagination  from '@mui/material/Pagination';

// const CustomPagination = () => {
//     // const handlePageChange = (page)=>{
//     //   setPage(page);
//     //   window.scroll(0,0);
//     // }

//   return (
//     <div>
//       <Pagination
//         count={10}
//         color="secondary"
//         //   onChange={(e)=> handlePageChange(e.target.textContent)}
//       />
//     </div>
//   );
// };

// export default CustomPagination;

import React from "react";
import { Pagination } from "antd";

const CustomPagination = ({ setPage, numOfPages }) => {

  const onChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };


  return (
  <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
    
  }}
  >
   
    <Pagination
        onChange={onChange}
        defaultCurrent={1}
        total={numOfPages}
        hideOnSinglePage={true}
        
      />
  
  </div>
)};

export default CustomPagination;
