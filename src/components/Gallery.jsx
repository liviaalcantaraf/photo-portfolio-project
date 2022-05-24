import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  let dataPhoto = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1514480657081-a987d9a45e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1539572442282-b62812d2422f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1643904525337-64bb2273a1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1554162383-d5e3f885d9a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      imgSrc:
        "https://images.unsplash.com/photo-1612529377235-777c1ad46428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
    },
    {
      id: 7,
      imgSrc:
        "https://images.unsplash.com/photo-1609813744174-a0df83d477fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 8,
      imgSrc:
        "https://images.unsplash.com/photo-1506854309843-995c2c241f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80",
    },
    {
      id: 9,
      imgSrc:
        "https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 10,
      imgSrc:
        "https://images.unsplash.com/photo-1493321384838-70c5a85ba487?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474",
    },
    {
      id: 11,
      imgSrc:
        "https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 12,
      imgSrc:
        "https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
    },
    {
      id: 13,
      imgSrc:
        "https://images.unsplash.com/photo-1653185063454-3a6532673066?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      id: 14,
      imgSrc:
        "https://images.unsplash.com/photo-1653162143209-a6f100377faf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
    },
    {
      id: 15,
      imgSrc:
        "https://images.unsplash.com/photo-1551672449-d49274816749?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
    {
      id: 16,
      imgSrc:
        "https://images.unsplash.com/photo-1630247008103-7b6bffe8d21b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <h1 className="title">My portfolio</h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <h1 className="close" onClick={() => setModel(false)}>
          X
        </h1>
      </div>
      <div className="gallery">
        {dataPhoto.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
