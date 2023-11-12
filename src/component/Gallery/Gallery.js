import React, { useState } from "react";
import { InView } from "react-intersection-observer";

const Gallery = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const media = [
    {
      id: 1,
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      subtitle: "By Blender Foundation",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
    },
    {
      id: 2,
      description: "The first Blender Open Movie from 2006",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      subtitle: "By Blender Foundation",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephant Dream",
    },
    {
      id: 3,
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      subtitle: "By Google",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
    },
    {
      id: 4,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      subtitle: "By Google",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
    },
    {
      id: 5,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35. Find out more at google.com/chromecast.",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      subtitle: "By Google",
      thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
    },
  ];

  const handleIntersection = (inView, id) => {
    const videoElement = document.getElementById(`video-${id}`);

    if (inView) {
      setCurrentVideo(id);
      playVideo(id);
    } else if (currentVideo === id) {
      setCurrentVideo(null);
      pauseVideo(id);
    }
  };

  const playVideo = (id) => {
    media.forEach((video) => {
      const videoElement = document.getElementById(`video-${video.id}`);
      if (video.id !== id) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    });
  };

  const pauseVideo = (id) => {
    media.forEach((video) => {
      const videoElement = document.getElementById(`video-${video.id}`);
      if (video.id !== id) {
        videoElement.pause();
      }
    });
  };

  return (
    <div style={{ height: "10000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }} >
      <div className="gallery">
        {media.map((video) => (
          <div key={video.id} style={{ width: "420px" }}>
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <InView onChange={(inView) => handleIntersection(inView, video.id)}>
              <video
                style={{ width: "420px" }}
                src={video.url}
                id={`video-${video.id}`}
                muted
                loop
              />
            </InView>
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          </div>
        ))}
      </div>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
    </div>
  );
};

export default Gallery;
