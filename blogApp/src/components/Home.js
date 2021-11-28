import React from "react";
import {Card, CardContent, CardMedia} from "@material-ui/core";
import {NavLink} from "react-router-dom";

function Home() {

    return(
        <div className={"home"}>
            <img className={"blogPic"} src={"https://i.pinimg.com/originals/f5/97/89/f59789bfebd88ecbafbf0e5a608a1ff2.jpg"}
                 alt={"Here to say hello"} width={750}/>

            <p className={"para"}>Welcome to my site! The focus of this website is my life
                as a plus sized woman living in this extremely judgemental world. Social media, entertainment, advertisements,
                and even people around me are telling me that being skinny/fit is the ultimate life of living. I am here
                to...well live my life. The way I want it to be. I am here to tell people what it is like Living Plus Sized,
                whether you are plus sized yourself, or not, I hope you can learn from my website or relate to the stories
                that I will tell. So swift through the blogs that I have posted below, I suggest starting with the Introduction
                post below if you haven't been here already, and enjoy the many (emotional) stories that I have to tell.</p>

         <div className={"blogCards"}>
             <Card className={"card"} style={{backgroundColor: "#5D8598", borderRadius: 25}}>
                 <CardContent className={"content"}>
                     <CardMedia className={"media"}>
                         <img  src={"https://media.kidadl.com/6012928576a3c90d1d37cccf-warm-sayings-and-popular-quotes-can-be-a-thing-of-beauty-and-welcoming.jpeg"} width={250}
                              alt={"Here to say hello"}/>
                     </CardMedia>
                     <h3 className={"intro"}><NavLink to={"/blogone"} className={"link"}>Introduction</NavLink></h3>
                     <h5 className={"date"}>Date written: Nov-24-2021</h5>
                     <p className={"p"}>Learn more about me, what plus size means, and how this website can positively effect you in the
                         long run.</p>
                 </CardContent>
             </Card>

             <Card className={"card"} style={{backgroundColor: "#5D8598", borderRadius: 25}}>
                 <CardContent className={"content"}>
                     <CardMedia className={"media"}>
                         <img src={"https://cdn-0.therandomvibez.com/wp-content/uploads/2020/12/I-Got-Me-Captions.jpg"}
                              alt={"Here to say hello"} width={250}/>
                     </CardMedia>
                     <h3 className={"intro"}><NavLink to={"/blogtwo"} className={"link"}>Fighting</NavLink></h3>
                     <h5 className={"date"}>Date written: Nov-25-2021</h5>
                     <p className={"p"}>Fighting between myself, my thoughts, and the world. How words and actions from
                         the people around me has affected how I see myself.</p>
                 </CardContent>
             </Card>

             <Card className={"card"} style={{backgroundColor: "#5D8598", borderRadius: 25}}>
                 <CardContent className={"content"}>
                     <CardMedia className={"media"}>
                         <img src={"http://img.picturequotes.com/2/810/809401/whoevers-designing-for-plus-size-doesnt-get-it-the-entire-garment-needs-to-be-reconceived-you-cant-quote-1.jpg"}
                              alt={"Whoever is designing for plus-size doesn't get it. The entire garment needs to be reconceived. You can't just take a size 8 and make it larger. Tim Gunn"}
                              width={250}/>
                     </CardMedia>
                     <h3 className={"intro"}><NavLink to={"/blogthree"} className={"link"}>Shopping</NavLink></h3>
                     <h5 className={"date"}>Date written: Nov-25-2021</h5>
                     <p className={"p"}>Learn more about me, what plus size means, and how this website can positively effect you in the
                         long run.</p>
                 </CardContent>
             </Card>
         </div>


        </div>

    )
}

export default Home;


