import React from 'react';
import * as registerServiceWorker from "./registerServiceWorker";
import { createRoot } from "react-dom/client";
import { App } from './App';

const root = createRoot(document.getElementById('shell-root')!);
root.render(<App />);

registerServiceWorker.register();

export {};