import React from "react";
// import defaultUserImage from "../../../../assets/icons/personal_profile/user_avatar.png";
// import defaultCommentImage from "../../../../assets/icons/user_profile/comment_image.png";
// import playIcon from "../../../../assets/icons/user_profile/play.png";

import "./Reviews.css";
const Reviews = () => {
  return (
    <div className="user-profile__reviews-wrapper">
      {Array(3)
        .fill(0)
        .map((arr, index) => (
          <div key={index} className="up-revs-rev">
            <div className="up-revs__top">
              <div className="up-revs__top-userimage">
                {/* <img src={defaultUserImage} alt="user_image" /> */}
              </div>
              <div className="up-revs__top-name">
                <span>Сергей</span>
                <span>Дизайнерский стул...</span>
              </div>
              <div className="up-revs__top-date">08.05.2021</div>
            </div>
            <div className="up-revs__comment">
              Вообще шлак, на фото такое ощущение другой товар!
            </div>
            <div className="up-revs__media">
              {/* {Array(5)
                .fill(0)
                .map((arr, index) => (
                  <img
                    key={index}
                    src={defaultCommentImage}
                    alt="comment_image"
                  />
                ))} */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
