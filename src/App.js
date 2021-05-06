import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Munich" />
      <footer>
        This project is{" "}
        <a
          href="https://github.com/simacoding/react-weatherapp-bysima"
          target="_blank"
          rel="noreferrer"
        >
          open-source coded on GitHub
        </a>{" "}
        by Si Ma
      </footer>
    </div>
  );
}
