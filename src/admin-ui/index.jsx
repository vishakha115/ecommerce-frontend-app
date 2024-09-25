import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

export const backend_url = "https://ecommerce-backend-app-sigma.vercel.app";
export const currency = "₹";

function App() {
  return (
    <div>
      <Navbar />
      <Admin />
      <Footer />
    </div>
  );
}

export default App;
