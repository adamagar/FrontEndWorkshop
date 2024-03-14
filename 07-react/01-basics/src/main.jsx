import {createRoot} from "react-dom/client";
import {App} from "./App.jsx";

// 1 - reach out to the DOM from index.html and grab the root element
const indexRoot = document.getElementById("root");

// 2 - create a root for the Reach app
const reactRoot = createRoot(indexRoot);

// 3 - render the App component into the React Roote created above
reactRoot.render(<App />); 