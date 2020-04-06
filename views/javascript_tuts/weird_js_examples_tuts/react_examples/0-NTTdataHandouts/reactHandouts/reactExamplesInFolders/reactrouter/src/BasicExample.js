import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/galleries">Galleries</Link>
        </li>
        <li>
          <Link to="/systems">Systems</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/galleries" component={Galleries} />
      <Route path="/systems" component={Systems} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>The National Museum of Computing</p>
    <a href='http://www.tnmoc.org'>Visit the museum</a>
  </div>
);

const People = () => (
  <div>
    <h2>People</h2>
  </div>
);

const Galleries = () => (
  <div>
    <h2>Galleries</h2>
      <ul>
        <li><a href="http://www.tnmoc.org/explore/colossus-gallery">Colossus Gallery</a></li>
        <li><a href="http://www.tnmoc.org/explore/tunny-gallery">Tunny Gallery</a></li>
        <li><a href="http://www.tnmoc.org/explore/turing-welchman-bombe">Turing-Welchman Bombe</a></li>
        <li><a href="http://www.tnmoc.org/explore/large-systems">First Generation: WITCH, EDSAC</a></li>
        <li><a href="http://www.tnmoc.org/explore/mainframes">Mainframes, big systems</a></li>
        <li><a href="http://www.tnmoc.org/explore/air-traffic-control">Air Traffic Control</a></li>
        <li><a href="http://www.tnmoc.org/explore/pc-gallery">PC Gallery</a></li>
        <li><a href="http://www.tnmoc.org/explore/computing-education">The Classroom</a></li>
        <li><a href="http://www.tnmoc.org/explore/software-gallery-new">Software Gallery</a></li>
        <li><a href="http://www.tnmoc.org/explore/npl-technology-internet-gallery">NPL Internet Gallery</a></li>
        <li><a href="http://www.tnmoc.org/explore/computers" title="Slide rules and calculators">Before Computers</a></li>
        <li><a href="http://www.tnmoc.org/explore/archive">Archive</a></li>
      </ul>
  </div>
);

const Systems = ({ match }) => (
  <div>
    <h2>Systems</h2>
    <ul>
      <li>
        <Link to={`${match.url}/witch`}>Harwell Dekatron - The Witch</Link>
      </li>
      <li>
        <Link to={`${match.url}/colossus`}>Colossus</Link>
      </li>
      <li>
        <Link to={`${match.url}/edsac`}>EDSAC</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:systemId`} component={System} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a system</h3>}
    />
  </div>
);

const System = ({ match }) => {
  let myString;
  if (match.params.systemId === 'colossus') {
    myString = "Tony Sale's Colossus";
  }
  if (match.params.systemId === 'edsac') {
    myString = "Andrew Herbert's EDSAC";
  }
  if (match.params.systemId === 'witch') {
    myString = "Kevin Murrell's Harwell Dekatron";
  }
  return (
  <div>
    <h3>{myString}</h3>
  </div>
);
}

export default BasicExample;