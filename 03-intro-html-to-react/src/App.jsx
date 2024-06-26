import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./main.css";
import NavBar from "./components/NavBar";


// Utilizando: https://transform.tools/html-to-jsx
function App() {
  return (
    <div id="page-wrapper">
      {/* Header */}
      <header id="header" className="alt">
        <h1>
          <a href="index.html">Alpha</a> by HTML5 UP
        </h1>
        <NavBar />
      </header>
      {/* Banner */}
      <section id="banner">
        <h2>Alpha</h2>
        <p>Another fine responsive site template freebie by HTML5 UP.</p>
        <ul className="actions special">
          <li>
            <a href="#" className="button primary">
              Sign Up
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </section>
      {/* Main */}
      <section id="main" className="container">
        <section className="box special">
          <header className="major">
            <h2>
              Introducing the ultimate mobile app
              <br />
              for doing stuff with your phone
            </h2>
            <p>
              Blandit varius ut praesent nascetur eu penatibus nisi risus
              faucibus nunc ornare
              <br />
              adipiscing nunc adipiscing. Condimentum turpis massa.
            </p>
          </header>
          <span className="image featured">
            <img src="images/pic01.jpg" alt="" />
          </span>
        </section>
        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-bolt accent2" />
              <h3>Magna etiam</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent3" />
              <h3>Ipsum dolor</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-cloud accent4" />
              <h3>Sed feugiat</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-lock accent5" />
              <h3>Enim phasellus</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
            </section>
          </div>
        </section>
        <div className="row">
          <div className="col-6 col-12-narrower">
            <section className="box special">
              <span className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </span>
              <h3>Sed lorem adipiscing</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button alt">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-6 col-12-narrower">
            <section className="box special">
              <span className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </span>
              <h3>Accumsan integer</h3>
              <p>
                Integer volutpat ante et accumsan commophasellus sed aliquam
                feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan
                dolore magna aliquam veroeros.
              </p>
              <ul className="actions special">
                <li>
                  <a href="#" className="button alt">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="cta">
        <h2>Sign up for beta access</h2>
        <p>
          Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus
          nunc.
        </p>
        <form>
          <div className="row gtr-50 gtr-uniform">
            <div className="col-8 col-12-mobilep">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="col-4 col-12-mobilep">
              <input type="submit" defaultValue="Sign Up" className="fit" />
            </div>
          </div>
        </form>
      </section>
      {/* Footer */}
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-google-plus">
              <span className="label">Google+</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>© Untitled. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
