import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SelectAlgo from "../components/SelectAlgo";
import InfoPane from "../components/InfoPane";
import Visual from "../components/Visual.jsx";
import "../styles/Visualizer.css";
import { ALGORITHMS } from "../Data/Algorithms.js";

const Visualizer = () => {
  // 🧠 Keep track of the selected algorithm (default: Bubble Sort)
  const [selectedAlgo, setSelectedAlgo] = useState(ALGORITHMS[0]);

  // 📤 Function to handle algorithm selection from SelectAlgo
  const handleAlgoSelect = (algoName) => {
    const algo = ALGORITHMS.find((a) => a.name === algoName);
    if (algo) setSelectedAlgo(algo);
  };

  return (
    <div className="v-div">
      <Navbar />
      <div className="visualization-div">
        {/* Pass handler to SelectAlgo */}
        <SelectAlgo onAlgoSelect={handleAlgoSelect} />

        {/* Visual section will use this later */}
        <Visual selectedAlgo={selectedAlgo} />

        {/* InfoPane updates automatically */}
        <InfoPane
          pseudocode={selectedAlgo.pseudocode}
          complexity={selectedAlgo.complexity}
        />
      </div>
    </div>
  );
};

export default Visualizer;
