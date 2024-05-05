import FirstChild from "./components/firstChild/FirstChild";

function App() {
  return (
    <div className="App">
      {2 < 5 ? (
        <>
          <FirstChild data={["asdas", "asdsad"]} />
          <FirstChild />
        </>
      ) : (
        <>
          <button>asdsad</button>
          <button>asdsad</button>
          <button>asdsad</button>
        </>
      )}
    </div>
  );
}

export default App;
