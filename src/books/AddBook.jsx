import React, { useState } from "react";
import MyTextInput from "../mycomponents/MyTextInput";

const AddBook = () => {

  const [book, setBook] = useState({
    bookId: "",
    bookName: "",
    author: "",
    price: "",
    pub: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const validateBookForm = () => {

    const { bookId, bookName, author, price, pub } = book;

    let tempErrors = {};
    let isValid = true;

    if (!bookId) {
      tempErrors.bookId = "BookId is required";
      isValid = false;
    } else if (bookId.length < 5) {
      tempErrors.bookId = "BookId min length is 5";
      isValid = false;
    } else if (bookId.length > 7) {
      tempErrors.bookId = "BookId max length is 7";
      isValid = false;
    }

    if (!bookName) {
      tempErrors.bookName = "Book Name is required";
      isValid = false;
    }

    if (!author) {
      tempErrors.author = "Author is required";
      isValid = false;
    }

    if (!price) {
      tempErrors.price = "Price is required";
      isValid = false;
    }

    if (!pub) {
      tempErrors.pub = "Publication is required";
      isValid = false;
    }

    setErrors(tempErrors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateBookForm()) {

      console.log("Submitted Data", book);

      setBook({
        bookId: "",
        bookName: "",
        author: "",
        price: "",
        pub: ""
      });

      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto">

      <h2 className="text-2xl font-bold text-center mb-6">
        Add Book Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <MyTextInput
          name="bookId"
          label="Book Id"
          value={book.bookId}
          onChange={handleChange}
          error={errors.bookId}
        />

        <MyTextInput
          name="bookName"
          label="Book Name"
          value={book.bookName}
          onChange={handleChange}
          error={errors.bookName}
        />

        <MyTextInput
          name="author"
          label="Author"
          value={book.author}
          onChange={handleChange}
          error={errors.author}
        />

        <MyTextInput
          name="price"
          label="Price"
          value={book.price}
          onChange={handleChange}
          error={errors.price}
        />

        <MyTextInput
          name="pub"
          label="Publication"
          value={book.pub}
          onChange={handleChange}
          error={errors.pub}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Book
        </button>

      </form>

    </div>
  );
};

export default AddBook;