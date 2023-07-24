import { I18nProvider } from "react-aria";
import { Demo } from "./Demo";

function App() {
  return (
    <I18nProvider locale="cs-CZ">
      <Demo />
    </I18nProvider>
  );
}

export default App;
