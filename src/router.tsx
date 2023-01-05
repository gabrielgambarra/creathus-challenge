import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import MovieList from "./pages/MoviesList/MovieList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Navigate to="/movies" replace />} index />
        <Route path="/movies" element={<MovieList />} />
      </Route>
    </Routes>
  );
};
