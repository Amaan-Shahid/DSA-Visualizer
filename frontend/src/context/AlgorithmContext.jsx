import { createContext, useContext, useState } from "react";
import { ALGORITHMS } from "../Data/Algorithms.js";

const AlgorithmContext = createContext();

export const AlgorithmProvider = ({ children }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Toggle category dropdown (Sorting, Searching, etc.)
  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Select algorithm
  const selectAlgorithm = (id) => {
    const algo = ALGORITHMS.find((a) => a.id === id);
    setSelectedAlgorithm(algo);
  };

  return (
    <AlgorithmContext.Provider
      value={{
        selectedAlgorithm,
        selectAlgorithm,
        expandedCategories,
        toggleCategory,
        ALGORITHMS,
      }}
    >
      {children}
    </AlgorithmContext.Provider>
  );
};

export const useAlgorithm = () => useContext(AlgorithmContext);
