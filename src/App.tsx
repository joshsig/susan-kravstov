import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Memorial } from './pages/Memorial';
import { Gallery } from './pages/Gallery';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/susan-kravstov">
        <div className="app">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Landing />
                  <Memorial />
                </>
              } />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
