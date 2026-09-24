import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import WelcomeCode from './welcomeee'
import img1 from "./images.png"
import img2 from "./imerrr.png"
import img3 from "./imre.png"
import vid2 from "./mvie.mp4"



function App(){

  return(
    <>
    <div className="top">
      <div className="yellowthing">
        <div className="marquee"><marquee><WelcomeCode appName="Mentor" /></marquee></div>
      </div>
      <nav className="navabar">
        <ul>
          <li className="pp">.playa</li>
          <li><button className="contact">Contact us</button></li>
        </ul>
      </nav>

      </div>
      <div className="intro">
  <h2>Your repo, but it talks back.</h2>
  <p>Connect your Git repository, chat with your codebase, and get feedback on your code without waiting on a review.</p>
</div>

      <section>
      <div className="sections">
        <div className="section1">
          <img src= {img1}></img>
          <p>Synchronize your blorptastic commits across the flibber-verse. Auto-merge conflicts with zero grivenshanks. Push, pull, and squawk your 
            repo into the glimmering upstream void.</p>
        </div>

        <div className="section1">
          <img src= {img2} alt="pic"></img>
          <p>Chat with Zibbertron, your friendly neighborhood cognition-blob. It listens, it babbles, it occasionally pretends to understand qua
            ntum tax law. 24/7 wobbly wisdom on tap.</p>
        </div>

        <div className="section1">
          <img src= {img3} alt="pic"></img>
          <p>Get instant snarkalytics on your work. Our model rates your vibes from "meh" to "absolute banger" using proprietary 
            noodle-based scoring algorithms.</p>
        </div>


      </div>
      <div className="btnn">
      <button className="getstarted">Get Started</button>
      </div>

      <div className="video">
        <div className="acvid">
          <div className="new">
          <h2>How it works</h2>
          <ul>
            <li>Connect your Git repository and bring your entire workflow into one place. Zibbetrion keeps track of your commits, branches, and changes so you can spend less time
               searching through your repo and more time building.</li>

            <li>Get intelligent feedback without waiting for a code review. Zibbetrion analyzes your code and highlights potential issues, patterns, and areas 
              for improvement—with explanations you can actually understand.</li>
          
          <li>Ask your codebase anything. Chat with an AI that understands your repository and get instant answers about files, functions, errors, 
            architecture, and how different parts of your project connect.</li>
          
          </ul>
          </div>

          <div className="videobox">
          <video autoPlay>
            <source src={vid2} type="video/mp4"></source>
          </video>
          </div>
          
        </div>
        <footer>
        <hr></hr>
        <div className="logo">
          <a href="https://github.com/eriberiii/MovieProject">
          </a>

          <a href="mailto:example@email.com">
        <Mail className="mail"/>
          </a>

        </div>
      </footer>
      </div>
      </section>

    

      
    </>
  )

}

export default App;



