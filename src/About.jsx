import React, { useEffect } from "react";

function About(props) {

  useEffect(() => {
    console.log("About - DidMount - ", props);
  }, []);

  return (
    <div>

      <h2 className="text-xl font-semibold mb-2">
        This is About page
      </h2>

      <h2>This is About page</h2>
      <h2>This is About page</h2>
      <h2>This is About page</h2>

    </div>
  );
}

export default About;