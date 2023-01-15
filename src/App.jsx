import Awards from "./components/awards";
import Benefits from "./components/benefits";
import Companies from "./components/companies";
import Features from "./components/features";
import Hero from "./components/hero";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Benefits />
        <Awards />
        <Features />
        <Companies />
      </Layout>
    </div>
  );
}

export default App;
