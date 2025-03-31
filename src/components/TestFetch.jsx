import React, { useEffect, useState } from "react";

function TestFetch() {
  const [proj, setProj] = useState([]);

  const fetchMe = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setProj(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(proj);
    }
  };

  useEffect(() => {
    //fetchMe("http://localhost:9000/api/posts");
  }, []); // ✅ Fetch on mount

  useEffect(() => {
    //console.log(proj); // ✅ Logs correctly when proj updates
  }, [proj]); // ✅ Logs new state when proj changes

  return <button>TestFetch</button>;
}

export default TestFetch;
