import React from 'react';
import { useState } from 'react';
import "./Categories.css"
import "./../../../../assets/icons/main_page/plus_icon.svg";

const Categories = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <div className="categories-wrapper">
        
        <div
          className={`categories-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`categories-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="categories-content">{children}</div>
        </div>
      </div>
    );
  };
export default Categories;