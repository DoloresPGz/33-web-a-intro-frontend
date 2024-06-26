export default function NavBar() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#" className="icon solid fa-angle-down">
            Layouts
          </a>
          <ul>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
            <li>
              <a href="#">Submenu</a>
              <ul>
                <li>
                  <a href="#">Option One</a>
                </li>
                <li>
                  <a href="#">Option Two</a>
                </li>
                <li>
                  <a href="#">Option Three</a>
                </li>
                <li>
                  <a href="#">Option Four</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="button">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}
