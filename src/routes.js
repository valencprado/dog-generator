import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

export default function CustomRouter() {
return (
    <Routes>
        <Route path="/" Component={Home}/>
    </Routes>
)
}