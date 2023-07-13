import { I18nProvider } from "react-aria";
import { Demo } from "./Demo";

function App() {
  return (
    <I18nProvider>
      <Demo />
    </I18nProvider>
  );
}

export default App;
