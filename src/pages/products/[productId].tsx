// Book detail page

import React, { useEffect } from "react";
import BannerCart from "components/banner/banner-featured";
import { BookstoreContext } from "hooks/bookstore-context";
import { Book } from "interfaces";
import Link from "next/link";
import BannerBook from "../../components/banner/banner-book";
import { useRouter } from "next/router";
import { getAllBooksPaths, getBook } from "../../utils";
import { GetStaticPaths, GetStaticProps } from "next";

const BookPage = ({ book }: { book: Book }) => {
  return (
    <div>
      <BannerBook book={book} />
      <section className="section-a">
        <div className="container-xxl">
          <h2 className="section-title">Details</h2>
          <div className="section-desc">
            {book.synopsis.map((synopsisText, index) => (
              <p key={index}>{synopsisText}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BookPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllBooksPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = await getBook(params?.productId as string);

  return {
    props: {
      book,
    },
  };
};
