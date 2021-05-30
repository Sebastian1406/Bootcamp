import Descripcion from "./Descripcion";
import Mensaje from "./Mensaje";

const App = () => {
  return (
    <div className="App">

        <Mensaje color="red" message="Hola esto" />
        <Mensaje color="purpure" message="Es React js"/>
        <Mensaje color="blue" message="Att_Sebastian" />
        <Descripcion /> 

    </div>
  )
}

export default App;
