import { Outlet } from "react-router-dom";
import Navbar from "../../navbar";
import { Layout } from "antd";
import CustomFooter from "../../footer";
const { Header, Content, Footer } = Layout;
export default function Root() {
  return (
    <>
      <Header style={{ background: "#FFF" }}>
        <Navbar />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <CustomFooter />
      </Footer>
    </>
  );
}
