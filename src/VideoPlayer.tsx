import profile_video from "./assets/profile_video.MOV";
export const VideoPlayer = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        width="100vw"
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: "rotate(180deg)" }}
      >
        <source src={profile_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
