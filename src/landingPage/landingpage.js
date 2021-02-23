import "./landingpage.scss";

function LandingPage(props) {

  return (
    <div className="landing-page">
      <h2>
        Test your <span>Javascript Knowledge!</span>
      </h2>
      <h3>Ready for the action</h3>
      <button onClick={()=>props.onStart("questions")}>Start</button>
    </div>
  );
}

export default LandingPage;
