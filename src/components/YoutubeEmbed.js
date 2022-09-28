import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="videoContainer">
    <iframe
      className="responsiveIframe"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="autoplay;"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};