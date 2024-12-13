import React, { useState } from 'react';
import CentralGov from './Components/CentralGov';
import StateGov from './Components/StateGov';
import DistrictGovernmentPage from './Components/DistrictGov';
import Home from './Components/Home'; // Update component name to uppercase
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HealthCareSectorPage from './Components/HealthCare';
import MLAPage from './Components/MLA';
import RoadTransportSectorPage from './Components/Roads&Transport'; // Rename the file accordingly
import ContractorPage from './Components/Contractor';
import MaterialSupplierPage from './Components/MaterialSupplier';
import LabourSupplierPage from './Components/LabourSupplier';
import Footer from "./Components/Footer";
import About from './Components/About';

const App = () => {
  // const [transferredAmount, setTransferredAmount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use element syntax */}
            <Route path="/home" element={<Home />} />
            <Route path="/CentralGov" element={<CentralGov />} />
            <Route path="/StateGov" element={<StateGov />} />
            <Route path="/DistrictGov" element={<DistrictGovernmentPage />} />
            <Route path="/HealthCare" element={<HealthCareSectorPage />} />
            <Route path="/LabourSupplier" element={<LabourSupplierPage />} />
            <Route path="/MaterialSupplier" element={<MaterialSupplierPage />} />
            <Route path="/MLA" element={<MLAPage />} />
            <Route path="/Contractor" element={<ContractorPage />} />
            <Route path="./Components/Roads&Transport" element={<RoadTransportSectorPage />} /> {/* Update to match the file name */}
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
};

export default App;
