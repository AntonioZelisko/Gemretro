import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../lib/actions";
import { v4 as uuidv4 } from 'uuid';

const Registration = () => {
  const [state, setState] = useState({
  id:uuidv4(),
  username:'',
  mail:'',
  password:''
})

  console.log(state.id);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    console.log(event.target.value);
    const varName = event.target.name;
    const varValue = event.target.value;
    setState(Object.assign({}, state, { [varName]: varValue }));
  };

  return (
    <form className='col-md-5 justify-content-center '>
      <div className="form-group">
        <label htmlFor="inlineFormInput">Nom d'Utilisateur</label>
        <input
        name=""
          type="text"
          className="form-control"
          id="inlineFormInput"
          aria-describedby="emailHelp"
          placeholder="Nom d'Utilisateur"
          onChange={(event)=>changeHandler(event)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Adresse E-mail</label>
        <input
        name=""
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="E-Mail"
          onChange={(event)=>changeHandler(event)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
        <input
        name=""
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Mot de Passe"
          onChange={(event)=>changeHandler(event)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirmer Mot de Passe</label>
        <input
        name=""
          type="password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Confirmer Mot de Passe"
          onChange={(event)=>changeHandler(event)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Je ne suis pas un robot.
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          dispatch(addUser(state));
        }}
      >
        Valider
      </button>
    </form>
  );
};

export default Registration;
