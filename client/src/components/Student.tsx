import axios from "axios";
import { useState } from "react";

const Student = (): JSX.Element => {
  const [state, setState] = useState({
    student: {
      name: "",
      email: "",
    },
  });
  const getData = async () => {
    try {
      const res = await axios.get("/api/initial");
      if (!res) {
        console.log("error while fetching data");
        return;
      }
      setState(res.data);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <div>
      <div>{state.student.name}</div>
      <div>
        <button onClick={getData}>click to view Student Data</button>
      </div>
    </div>
  );
};

export default Student;
