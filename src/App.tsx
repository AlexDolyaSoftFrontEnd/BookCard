import styles from "./App.module.css";
import booksData from "./books.json";
import { BookCard } from "./components/BookCard/BookCard";
import type { IBook } from "./components/BookCard/interfaces";

export function App() {
  const books = booksData as IBook[];

  return (
    <main className={styles.app}>
      <section className={styles.catalog}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  );
}
