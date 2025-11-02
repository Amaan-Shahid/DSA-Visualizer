import React, { useState } from 'react';
import "../styles/SelectAlgo.css";
import upDown from "../assets/up-down.png";
import search from "../assets/search.png";
import spider2 from "../assets/spider2.png";
import notepad from "../assets/notepad.png";
import toggle from "../assets/play.png";

const SelectAlgo = ({ onAlgoSelect }) => {
  const [openCategories, setOpenCategories] = useState(["Sorting"]);
  const [selectedAlgo, setSelectedAlgo] = useState("Bubble Sort");

  const toggleCategory = (category) => {
  if (openCategories.includes(category)) {
    setOpenCategories(openCategories.filter((c) => c !== category));
  } else {
    setOpenCategories([...openCategories, category]);
  }
};


  const handleAlgoClick = (algo) => {
    setSelectedAlgo(algo);
    onAlgoSelect(algo); // 🔼 Send selected algo name to parent
  };

  return (
    <div className='select-algo-div'>
      <h2>ALGORITHMS</h2>

      {/* Sorting */}
      <div>
        <h3>
          <div onClick={() => toggleCategory("Sorting")}>
            <img src={upDown} alt="" />Sorting
          </div>
          <img
            src={toggle}
            className={`toggle-btn ${openCategories.includes("Sorting")
 ? "rotated" : ""}`}
            alt=""
            onClick={() => toggleCategory("Sorting")}
          />
        </h3>
        {openCategories.includes("Sorting")
 && (
          <>
            <h4
              onClick={() => handleAlgoClick("Bubble Sort")}
              className={selectedAlgo === "Bubble Sort" ? "selected" : ""}
            >
              Bubble Sort
            </h4>
            <h4
              onClick={() => handleAlgoClick("Merge Sort")}
              className={selectedAlgo === "Merge Sort" ? "selected" : ""}
            >
              Merge Sort
            </h4>
            <h4
              onClick={() => handleAlgoClick("Quick Sort")}
              className={selectedAlgo === "Quick Sort" ? "selected" : ""}
            >
              Quick Sort
            </h4>
          </>
        )}
      </div>

      {/* Searching */}
      <div>
        <h3>
          <div onClick={() => toggleCategory("Searching")}>
            <img src={search} alt="" />Searching
          </div>
          <img
            src={toggle}
            className={`toggle-btn ${openCategories.includes("Searching")
 ? "rotated" : ""}`}
            alt=""
            onClick={() => toggleCategory("Searching")}
          />
        </h3>
        {openCategories.includes("Searching")
 && (
          <>
            <h4
              onClick={() => handleAlgoClick("Linear Search")}
              className={selectedAlgo === "Linear Search" ? "selected" : ""}
            >
              Linear Search
            </h4>
            <h4
              onClick={() => handleAlgoClick("Binary Search")}
              className={selectedAlgo === "Binary Search" ? "selected" : ""}
            >
              Binary Search
            </h4>
          </>
        )}
      </div>

      {/* Graphs */}
      <div>
        <h3>
          <div onClick={() => toggleCategory("Graphs")}>
            <img src={spider2} alt="" />Graphs
          </div>
          <img
            src={toggle}
            className={`toggle-btn ${openCategories.includes("Graphs")
 ? "rotated" : ""}`}
            alt=""
            onClick={() => toggleCategory("Graphs")}
          />
        </h3>
        {openCategories.includes("Graphs")
 && (
          <>
            <h4
              onClick={() => handleAlgoClick("BFS")}
              className={selectedAlgo === "BFS" ? "selected" : ""}
            >
              BFS
            </h4>
            <h4
              onClick={() => handleAlgoClick("DFS")}
              className={selectedAlgo === "DFS" ? "selected" : ""}
            >
              DFS
            </h4>
          </>
        )}
      </div>

      {/* Strings */}
      <div>
        <h3>
          <div onClick={() => toggleCategory("Strings")}>
            <img src={notepad} alt="" />Strings
          </div>
          <img
            src={toggle}
            className={`toggle-btn ${openCategories.includes("Strings")
 ? "rotated" : ""}`}
            alt=""
            onClick={() => toggleCategory("String")}
          />
        </h3>
        {openCategories.includes("Strings")
 && (
          <>
            <h4
              onClick={() => handleAlgoClick("KMP")}
              className={selectedAlgo === "KMP" ? "selected" : ""}
            >
              KMP
            </h4>
            <h4
              onClick={() => handleAlgoClick("Rabin-Karp")}
              className={selectedAlgo === "Rabin-Karp" ? "selected" : ""}
            >
              Rabin-Karp
            </h4>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectAlgo;
