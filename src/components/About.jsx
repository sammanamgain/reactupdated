import React, { useState } from "react";

export default function About() {
  const [give, changeTheme] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [name, changename] = useState("changetowhite");

  let Theme = () => {
    if (give.color == "white") {
      changeTheme({
        color: "black",
        backgroundColor: "white",
      });

      changename("changetoblack");
    } else {
      changeTheme({
        color: "white",
        backgroundColor: "black",
      });
      changename("changetoWhite");
    }
  };
  return (
    <>
      <div style={give}>
        <div className="accordion" id="accordionExample" style={give}>
          <div className="accordion-item" style={give}>
            <h2 className="accordion-header" style={give}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={give}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={give}
            >
              <div className="accordion-body style={give}">
                <strong>This is the first item`&apos;`s accordion body.</strong>{" "}
                It is shown by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables.
                It`&apos;`s also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={give}>
            <h2 className="accordion-header " style={give}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={give}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  This is the second item`&apos;`s accordion body.
                </strong>{" "}
                It is hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables.
                It`&apos;`s also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={give}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={give}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third items accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. Its
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-secondary" onClick={Theme} style={give}>
        {name}
      </button>
    </>
  );
}
