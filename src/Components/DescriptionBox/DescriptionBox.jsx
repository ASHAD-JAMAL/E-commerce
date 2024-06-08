import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <>
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            eos officiis exercitationem, at perferendis odio inventore natus,
            quibusdam pariatur earum eaque fuga officia aliquid numquam maxime
            soluta voluptatum provident doloribus nam architecto mollitia
            voluptatem! Soluta sint quis accusantium perferendis fugit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ea
            blanditiis dolore porro possimus, velit quasi recusandae praesentium
            dolorum dolor.
          </p>
        </div>
      </div>
    </>
  );
};
export default DescriptionBox;
