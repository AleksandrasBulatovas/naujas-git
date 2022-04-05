import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from "./data/data.json";
import { useState } from "react";


function App() {
    const [heroData, setHeroData] = useState(data)

    const saveHeroData = (data)=>{
      const cData= {...heroData}
      cData.members.push(data)
      setHeroData(cData)

    }

  return (
    <div className="jumbotron text-center">
      <Table
        squad={data.squadName}
        htown={data.homeTown}
        sbase={data.secretBase}
      >
        <RowList data={heroData} />
      </Table>
      <CreateForm onSave={saveHeroData}/>
      <Modal />
    </div>
  );
}

export default App;
