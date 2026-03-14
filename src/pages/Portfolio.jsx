import { Helmet } from "react-helmet-async";
import DemoWebsites from "../components/DemoWebsites";

export default function Portfolio() {
  return (
    <main>

      <Helmet>
        <title>Portfolio | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Explore our portfolio of high-conversion websites built for different industries."
        />
      </Helmet>

      <section className="pt-24">
        <DemoWebsites />
      </section>

    </main>
  );
}