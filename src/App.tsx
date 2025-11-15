import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRouter from './routes/AppRouter';
function App() {
  return (
    <>
      <Navbar />
      <div className="px-10 py-20 md:px-20 lg:px-[195px]">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
