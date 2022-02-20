import React from "react";


import "./SubCategory.css";
const SubCategory = () => {
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
    <div className="pal-subcategory__wrapper">
      <div className="pal-subcategory__title">Выберите под категорию</div>

      <div className="pal-subcategory">
        {categories &&
          categories.map((category, index) => (
            <div
              onClick={() => handleSelectCategory(category.id)}
              key={`${category.id}:${index}`}
              className={
                selectedCategory === category.id
                  ? "pal-subcategory__item pal-subcategory__item-active"
                  : "pal-subcategory__item"
              }
            >
              <span>{category.title}</span>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default SubCategory;
