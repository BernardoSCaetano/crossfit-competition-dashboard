import "./App.css";

// Components
import Categories from "./components/Categories";
import CompetitionOverview from "./components/CompetitionOverview";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovementStandards from "./components/MovementStandards";
import Registration from "./components/Registration";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <CompetitionOverview />
      <Categories />
      <MovementStandards />
      <Registration />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
