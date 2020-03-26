import React, { lazy, Suspense } from "react";
import "./styles.css";


function App() {
  return (
    <Suspense
      fallback={
        <div className="flexCenter">
          <img src={loading} alt="loading" />
        </div>
      }
    >
      <Corona />
    </Suspense>
  );
}

export default App;
