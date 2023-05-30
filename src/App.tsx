import AutoSizer from "react-virtualized-auto-sizer";

function App() {
  return (
    <>
      <span>AutoSizer Typing bug</span>
      <AutoSizer>
        {({ height, width }) => (
          <div>
            height: {height}, width: {width}
          </div>
        )}
      </AutoSizer>
    </>
  );
}

export default App;
