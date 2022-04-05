import { useState } from "react";

const CreateForm = (props) => {

  const [hero, setHero] = useState({
    name:'',
    age:'',
    secretIdentity:'',
    power:''
  })

  const handleChange = (e)=>{
    setHero({
      ...hero,
      [e.target.name]:e.target.value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault()
    props.onSave(hero)
  }


  return (
    <div className="modal-body m-auto col-6">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name" className="col-form-label">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={hero.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="col-form-label">
            Age
          </label>
          <input
            className="form-control"
            type="number"
            name="age"
            placeholder="Age"
            value={hero.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="secretID" className="col-form-label">
            Secret Identity
          </label>
          <input
            className="form-control"
            type="text"
            name="secretIdentity"
            placeholder="Secret Identity"
            value={hero.secretIdentity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="power" className="col-form-label">
            Power
          </label>
          <input
            className="form-control"
            type="text"
            name="power"
            placeholder="Power"
            value={hero.power}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
