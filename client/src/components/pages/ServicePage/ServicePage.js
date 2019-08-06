import React, { useRef, useState, useEffect } from "react";
import Card from "../../card/Card";
import "./ServicePage.css";
import Divider from "@material-ui/core/Divider";
import Service from "./service_/Service";
import { PostsData } from "../../../Data/postsData";

function ServicePage(props) {
  const serviceRef = useRef();
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  useEffect(() => {
    setPosts([...PostsData]);
  }, []);

  useEffect(() => {
    activePost && window.scrollTo(0, serviceRef.current.offsetTop);
  }, [serviceRef, activePost]);

  const onCardClicked = item => {
    setActivePost({ ...item });
  };
  return (
    <React.Fragment>
      <div className="row p-4 mx-auto justify-content-center align-items-center text-center">
        <div className="col-md-12 mb-2">
          <h2 className="p-4">Services</h2>
          <div className="app-card-list">
            {Object.keys(posts).map(key => (
              <Card
                onClick={() => onCardClicked(posts[key])}
                key={key}
                heading={posts[key].title}
                description={posts[key].text}
                image={posts[key].image}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider style={{ height: "5px" }} variant="fullWidth" />
      <div ref={serviceRef}>
        {activePost && (
          <React.Fragment>
            <Service
              heading={activePost.title}
              image={activePost.image}
              description={activePost.text}
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
export default ServicePage;
