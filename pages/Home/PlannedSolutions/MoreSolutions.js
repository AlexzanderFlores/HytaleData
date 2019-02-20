import LearnMore from "../LearnMore/LearnMore";

export default () => {
  return (
    <div
      id="more-solutions-container"
      className="center planned-solution-container"
    >
      <div id="more-solutions" className="center planned-solution">
        <div className="planned-solution-information">
          <h2>More Solutions</h2>
          <div>
            These are just a few examples of our planned solutions. You can
            expect complete staffing solutions, influencer brand deal
            management, competitor tracking &amp; comparison, and more.
          </div>
          <LearnMore text="View All Solutions" />
        </div>
      </div>
    </div>
  );
};
