import reactIcon from "../assets/images/react-icon-small.png";

/* eslint-disable react/prop-types */
const Head = (props) => {
  return (
    <section className="head">
    <img className="react-icon" src={reactIcon} alt="React Icon" />
    <p className="icon-text">ReactFacts</p>
    <div className="color-container">
      <span className="color-text light-text">Light</span>
      <div 
      onClick={() => props.setColor(prevColor => !prevColor)} 
      className="btn-con">
        <div className="btn-cycle"></div>
      </div>
      <span className="color-text dark-text">Dark</span>
    </div>
  </section>
  )
}

export default Head