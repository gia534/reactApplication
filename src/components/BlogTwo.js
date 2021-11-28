import React from "react";

function BlogTwo() {
    return(
        <React.Fragment>
            <img className={"blogPic"} src={"https://cdn-0.therandomvibez.com/wp-content/uploads/2020/12/I-Got-Me-Captions.jpg"}
                 alt={"Here to say hello"}/>
            <h1 className={"blogTitle"}>Fighting</h1>
            <h5 className={"writDate"}>Date written: Nov-25-2021</h5>
            <article>
                <section>
                    <p className={"para"}>“You know, you are so pretty but you really need to lose weight.” </p>
                    <p className={"para"}>“Are you sure this dress isn’t too tight?”</p>
                    <p className={"para"}>“You know, you are so pretty but you really need to lose weight.” </p>
                    <p className={"para"}>“Your belly has gotten so big, I can sit on it.”</p>
                </section>

                <section>
                    <p className={"para"}>They are just words I tell myself. But when you hear them so many times in
                        your life you begin to believe them. So, I have, and it has defiantly ruined me emotionally.
                        This is the life that I live every day. I walk around wondering what people think when I catch
                        someone staring at me. Most of the time, my eyes are looking at the sidewalk as I walk to the
                        nearest train station or Target or Whole Foods. </p>
                </section>

                <section>
                    <p className={"para"}>I am constantly thinking of the food I am about to eat, because people never
                        gave me the luxury of just eating without telling me "maybe you shouldn't eat that". I am
                        constantly thinking of the clothes I put every day, cause people never gave me the luxury of
                        just wearing what I want without being judged. Or telling me that I should wear these wide
                        legged pants, and this large t-shirt because my butt is unflattering in skinny jeans and
                        the shirt I was wearing before wasn't covering it. </p>

                    <p className={"para"}>I never had the luxury to just be me. Because I was too busy living other
                        people's lives. When will I learn to live for myself? I don't know yet. </p>
                </section>
            </article>
        </React.Fragment>

    )
}

export default BlogTwo;