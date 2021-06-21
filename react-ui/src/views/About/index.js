import React from "react";

export default function About() {
  // const fetchData = useCallback(() => {
  //   fetch("/api/projects/all")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("response OK!");
  //       console.log("response data", data);
  //       setContacts(data);
  //     })
  //     .catch((e) => {
  //       console.log("response BAD!");
  //       setContacts([]);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return <h2>About Page</h2>;
}
