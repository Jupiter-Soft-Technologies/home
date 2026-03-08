import { Helmet } from "react-helmet-async";
import Process from "../components/Process";

export default function ProcessPage() {
  return (
    <main>
      <Helmet>
        <title>Our Process | Jupiter Soft Technologies</title>
        <meta
          name="description"
          content="Discover the execution framework used by Jupiter Soft Technologies to build scalable digital solutions."
        />
      </Helmet>

      <section className="pt-28">
        <Process />
      </section>
    </main>
  );
}