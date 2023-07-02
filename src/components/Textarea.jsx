import  { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const dosomething = () => {
      //console.log(" the button which is used to convert uppercase is used");
     setText(text.toUpperCase());
    };
     const dosomethingmore = () => {
       //console.log(" the button which is used to convert uppercase is used");
       setText(text.toLowerCase());
     };
    const [text, setText] = useState("random text");
    // handleonchanged was used to add the input to the value 
  const handleonchanged = (event) => {
   setText(event.target.value)
  };
    return (
      <>
        {console.log("textarea called")}
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {props.heading}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={text}
              onChange={handleonchanged}
            ></textarea>

            <button
              type="button"
              className="btn btn-success m-4 "
              onClick={dosomething}
            >
              convert to uppercase
            </button>
            <button
              type="button"
              className="btn btn-success m-2"
                        onClick={dosomethingmore}
                        
            >
              convert to Lowercase
            </button>
          </div>
        </div>
        <div className="container">
          <h1> Your text summary</h1>
          <p>
            {" "}
            NO of words: {text.split(" ").length} , NO of characters:{" "}
            {text.split("").length}
          </p>
          <h3>
            {" "}
            Average time to read total words in seconds:{" "}
            {0.00444444444 * 60 * text.split("").length}
                </h3>
                
                <p> Preview: {text} </p>
        </div>
      </>
    );
}

Textarea.propTypes = {
  heading: PropTypes.string,
};
