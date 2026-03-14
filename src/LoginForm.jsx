import React, { useState } from "react";

function AddBook() {

  const [formData, setFormData] = useState({
    bookId: "",
    bookName: "",
    author: "",
    price: "",
    pub: ""
  });

  const [errors, setErrors] = useState({});

  const myChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateBookForm = () => {

    let tempErrors = {};
    let isValid = true;

    if (!formData.bookId) {
      tempErrors.bookId = "BookId is Required";
      isValid = false;
    } else if (formData.bookId.length < 5) {
      tempErrors.bookId = "BookId minimum length is 5";
      isValid = false;
    } else if (formData.bookId.length > 7) {
      tempErrors.bookId = "BookId maximum length is 7";
      isValid = false;
    }

    if (!formData.bookName) {
      tempErrors.bookName = "BookName is Required";
      isValid = false;
    }

    if (!formData.author) {
      tempErrors.author = "Author is Required";
      isValid = false;
    }

    if (!formData.price) {
      tempErrors.price = "Price is Required";
      isValid = false;
    }

    if (!formData.pub) {
      tempErrors.pub = "Publication is Required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();

    if (validateBookForm()) {

      console.log("Before Reset:", formData);

      setFormData({
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
    <form onSubmit={mySubmitHandler} className="space-y-4">

      <div>
        <label className="block font-medium">Book Id</label>
        <input
          type="text"
          name="bookId"
          value={formData.bookId}
          onChange={myChangeHandler}
          className={`w-full border p-2 rounded ${
            errors.bookId ? "border-red-500" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.bookId}</p>
      </div>

      <div>
        <label className="block font-medium">Book Name</label>
        <input
          type="text"
          name="bookName"
          value={formData.bookName}
          onChange={myChangeHandler}
          className={`w-full border p-2 rounded ${
            errors.bookName ? "border-red-500" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.bookName}</p>
      </div>

      <div>
        <label className="block font-medium">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={myChangeHandler}
          className={`w-full border p-2 rounded ${
            errors.author ? "border-red-500" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.author}</p>
      </div>

      <div>
        <label className="block font-medium">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={myChangeHandler}
          className={`w-full border p-2 rounded ${
            errors.price ? "border-red-500" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.price}</p>
      </div>

      <div>
        <label className="block font-medium">Publication</label>
        <input
          type="text"
          name="pub"
          value={formData.pub}
          onChange={myChangeHandler}
          className={`w-full border p-2 rounded ${
            errors.pub ? "border-red-500" : "border-gray-300"
          }`}
        />
        <p className="text-red-500 text-sm">{errors.pub}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Book
      </button>

    </form>
  );
}

export default AddBook;