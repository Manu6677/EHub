import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/BasicPagination";
import './Trending.css';
// import PaginationReact from "../../components/Pagination/PaginationReact";


const Trending = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchTrendingData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    // console.log(data.results);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchTrendingData();
  }, [page]);

  return (
    <div>
      <span className="PageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              poster={c.poster_path}
              media_type={c.media_type}
              date={c.release_date || c.first_air_date}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {/* <PaginationReact /> */}

      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default Trending;
