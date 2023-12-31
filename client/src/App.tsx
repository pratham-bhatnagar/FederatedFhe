import "cal-sans";
import { Route } from "wouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import TrainInit from "./pages/Init";
import Dashboard from "./pages/Dashboard";
import Train from "./pages/TrainModels";
import { init } from "./utils/fhevm";

function App() {
  const [contract, setContract] = useState<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setIsInitialized(true);
        console.log("yerd");
      })
      .catch(() => setIsInitialized(false));
  }, []);

  if (!isInitialized) return null;
  return (
    <div className="App">
      <div className="mt-[80px]">
        <Navbar />
        <Route path="/train/init">
          <TrainInit contract={contract} setContract={setContract} />
        </Route>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    </div>
  );
}

export default App;
