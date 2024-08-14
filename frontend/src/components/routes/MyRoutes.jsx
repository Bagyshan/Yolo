import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import ApplicationForm from "../contacts/ApplicationForm";
import ReviewsPage from "../reviews/RewiewsPage";


const PUBLIC_ROUTES = [
  
  { id: 1, link: "/", element: <Main/> },
  { id: 2, link: "/applications", element: <ApplicationForm/> },
  { id: 3, link: "/reviewspage", element: <ReviewsPage/> },

];
const MyRoutes = () => {
  return (
    <Routes>
      {" "}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
