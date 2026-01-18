import styles from "./BookCard.module.css";
import type { IBookCardProps } from "./interfaces";

export function BookCard({ book }: IBookCardProps) {
  const { title, price, image, isHit } = book;

  return (
    <article className={styles["book-card"]}>
      <figure className={styles["book-card__media"]}>
        {isHit && (
          <span className={styles["book-card__badge"]}>
            Хіт
          </span>
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          className={styles["book-card__image"]}
        />

        <figcaption className={styles["book-card__content"]}>
          <h3 className={styles["book-card__title"]}>
            {title}
          </h3>
          <p className={styles["book-card__price"]}>
            {price} грн
          </p>
        </figcaption>
      </figure>
    </article>
  );
}
