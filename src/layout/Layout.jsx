import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
