import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import { Hotkeys } from "./hotkeys";
import { Nav } from "react-bootstrap";

function RouteTest() {
    const hotkeys = [
        { name: "Home", key: "h", route: "/"},
        { name: "Things-to-Read", key: "t", route: "/things-to-read"},
        { name: "Interest1,", key: "1", route: "/interest1"},
        { name: "Interest2,", key: "2", route: "/interest2"},
        { name: "Interest3,", key: "3", route: "/interest3"},
        { name: "Interest4,", key: "4", route: "/interest4"},
        { name: "Interest5,", key: "5", route: "/interest5"},
        { name: "Interest6,", key: "6", route: "/interest6"},
        { name: "Interest7,", key: "7", route: "/interest7"},
        { name: "Interest8,", key: "8", route: "/interest8"},
        { name: "Interest9,", key: "9", route: "/interest9"},
        { name: "Interest0,", key: "0", route: "/interest0"}
    ]


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/things-to-read" element={<About />} />
                <Route path="/interest1" Component={() => {window.location.href = 'https://google.com'; return null;}}/>
                <Route path="/interest2" Component={() => {window.location.href = 'https://www.youtube.com'; return null;}}/>
                <Route path="/interest3" Component={() => {window.location.href = 'https://www.wikipedia.org'; return null;}}/>
                <Route path="/interest4" Component={() => {window.location.href = 'https://www.nytimes.com'; return null;}}/>
                <Route path="/interest5" Component={() => {window.location.href = 'https://www.playstation.com/en-us/games/helldivers-2/'; return null;}}/>
                <Route path="/interest6" Component={() => {window.location.href = 'https://wsdot.com/ferries/vesselwatch/default.aspx'; return null;}}/>
                <Route path="/interest7" Component={() => {window.location.href = 'https://www.nasa.gov'; return null;}}/>
                <Route path="/interest8" Component={() => {window.location.href = 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGmIN_vH7aKNY6wNKjEhTGgYJ8oOL_w5MunbaDaul-L-ZgDbnChQGPvIWH2Qn9Rht1'; return null;}}/>
                <Route path="/interest9" Component={() => {window.location.href = 'https://www.nal.usda.gov/plant-production-gardening/vegetable-gardening'; return null;}}/>
                <Route path="/interest0" Component={() => {window.location.href = 'https://www.ncoa.org/adviser/sleep/sleep-statistics'; return null;}}/>
            </Routes>
            <Hotkeys hotkeys={hotkeys} />
            <Nav items={hotkeys} />
        </Router>
    );
}
 
export default RouteTest;