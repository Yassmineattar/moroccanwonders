import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import determineDestination from "../destinations/determineDestination"; 
import "./Form.css";

function Form() {
  const [answers, setAnswers] = useState({
    duration: "",
    soundtrack: "",
    spice: "",
    travelTime: "",
    artifact: "",
    spiritAnimal: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the determineDestination function to get the appropriate destination
    const destination = determineDestination(answers);

    if (destination) {
      // Redirect to the DestinationPage with the selected destination
      navigate(`/destination/${destination}`, { state: { destination, answers } });
    } else {
      alert("No destination matches your preferences.");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-row">
        {/* Trip Duration */}
        <div className="form-section">
          <h3 className="form-question">What’s your ideal trip duration?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="duration"
                value="short"
                onChange={handleChange}
              />{" "}
              1 to 3 days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="medium"
                onChange={handleChange}
              />{" "}
              1 to 7 days
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="long"
                onChange={handleChange}
              />{" "}
              More than a week
            </label>
          </div>
        </div>

        {/* Travel Soundtrack */}
        <div className="form-section">
          <h3 className="form-question">What’s your dream travel soundtrack?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="soundtrack"
                value="bustling"
                onChange={handleChange}
              />{" "}
              A symphony of bustling streets
            </label>
            <label>
              <input
                type="radio"
                name="soundtrack"
                value="drums"
                onChange={handleChange}
              />{" "}
              Rhythmic drums in the desert
            </label>
            <label>
              <input
                type="radio"
                name="soundtrack"
                value="waves"
                onChange={handleChange}
              />{" "}
              The sound of waves crashing on the shore
            </label>
            <label>
              <input
                type="radio"
                name="soundtrack"
                value="silence"
                onChange={handleChange}
              />{" "}
              The serene silence of the mountains
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        {/* Moroccan Spice */}
        <div className="form-section">
          <h3 className="form-question">If you were a Moroccan spice, which one would you be?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="spice"
                value="cinnamon"
                onChange={handleChange}
              />{" "}
              Cinnamon: Warm & comforting
            </label>
            <label>
              <input
                type="radio"
                name="spice"
                value="safran"
                onChange={handleChange}
              />{" "}
              Safran: Rare & luxurious
            </label>
            <label>
              <input
                type="radio"
                name="spice"
                value="paprika"
                onChange={handleChange}
              />{" "}
              Paprika: Bold & full of energy
            </label>
            <label>
              <input
                type="radio"
                name="spice"
                value="mint"
                onChange={handleChange}
              />{" "}
              Mint: Refreshing & cool
            </label>
          </div>
        </div>

        {/* Time Travel */}
        <div className="form-section">
          <h3 className="form-question">If you could time travel, where would you go?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="travelTime"
                value="ancient"
                onChange={handleChange}
              />{" "}
              To ancient Morocco
            </label>
            <label>
              <input
                type="radio"
                name="travelTime"
                value="modern"
                onChange={handleChange}
              />{" "}
              To modern Morocco
            </label>
            <label>
              <input
                type="radio"
                name="travelTime"
                value="future"
                onChange={handleChange}
              />{" "}
              To the future
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        {/* Artifact */}
        <div className="form-section">
          <h3 className="form-question">Which Moroccan artifact would you take home as a souvenir?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="artifact"
                value="handmade-rug"
                onChange={handleChange}
              />{" "}
              A handmade Berber rug
            </label>
            <label>
              <input
                type="radio"
                name="artifact"
                value="ceramic-plate"
                onChange={handleChange}
              />{" "}
              A traditional ceramic plate
            </label>
          </div>
        </div>

        {/* Spirit Animal */}
        <div className="form-section">
          <h3 className="form-question">What’s your spirit animal on a trip?</h3>
          <div className="form-options">
            <label>
              <input
                type="radio"
                name="spiritAnimal"
                value="lion"
                onChange={handleChange}
              />{" "}
              A lion
            </label>
            <label>
              <input
                type="radio"
                name="spiritAnimal"
                value="camel"
                onChange={handleChange}
              />{" "}
              A camel
            </label>
            <label>
              <input
                type="radio"
                name="spiritAnimal"
                value="dolphin"
                onChange={handleChange}
              />{" "}
              A dolphin
            </label>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
