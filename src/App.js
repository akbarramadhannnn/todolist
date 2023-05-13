import React, { Suspense } from 'react';
import Layout from "layout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "views/Dashboard";
import ListActivity from "views/ListActivity";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list-activity/:id" element={<ListActivity />} />
      </Routes>
    </Layout>
  );
}

export default App;
