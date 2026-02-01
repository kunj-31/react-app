import "./AddVideo.css";
import { useState } from "react";

const initialState={
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  }

function AddVideo({ addVideos }) {
  const [video, setVideos] = useState(initialState);

  function handleSumbit(e) {
    e.preventDefault();
    addVideos(video);
    setVideos(initialState);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideos({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSumbit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Demo JS tutorial",
        //       views: "1M",
        //       time: "1 month ago",
        //       channel: "Coder Dost",
        //       verified: true,
        //     },
        //   ]);
        // }}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
