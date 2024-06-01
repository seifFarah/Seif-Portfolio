import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import Navbar from '../components/navigation';


const About = () => {
  const designs = ['insights.png', 'intern.png', 'launch.png', 'quiz.png'];

  return (
    <div>
      <Navbar />
      <div className="about">
      <div className="section-one">
        <div className="content">
          <h1 className="my-name">Hello, I'm <span className='highlight'>Seif (he/him)</span>👋-</h1>
          <h2 className="fields">IT graduate based in Auckland, New Zealand</h2>
          <p className="passion-text">I came all the way from Egypt back in 2020, currently seeking professional growth through learning in the tech industry. I look forward to a career in UI/UX design with interest in the fields of data and software development. At heart, I am passionate about problem-solving and driving results through innovative solutions. As I transition into the workforce, I look forward to combine all the skills I learned across previous roles and experiences to build new skills and grow professionally.</p>
         <br></br>
        </div>
      </div>

      <div className="section-follow">
        <div className="follow-content">
          <div className="life-exp">
            <h1 className="exp-title">At life</h1>
            <p className="exp-text">I enjoy travelling and exploring new places. I was lucky enough to be able to visit UAE and Turkey before coming to New Zealand.</p><br></br>
            <p className="exp-text">I enjoy reading! my favorite read recently was 'A Thousand Splendid Suns' by Khaled Hosseini.</p> <br></br>
            <p>If I have some free time on my hands. I love making spotify playlists and discovering new music. I find it quite theraputic.</p>
          </div>
          <div className="work-exp">
            <h1 className="exp-title">At Work</h1>
            <p className="exp-text">During university, I got to explore a wide array of topics in the technology field.</p> <br></br>
            <p className="exp-text">The main topic that I found myself invested in is UI/UX design. I enjoy working on web designs and exploring different design options that could improve the user experience.</p> <br></br>
            <p className="exp-text">I am intersted in the intersection of UX design and Data. I find the power to inform storytelling an extremely valuable and exciting premise. Something I am intersted on developing in the future.</p>

          </div>
        </div>
      </div>

      <div className="section-projects">
        <h1 className='into-project'>Things I Have Been <span className='highlight'>Working</span> On</h1>
        <div className="project-content">
          <div className="project">
            <h1 className="project-title"><a href="https://public.tableau.com/app/profile/seifeldinfarah" className="links">Data Visualisations Tableau Public</a></h1>
            <p className="project-text"> Story-telling through data is one of my biggest interests. I enjoy cleaning and analyzing random datasets to uncover insights. Check out my Tableau account for some visualizations, including an analysis of my Spotify listening habits.</p>
          </div>
          <div className="project">
            <h1 className="project-title"><a href="https://www.figma.com/design/qtjunmWFfPQqQ4NMPAJ6p9/Artist-Store?node-id=0-1&t=SXKwsGyqhkidExiU-1"  className="links">Online Store and artist website - Figma</a></h1>
            <p className="project-text"> I redesigned one of my favorite artist's online merch store and website theme, honing my Figma skills.</p>
          </div>

          <div className="project">
            <h1 className="project-title"><a href="https://www.treasurenz.com"  className="links">Treasure New Zealand - PERN Stack</a></h1>
            <p className="project-text">This is a website that is currently in development. We hope to launch it sometime between late 2024 - early 2025. Working with another developer, we are using the PERN stack to develop a really exciting application that will streamline financial tracking for university clubs.</p>
          </div>

          <div className="project">
            <h1 className="project-title">Social Media Designs</h1>
            <p className="project-text"> Creating content and graphic designs is a personal hobby. I experimented with social media design in high school and now contribute to the Biztech Society, creating graphics to attract students interested in the intersection of business and technology.
              </p><br></br>
              <div className="design-gallery">
                {designs.map((design, index) => (
                  <img key={index} src={`${process.env.PUBLIC_URL}/${design}`} alt={`Design ${index + 1}`} className="design-image"/>
                ))}
              </div>
          </div>
        </div>
      </div>
      

      <div id="experience" className="section-two">
        <h1 className="my-exp">Work Experience</h1>
        <div className="timeline">
          <div className="job">
            <div className="job-title">Teaching Assistant at UoA</div>
            <div className="job-period">Jan 2024 - Ongoing</div>
            <hr></hr>
            <p className="job-period">I am currently a TA for stage I courses in the ISOM department. I work to help improve the students' learning experience and engaging them with the course. I always seek to improve my approaches and try to communicate the knowledge I have in different methods to cater to all learning styles.</p>

          </div>
          <div className="job">
            <div className="job-title">Project Manager Intern</div>
            <div className="job-period">Nov 2023 - Jan 2024</div>
            <hr></hr>
            <p className="job-period">I did this remote internship with SomTam Lab in Thailand. With the privilege of forshadwing the CEO and Lead Project Manager, I got to learn about agile development, project management and tracking. I recieved the incredible opportunity to lead project management system migration in Notion and work with developers on web design and testing.</p>

          </div>
          <div className="job">
            <div className="job-title">Gold Class Cinema Attendant</div>
            <div className="job-period">April 2022 - Jan 2024</div>
            <hr></hr>
            <p className="job-period">Worked across Kitchen and bar roles to provide top notch customer service. I got to learn how to navigate team dynamics, work well under pressure and polish my interpersonal and customer service skills.</p>

          </div>
        </div>
      </div>

      <div id="experience" className="section-three">
        <h1 className="my-exp">Outside of University</h1>
        <div className="timeline">
          <div className="job">
            <div className="job-title">Baker Tilly Open Division Finalists</div>
            <div className="job-period">April 2024</div>
            <hr></hr>
            <p className="job-period">In a three day intense case cracking competition, my team and I got advanced to the finals. We place fourth place out of forty competing teams in this division. Consistently integrating feedback we recieved from Baker Tilly and Case Member judges.</p>

          </div>
          <div className="job">
            <div className="job-title">Zuru Tech Case Competition Third Place</div>
            <div className="job-period">October 2023</div>
            <hr></hr>
            <p className="job-period">After submitting a 10-page report, my team advanced to the finals. We presented a pitch in front of a panel of judges from Zuru, successfully making it to the top three teams.</p>

          </div>
          <div className="job">
            <div className="job-title">EY Ideate Challenge</div>
            <div className="job-period">April 2022 - Jan 2024</div>
            <hr></hr>
            <p className="job-period">Worked on a two-day technical competition where I was randomly allocated into a group of four university students to create a technical solution to solve the issue of lack of engagement with university events.</p>
          </div>
        </div>
      </div> 
    <Footer/>
    </div>
    </div>
  );
};

export default About;
