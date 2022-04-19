import React from "react";

class Article extends React.Component {
  render() {
    return (
      <article>
        <section className="section1">
          <h2>Build amazing things</h2>
          <p>
            We're npm, Inc., the company behind Node package manager, the npm
            Registry, and npm CLI. We offer those to the community for free, but
            our day job is building and selling useful tools for developers like
            you.
          </p>
          <h3>Take your JavaScript development up a notch</h3>
          <p>
            Get started today for free, or step up to npm Pro to enjoy a premium
            JavaScript development experience, with features like private
            packages.
          </p>
          <div>
            <button className="btn">Sing up for free</button>
            <button className="btn">Learn about Pro</button>
          </div>
        </section>
        <section className="section2">
          <img src="./section2.png" alt="" />
          <h2>
            Bring the best of open source to you, your team, and your company
          </h2>
          <p>
            Relied upon by more than 11 million developers worldwide, npm is
            committed to making JavaScript development elegant, productive, and
            safe. The free npm Registry has become the center of JavaScript code
            sharing, and with more than one million packages, the largest
            software registry in the world. Our other tools and services take
            the Registry, and the work you do around it, to the next level.
          </p>
        </section>
        <section className="section3">
          <h2>We love open source</h2>
          <p>
            At npm, Inc., we're proud to dedicate teams of full-time employees
            to operating the npm Registry, enhancing the CLI, improving
            JavaScript security, and other projects that support and nurture a
            vibrant open source community.
          </p>
        </section>
        <section className="section4">
            <h2>Gratefully serving everyone from solo devs to the Fortune 500</h2>
        </section>
      </article>
      
    );
  }
}

export default Article;
