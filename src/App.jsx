import Announcement from "./Components/Announcement";
import AssistanceRibbon from "./Components/AssistanceRibbon";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ForBusinessProducts from "./Components/ForBusinessProducts";
import Header from "./Components/Header";
import ItemsList from "./Components/ItemsList";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      <Header />
      <AssistanceRibbon />
      <Banner />
      <ItemsList />
      <Products />
      <Announcement />
      <ForBusinessProducts />
      <Footer />
    </div>
  );
}

export default App;
