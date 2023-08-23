import Sidebar from "./compo/Sidebar";
import Fpage from "./pages/Fpage";

function App() {
  return (
    <div style={{ background: "#111", maxWidth: "100vw" }}>
      <Sidebar>
        <Fpage />
      </Sidebar>
    </div>
  );
}

export default App;
