import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({
  id,
  title,
  poster,
  media_type,
  date,
 vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent= {vote_average.toFixed(1)} 
        color={vote_average<6? "primary": "secondary"}>
        </Badge>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "Tv Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
