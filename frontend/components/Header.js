import Nav from './Nav';

const Header = _ => (
  <div>
    <div className="bar">
      <a href="">Something</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
