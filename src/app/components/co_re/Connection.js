import React from "react";

const Connection = () => {
  return (
    <form className="justify-content-center col-md-5">
      <div className="form-group">
        <label htmlFor="inlineFormInput">Nom d'Utilisateur</label>
        <input
          type="text"
          className="form-control"
          id="inlineFormInput"
          aria-describedby="emailHelp"
          placeholder=" E-Mail"
          onChange={(e) => e.target.value}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Valider
      </button>
    </form>
  );
};
export default Connection;
