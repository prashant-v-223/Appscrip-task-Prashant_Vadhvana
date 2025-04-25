"use client";

import Image from "next/image";
import FilterSidebar from "./components/Produact/FilterSidebar";
import ProductCard from "./components/Produact/ProductCard";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <div className={styles.maintitalcontainer}>
          <h1 className={styles.maintital}>Discover our products</h1>
          <h2 className={styles.mainsubtital}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </h2>
        </div>
        <div className={styles.filters_heading}>
          <span onClick={toggleFilter}>
            <span className={styles.total_items}>
              <strong>20 ITEMS</strong>
            </span>
            <span className={styles.Filltertogel}>
              <Image
                src={"/arrow-left.png"}
                alt="arrow"
                title="arrow"
                height={16}
                width={16}
                className={styles[isFilterOpen ? "rotedRight" : "rotedLeft"]}
                priority
              />

              {isFilterOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
          </span>
          <span>
            <div className={styles.flex}>
              <span className="recomded">Recommended</span>
            </div>
          </span>
        </div>
      </div>
      <div className={`${styles.container} ${styles.flex}`}>
        {isFilterOpen && (
          <div
            className={` ${styles.said_fillter} filter-menu ${
              isFilterOpen ? "show" : ""
            }`}
          >
            <FilterSidebar toggleFilter={toggleFilter} />
          </div>
        )}
        <div
          className={styles[isFilterOpen ? "Product_grid1" : "Product_grid"]}
        >
          {products.map((product, index) => (
            <ProductCard key={index} index={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
