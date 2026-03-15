import React, { useEffect } from "react";

function Home(props) {

  useEffect(() => {
    console.log("Home - DidMount - ", props);
  }, []);

  return (
    <div>

      <h2 className="text-xl font-semibold mb-2">
        This is Home page
      </h2>

      <h2>This is Home page</h2>
      <h2>This is Home page</h2>
      <h2>This is Home page</h2>

    </div>
  );
}

export default Home;