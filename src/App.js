import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
function App() {
  let title = "my activities to do for the week";
  return (
    <div className="App">
      <Navbar title={title} />
      <main>
        <Todo title="learning react" datetime="15th August 2022" />
        <Todo title="sleeping  react" datetime="15th August 2022" />
        <Todo title="eating rice react" datetime="15th August 2022" />
        <Todo title="walking  react" datetime="15th August 2022" />
        <Todo title="dancing   react" datetime="15th August 2022" />
      </main>
    </div>
  );
}

export default App;
