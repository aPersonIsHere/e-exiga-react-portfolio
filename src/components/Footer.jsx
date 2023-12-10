// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Footer from './UI/Footer';

export default function Footr() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Footer className="row"
      links={[
        <Link key={1} className="nav-link text-light col">
            <a href="https://github.com/aPersonIsHere"><img src="./github-mark.svg" width="40" height="40"></img></a>
        </Link>,
        <Link key={2} className="nav-link text-light col">
            <a href="https://www.linkedin.com/in/emmanuel-exiga/"><img src="./icons8-linkedin-50.png" width="40" height="40"></img></a>
        </Link>,
        <Link key={3} className="nav-link text-light col">
            <a href="https://scratch.mit.edu/users/Helper007/"><img src="./scratch-seeklogo.com.svg" width="40" height="40"></img></a>
        </Link>
      ]}
    />
  );
}
