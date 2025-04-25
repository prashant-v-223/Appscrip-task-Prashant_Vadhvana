"use client"

import Image from "next/image";
import styles from "../../page.module.css";

export default function ProductCard({ product, index }) {
  return (
    <div className={styles.Product_card}>
      <div className={styles.Product_image_container}>
        <Image
          src={product.image}
          alt={product.title}
          title={product.title}
          fill
          className={styles.Product_image}
          priority={index < 4}
        />
      </div>
      <h3 className={styles.Product_title}>{product.title}</h3>
      <p className={styles.Product_dic}>
        <span>Sign in or Create an account to see pricing</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          width={20}
          title="Add to Wishlist"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.8 7.3a5.5 5.5 0 00-9.8-3.8 5.5 5.5 0 00-9.8 3.8c0 3.3 2.4 5.8 6.4 9.2a36.2 36.2 0 003.4 2.6 36.2 36.2 0 003.4-2.6c4-3.4 6.4-5.9 6.4-9.2z"
          />
        </svg>
      </p>
    </div>

  );
}
