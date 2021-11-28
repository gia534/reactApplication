import React from "react";
import {NavLink} from "react-router-dom";
import {Card, CardContent} from "@material-ui/core";
import ListNewsItems from "./ListNewsItems";

// const nytApi = axios.create({
//     baseURL: "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=XxbWXs3gfJ27rp7UpTF648NqcF2Xp39x";
// })




function Navbar(){
    return(
        <div className={"navbar"}>
            <Card className={"navCard"} style={{backgroundColor: "#5D8598", borderRadius: 25}}>
                <CardContent>
                    <h3 className={"naviMenuTitle"}>Menu</h3>

                    <ul className={"menuList"}>
                        <li className={"listItem"}><NavLink to={"/"} className={"naviLink"}>Home</NavLink></li>
                        <li className={"listItem"}><NavLink to={"/blogone"} className={"naviLink"}>Introduction</NavLink></li>
                        <li className={"listItem"}><NavLink to={"/blogtwo"} className={"naviLink"}>Fighting</NavLink></li>
                        <li className={"listItem"}><NavLink to={"/blogthree"} className={"naviLink"}>Shopping</NavLink></li>
                    </ul>

                    <h3 className={"naviMenuTitle"}>Entertainment News</h3>
                    <ListNewsItems/>

                </CardContent>
            </Card>

        </div>
    )
}


export default Navbar;