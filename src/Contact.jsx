import React, { useEffect } from "react";

function Contact(props) {

  useEffect(() => {
    console.log("Contact - DidMount - ", props);
  }, []);

  return (
    <div>

      <h2 className="text-xl font-semibold mb-2">
        This is Contact page
      </h2>

      <h2>This is Contact page</h2>
      <h2>This is Contact page</h2>
      <h2>This is Contact page</h2>

    </div>
  );
}

export default Contact;