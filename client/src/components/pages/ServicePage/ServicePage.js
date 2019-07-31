import React, { useState, useEffect } from "react";
import Card from "../../card/Card";
import "./ServicePage.css";

const PostsData = [
  {
    category: "News",
    title: "Cheap flights",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image:
      "http://steffen-s.com/wp-content/uploads/2016/04/NZ-Landscape-3-600x400.jpg"
  },
  {
    category: "Travel",
    title: "Airlineser club membership",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image:
      "https://picography.co/wp-content/uploads/2019/06/picography-dark-skies-over-grass-600x400.jpg"
  },
  {
    category: "Development",
    title: "Popular destinations",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image:
      "http://steffen-s.com/wp-content/uploads/2019/02/L8210_CLOUDS_BONETTE_02-600x400.jpg"
  }
];

function ServicePage(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts([...PostsData]);
  }, []);
  return (
    <div className="row p-4 mx-auto justify-content-center align-items-center text-center">
      <div className="col-md-12">
        <h2 className="p-4">Services</h2>
        <div className="app-card-list">
          {Object.keys(posts).map(key => (
            <Card
              key={key}
              heading={posts[key].title}
              description={posts[key].text}
              image={posts[key].image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServicePage;
