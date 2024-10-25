import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/" style={{fontSize: '1.2rem'}}>Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/breeds" style={{fontSize: '1.2rem'}}>Raças</Link>,
    key: "breed",
  },
  {
    label: <Link to="/about" style={{fontSize: '1.2rem'}}>Sobre</Link>,
    key: "all",
  },
];
const Navbar = () => {
  return <Menu items={items} mode="horizontal" theme="light" />;
};

export default Navbar;
