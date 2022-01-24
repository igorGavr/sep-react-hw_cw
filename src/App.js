import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

function App() {
    const [car, setCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState({});

  return (
    <>
      <Form update={setCar} carForUpdate={carForUpdate}/>
      <Cars trigger={car} update={setCar} setCarForUpdate={setCarForUpdate}/>
    </>
  );
}

export default App;
