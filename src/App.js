import { Fragment, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

// "Initiating system. Please wait."
// "Bringing AI online. Standby."
// "Initializing. This won't take long."
// "Getting AI ready. Hang tight."
// "Warming up AI engines. One moment."
// "Starting up AI process. Please wait."

const App = () => {
  const [loading, setLoading] = useState(true);
  const circleLoader = document.getElementById("preloader");
  if (circleLoader) {
    setTimeout(() => {
      circleLoader.style.display = "none";
      setLoading(false);
    }, 6000);
  }
  return (
    !loading && (
      <Fragment>
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigation />}></Route>
          </Routes>
        </Suspense>
      </Fragment>
    )
  );
};

export default App;
