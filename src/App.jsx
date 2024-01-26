import Head from "./components/Head";
import Content from "./components/Content";
import {useState} from "react";
import './App.scss'

function App() {

  const [color, setColor] = useState(false);

  return (
      <div className={color ? "container dark" : "container"}>
        <Head setColor={setColor} />
        <Content />
      </div>
  )
}

export default App
