import { useEffect, useState } from "react";
import "./OrbitCollection.css";
import Userinfo from "../Userinfo/Userinfo";

function OrbitCollection({ users }) {
  const [orbits, setorbits] = useState([]);
  const [date, setdate] = useState("");
  useEffect(() => {
    function createRandomSizedArrays(inputArray) {
      const resultArray = [];
      let i = 0;

      while (i < inputArray.length) {
        // Determine a random length for the inner array (between 1 and remaining elements)
        const remainingElements = inputArray.length - i;
        let randomLength =
          remainingElements >= 5
            ? Math.floor(Math.random() * 5) + 1
            : Math.floor(Math.random() * remainingElements) + 1;
        if (i === 0) {
          randomLength = 2;
        }
        // Slice the input array to create the inner array
        const innerArray = inputArray.slice(i, i + randomLength);
        resultArray.push(innerArray);

        // Move the index forward by the length of the inner array
        i += randomLength;
      }
      setdate(new Date(inputArray[0].created_at).toLocaleDateString());

      setorbits(resultArray);
    }
    createRandomSizedArrays(users?.array);
    // console.log(orbits);
  }, []);
  if (orbits.length === 0) {
    return <>preview is not available</>;
  }

  return (
    <div className="orbitContainer ">
      {orbits.map((item, i) => {
        return (
          <div key={i} className="users ">
            {i === 0 && <p className="date">{date}</p>}
            <div className="hr"> </div>
            {item?.length !== 0
              ? item?.map((user, i) => {
                  return (
                    <div
                      key={`${user.id}${i}`}
                      className="user scale-up-center "
                      id={`arc${i}`}
                    >
                      <img
                        className="profilepic"
                        loading="lazy"
                        src={user.img}
                        alt={user.name}
                      />
                      <div className="userinfoSection">
                        {" "}
                        <Userinfo user={user} />
                      </div>
                    </div>
                  );
                })
              : "Loading ..."}
          </div>
        );
      })}
    </div>
  );
}

export default OrbitCollection;
