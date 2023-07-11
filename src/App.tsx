import { I18nProvider } from "react-aria";
import { Editor } from "./components/editor";

function App() {
  return (
    <I18nProvider>
      <Editor />
    </I18nProvider>
  );
}

export default App;
