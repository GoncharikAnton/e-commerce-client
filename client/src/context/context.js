import React from "react";

const data = new Map();
data.isLoggedIn = false;
export const DataContext = React.createContext(data);