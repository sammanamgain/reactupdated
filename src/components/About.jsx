// import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  // const [give, changeTheme] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  // const [name, changename] = useState("changetowhite");

  // let Theme = () => {
  //   if (give.color == "white") {
  //     changeTheme({
  //       color: "black",
  //       backgroundColor: "white",
  //     });

  //     changename("changetoblack");
  //   } else {
  //     changeTheme({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     changename("changetoWhite");
  //   }
  // };
  return (
    <>
      <div className={` text-bg-${props.mode} p-3 bg-${props.mode}`}>
        <div
          className={`accordion text-bg-${props.mode} p-3 bg-${props.mode}`}
          id="accordionExample "
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className={` text-bg-${props.mode} p-3 bg-${props.mode}`}>
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
          <div className="accordion-item">
            <h2 className="accordion-header ">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion text-bg-${props.mode} p-3 bg-${props.mode}`}
              >
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
          <div
           
            className={`accordion-item accordion text-bg-${props.mode} p-3 bg-${props.mode}`}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion text-bg-${props.mode} p-3 bg-${props.mode}`}
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion text-bg-${props.mode} p-3 bg-${props.mode}`}
              >
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
      <button type="button" className="btn btn-secondary">
        {}
      </button>
    </>
  );
}



About.propTypes = {

  mode: PropTypes.string,
  changetheme: PropTypes.func,
};
