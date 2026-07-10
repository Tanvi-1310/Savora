import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import MenuHero from "../../components/customer/MenuHero";
import MenuSearch from "../../components/customer/MenuSearch";
import MenuCategories from "../../components/customer/MenuCategories";
import DishGrid from "../../components/customer/DishGrid";
import { menuItems } from "../../data/menu";

const [search, setSearch] = useState("");

const [selectedCategory, setSelectedCategory] =
  useState("All");
  const filteredDishes = menuItems.filter((dish) => {
  const matchesSearch =
    dish.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    dish.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

function Menu() {
  return (
    <>
      <Navbar />

      <MenuHero />

      <MenuSearch
  search={search}
  setSearch={setSearch}
/>

<MenuCategories
  selected={selectedCategory}
  setSelected={setSelectedCategory}
/>
      <DishGrid dishes={filteredDishes} />
    </>
  );
}

export default Menu;