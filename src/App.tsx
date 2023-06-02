import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import TextBook from 'pages/Textbook/TextBook';
import Home from 'pages/Home/Home';
import Audiocall from 'pages/Audiocall/Audiocall';
import Sprint from 'pages/Sprint/Sprint';
import Games from 'pages/Games/Games';
import Statistic from 'pages/Statistic/Statistic';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/textbook" element={<TextBook />}></Route>
      <Route path="/games" element={<Games />}></Route>
      <Route path="/statistic" element={<Statistic />}></Route>
      <Route path="/games/sprint" element={<Sprint />}></Route>
      <Route path="/games/audiocall" element={<Audiocall />}></Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
