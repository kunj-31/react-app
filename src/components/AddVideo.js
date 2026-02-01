import "./AddVideo.css";
import { useEffect, useState } from "react";

const initialState={
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  }

function AddVideo({ addVideos, updateVideo, editableVideo }) {
  const [video, setVideos] = useState(initialState);

  function handleSumbit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video);
    }else{
      addVideos(video);
    }
    setVideos(initialState);
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setVideos({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (editableVideo){
      setVideos(editableVideo);
    }
  }, [editableVideo]);

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
      >
       { editableVideo ? "Edit Video" : "Add Video"}
      </button>
    </form>
  );
}

export default AddVideo;
