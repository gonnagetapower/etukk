
import React from "react";
import "./Category.css";
const Category = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(-1);
  const categories = [
    { id: 0, title: "Транспорт" },
    { id: 1, title: "Транспорт" },

    { id: 2, title: "Детские товары" },
    { id: 3, title: "Детские товары" },

    { id: 4, title: "Мебель" },
    { id: 5, title: "Мебель" },

    { id: 6, title: "Бытовая техника" },
    { id: 7, title: "Бытовая техника" },
  ];

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
  };


  return (
    <div className="pal-category__wrapper">
      <div className="pal-category__title">Выберите категорию</div>

      <div className="pal-categories">
        {categories &&
          categories.map((category, index) => (
            <div
              onClick={() => handleSelectCategory(category.id)}
              key={`${category.id}:${index}`}
              className={selectedCategory === category.id ? "pal-categories__item pal-categories__item-active" : "pal-categories__item"}
            >
              <span>{category.title}</span>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default Category;
