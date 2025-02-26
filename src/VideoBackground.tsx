import React, { useEffect, useState } from "react";
import videosrc from "./assets/profile_video.MOV";
import "./VideoBackground.css"; // Import styles

const filters = ["grayscale(100%)", "sepia(70%)", "blur(5px)", "none"]; // Random filters

const sendEmail = () => {
  const email = atob("c2ltb24udGFrbWFuQHBlbGFnLmlv");
  window.location.href = `mailto:${email}`;
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const VideoBackground = () => {
  const [videos, setVideos] = useState([]);
  const [titlePosition, setTitlePosition] = useState({
    top: "50vh",
    left: "50vw",
  });

  useEffect(() => {
    const numVideos = getRandom(3, 8); // Adjust min/max for density
    const newVideos = Array.from({ length: numVideos }).map(() => ({
      src: videosrc,
      top: `${getRandom(0, 100)}vh`,
      left: `${getRandom(0, 100)}vw`,
      width: `${getRandom(20, 40)}vw`,
      filter: filters[getRandom(0, filters.length - 1)],
    }));

    setVideos(newVideos);

    // Find a free position for the title
    let titleTop, titleLeft, isOverlapping;
    do {
      titleTop = getRandom(10, 80);
      titleLeft = getRandom(10, 80);
      isOverlapping = newVideos.some(
        (v) =>
          Math.abs(v.top - titleTop) < v.width &&
          Math.abs(v.left - titleLeft) < v.width
      );
    } while (isOverlapping);

    setTitlePosition({ top: `${titleTop}vh`, left: `${titleLeft}vw` });
  }, []);

  return (
    <>
      <div className="video-container">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video.src}
            autoPlay
            loop
            muted
            playsInline
            className="video"
            style={{
              top: video.top,
              left: video.left,
              width: video.width,
              filter: video.filter,
              zIndex: 1, // Ensures videos stay behind
              pointerEvents: "none", // Stops videos from blocking clicks
            }}
          />
        ))}

        <h1
          className="title"
          style={{
            top: titlePosition.top,
            left: titlePosition.left,
          }}
        >
          👨‍💻🇸🇪
        </h1>
        <footer className="footer">
          <a href="https://github.com/simontakman">GitHub</a>
          <a href="https://www.linkedin.com/in/simontakman">LinkedIn</a>
          <a href="#" onClick={sendEmail}>
            Contact
          </a>
        </footer>
      </div>
    </>
  );
};

export default VideoBackground;
