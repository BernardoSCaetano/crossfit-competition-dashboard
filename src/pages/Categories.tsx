import React from "react";
import Categories from "../components/Categories";
import MovementStandards from "../components/MovementStandards";

const CategoriesPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="container">
        <Categories />
        <MovementStandards />
      </div>
    </div>
  );
};

export default CategoriesPage;
