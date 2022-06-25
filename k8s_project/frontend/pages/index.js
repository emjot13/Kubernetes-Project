import { useState } from "react";
import axios from "axios";

const main = () => {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");
  const [answer, setAnswer] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/secret", {
        key,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/secret/get", {
        key,
      });
      console.log(response);
      setAnswer(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={sendMessage}>
        <h1> Send secret message </h1>
        <div className="form-group">
          <label>Secret key</label>
          <input
            type="password"
            onChange={(e) => setKey(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">Send</button>
      </form>

      <form onSubmit={getMessage}>
        <h1> Get secret message</h1>
        <div className="form-group">
          <label>Secret key</label>
          <input
            type="password"
            onChange={(e) => setKey(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">Get message</button>
      </form>
      {answer != "" && (
        <div className="d-flex justify-content-center p-50">
            <h1> {answer} </h1>
        </div>
      )}
    </div>
  );
};

export default main;
