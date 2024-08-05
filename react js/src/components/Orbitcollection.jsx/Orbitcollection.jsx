import { useEffect, useState } from "react";
import "./OrbitCollection.css";
import Userinfo from "../Userinfo/Userinfo";

function OrbitCollection({ users }) {
  // console.log(users.array)
  // const [users, setusers] = useState(users || [])
  const [orbits, setorbits] = useState([]);
  useEffect(() => {
    function createRandomSizedArrays(inputArray) {
      const resultArray = [];
      let i = 0;

      while (i < inputArray.length) {
        // Determine a random length for the inner array (between 1 and remaining elements)
        const remainingElements = inputArray.length - i;
        const randomLength =
          remainingElements >= 5
            ? Math.floor(Math.random() * 5) + 1
            : Math.floor(Math.random() * remainingElements) + 1;

        // Slice the input array to create the inner array
        const innerArray = inputArray.slice(i, i + randomLength);
        resultArray.push(innerArray);

        // Move the index forward by the length of the inner array
        i += randomLength;
      }

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
            <hr />
            {item?.length !== 0
              ? item?.map((user, i) => {
                  // console.log(user);
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
