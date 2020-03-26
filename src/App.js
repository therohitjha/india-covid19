import React, { lazy, Suspense } from "react";
import "./styles.css";
import loading from "./loading.gif";
const Corona = lazy(() => import("./Corona"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="center">
          <img src={loading} alt="loading" />
        </div>
      }
    >
      <Corona />
    </Suspense>
  );
}

export default App;
