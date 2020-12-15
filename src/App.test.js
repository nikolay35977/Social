﻿import React from "react";
import MainApp from "./App";
import ReactDOM from 'react-dom';

it ('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp/>,div);
    ReactDOM.unmountComponentAtNode(div); //демонтаж с div, проверяем, app утановилась или что-то такое
});