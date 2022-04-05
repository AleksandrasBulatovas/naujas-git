import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from "./data/data.json";


function App() {

  return (
    <div className="jumbotron text-center">
      <Table
        squad={data.squadName}
        htown={data.homeTown}
        sbase={data.secretBase}
      >
        <RowList />
      </Table>
      <CreateForm />
      <Modal />
    </div>
  );
}

export default App;
