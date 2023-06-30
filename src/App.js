import { Categories } from "./component/Categories";
import Delivery from "./component/Delivery";
import Featured from "./component/Featured";
import { Footer } from "./component/Footer";
import { Meals } from "./component/Meals";
import { NewsLetter } from "./component/NewsLetter";
import TopNav from "./component/TopNav";
import TopPicks from "./component/TopPicks";



function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meals />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
