import { useEffect, useState } from "react";
import "./App.css";
import OrbitCollection from "./components/Orbitcollection.jsx/Orbitcollection";

function App() {
  const [orbitsList, setorbitsList] = useState([]);
  const [users, setusers] = useState([]);
  const [count, setcount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://xsrr-l2ye-dpbj.f2.xano.io/api:oUvfVMO5/receive_week?start_date=2024-1-8%20"
        );

        let resp = await data.json();
        // console.log(resp[0])
        setorbitsList([0]);
        setusers(resp);
      } catch (error) {
        alert("Error fetching data. Refresh page");
      }
    };

    if (users.length === 0) {
      fetchData();
    }
    const handleScroll = (event) => {
      // console.log("M ouse wheel event detected:", event);

      setcount((prevCount) => {
        if (event.deltaY > 0 && prevCount < 8) {
          // Scroll down
          return prevCount + 1;
        } else if (event.deltaY < 0 && prevCount > 0) {
          // Scroll up
          return prevCount - 1;
        } else {
          return prevCount;
        }
      });
    };
    // Attach the event listener to the window

    window.addEventListener("wheel", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  useEffect(() => {
    // console.log(count);
    setorbitsList([count]);
  }, [count]);

  return (
    <div className="homeContainer">
      <div className="linesContainer">
        {orbitsList.length !== 0 && users.length !== 0
          ? orbitsList?.map((i) => {
              return <OrbitCollection key={i} users={users[i]} />;
            })
          : "Loading ..."}
      </div>
    </div>
  );
}

export default App;
