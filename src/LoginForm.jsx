import React, { useState } from "react";

function LoginForm() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const myChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();

    console.log("Form Submitted");
    console.log(formData);

    // Validations
    // API Calls
    // Reset Form
  };

  return (
    <div className="container col-md-6">
      <h2 className="text-center">Login Form</h2>

      <form onSubmit={mySubmitHandler}>
        <table className="table table-striped table-bordered table-light">
          <tbody>

            <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>

              <td>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control form-control-lg"
                  placeholder="Enter Username..."
                  value={formData.username}
                  onChange={myChangeHandler}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>

              <td>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password..."
                  value={formData.password}
                  onChange={myChangeHandler}
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  <h2>Login Now</h2>
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </form>
    </div>
  );
}

export default LoginForm;