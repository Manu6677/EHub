import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
  type,
}) => {

   const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    // console.log(data.genres);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    // return () => {
    //   setGenres({});
    // };
  }, []);

  return (
    <div style={{ padding: "6px 0px" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: "3px" }}
            //   size="small"
            color="primary"
            clickable
            onDelete={()=> handleRemove(genre)}
          />
        ))}

      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: "3px" }}
            //   size="small"
            clickable
            onClick={()=>handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
