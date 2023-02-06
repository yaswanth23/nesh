import { Fragment, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./pages/home/home.component"));

const randomLoaderTexts = [
  "Warming up AI engines. One moment.",
  "Initiating system. Please wait.",
  "Bringing AI online. Standby.",
  "Initializing. This won't take long.",
  "Getting AI ready. Hang tight.",
  "Starting up AI process. Please wait.",
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const circleLoader = document.getElementById("preloader");
  const randomIndex = Math.floor(Math.random() * randomLoaderTexts.length);
  const randomLoaderText = randomLoaderTexts[randomIndex];
  const textElement = document.getElementById("rnd-loader-text");
  if (textElement) {
    textElement.innerHTML = randomLoaderText;
  }

  const [paused, setPaused] = useState(false);
  const audio = document.getElementById("audio-bg");

  const handleClick = () => {
    if (paused) {
      audio.pause();
    } else {
      audio.play();
    }
    setPaused(!paused);
  };

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
            <Route
              path="/"
              element={<Navigation audio={audio} handleClick={handleClick} />}
            >
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </Fragment>
    )
  );
};

export default App;
