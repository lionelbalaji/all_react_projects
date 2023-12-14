import React from "react";
import {createRoot} from 'react-dom'
import App from "./App";

const root=document.getElementById('root')
const reactroot=createRoot(root);
reactroot.render(<App/>)