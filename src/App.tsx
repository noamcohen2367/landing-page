import { useState } from 'react';
import './App.css';
import './css/landingPage.css';
import themePictureSrc from './assets/grayandgreen.jpg';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import MainModal from './components/Modal/MainModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageTitle = "Noam's Landing Page";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div className="landing-page">
        <Header pageTitle={pageTitle} />

        <Content themePictureSrc={themePictureSrc} />

        <button
          className="landing-page--btn"
          onClick={handleOpenModal}
          type="button"
          aria-label="Open contact form"
        >
          Submit Form
        </button>

        <Footer />

        {/* Modal */}
        {isModalOpen && (
          <MainModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default App;
