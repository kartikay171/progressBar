import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const totalInputs = 6;

const Forms = () => {
  const [count, setCount] = useState(0);
  const [privateValue, setRadio1] = useState();
  const [smart, setRadio2] = useState();
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  function handleChange(event) {
    setInput((prevInput) => {
      if (prevInput.length < 2 && event.target.value.length >= 2) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      } else if (prevInput.length > 2 && event.target.value.length <= 2) {
        setCount((prevCount) => prevCount - 100 / totalInputs);
      }
      return event.target.value;
    });
  }

  function handleChange1(event) {
    setInput1((prevInput) => {
      if (prevInput.length < 2 && event.target.value.length >= 2) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      } else if (prevInput.length > 2 && event.target.value.length <= 2) {
        setCount((prevCount) => prevCount - 100 / totalInputs);
      }
      return event.target.value;
    });
  }

  function handleChange2(event) {
    setInput2((prevInput) => {
      if (!prevInput && event.target.value) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      } else if (prevInput && !event.target.value) {
        setCount((prevCount) => prevCount - 100 / totalInputs);
      }
      return event.target.value;
    });
  }

  function handleChange3(event) {
    setInput3((prevInput) => {
      if (!prevInput && event.target.value) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      } else if (prevInput && !event.target.value) {
        setCount((prevCount) => prevCount - 100 / totalInputs);
      }
      return event.target.value;
    });
  }

  function handleRadio1(newValue) {
    setRadio1((prevRadioValue) => {
      if (!prevRadioValue) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      }

      return newValue;
    });
  }

  function handleRadio2(newValue) {
    setRadio2((prevRadioValue) => {
      if (!prevRadioValue) {
        setCount((prevCount) => prevCount + 100 / totalInputs);
      }

      return newValue;
    });
  }

  return (
    <>
      <div class="card" style={{ width: "40rem" }}>
        <div class="card-body">
          {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}

          <ProgressBar striped variant="danger" now={count} />
          <h3 className="font-weight-bold text-center" style={{ color: "red" }}>
            Let's get started!
          </h3>
          <p className="text-center">
            Add Your Details (As Per your registered records)
          </p>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label fw-bold">
                Name
              </label>
              <input
                type="email"
                className="form-control formColgty"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={input}
                onChange={handleChange}
              />
            </div>
            <label for="exampleInputEmail1" className="form-label fw-bold">
              Nature Of Driving License
            </label>
            <div className="row">
              <div className="col">
                <div class="form-check formSetting formColgty">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="privateValue"
                    onClick={() => {
                      handleRadio1("privateValue");
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Private
                  </label>
                </div>
              </div>
              <div className="col">
                <div class="form-check formSetting formColgty">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Commercial"
                    onClick={() => {
                      handleRadio1("Commercial");
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Commercial
                  </label>
                </div>
              </div>
            </div>
            <label for="exampleInputEmail1" className="form-label fw-bold">
              Types Of Previous Driving License
            </label>
            <div className="row">
              <div className="col">
                <div class="form-check formSetting formColgty">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value="paper"
                    onClick={() => {
                      handleRadio2("paper");
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault3">
                    Paper Driving License
                  </label>
                </div>
              </div>
              <div className="col">
                <div class="form-check formSetting formColgty">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    value="smart"
                    onClick={() => {
                      handleRadio2("smart");
                    }}
                  />
                  <label class="form-check-label" for="flexRadioDefault4">
                    Smart Driving License
                  </label>
                </div>
              </div>
            </div>
          </form>

          <div className="mb-3" style={{ marginTop: "55px" }}>
            <label for="exampleInputEmail1" className="form-label fw-bold">
              Enter Place name Where Driving License was issued
            </label>
            <input
              type="email"
              className="form-control formColgty"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Place Name"
              value={input1}
              onChange={handleChange1}
            />
          </div>
          <label for="exampleInputEmail1" className="form-label fw-bold">
            Issued year of License
          </label>

          <select
            class="form-select formColgty"
            aria-label="Default select example"
            onChange={handleChange2}
            value={input2}
          >
            <option value="" selected>
              Choose issued year of License
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label
            for="exampleInputEmail1"
            className="form-label fw-bold labelMargin"
          >
            Types of Pervious Driving License
          </label>

          <select
            class="form-select formColgty"
            aria-label="Default select example"
            onChange={handleChange3}
            value={input3}
          >
            <option value="" selected>
              Choose expired year of License
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="row" style={{ marginTop: "25px" }}>
            <div class="col-md-7">
              <Button variant="contained" color="error">
                Back
              </Button>
            </div>
            <div class="col-md-3">
              <Button variant="outlined" color="error">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
