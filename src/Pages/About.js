import React, {useEffect} from 'react';
import './About.css';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
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
            <p className="exp-text">I find Data Visualisation and the power to inform story telling an extremely valuable and exciting topic. Something I am intersted on developing in the future.</p>

          </div>
        </div>
      </div>

      <div className="section-projects">
        <h1 className='into-project'>Things I have been <span className='highlight'>working</span> on</h1>
        <div className="project-content">
          <div className="project">
            <h1 className="project-title"><a href="https://public.tableau.com/app/profile/seifeldin.farah4338">Spotify data - Tableau Public</a></h1>
            <p className="project-text">As I mentioned, data visulisation is one of my main interests! I like to pull random datasets and see what I can find from cleaning and analyzing these datasets. You'll find a couple of visualisations on my Tableau account. One of which were I extracted my Spotify data to see which artists I listened to the most.</p>
          </div>
          <div className="project">
            <h1 className="project-title"><a href="https://www.figma.com/file/qtjunmWFfPQqQ4NMPAJ6p9/Artist-Store?type=design&node-id=0%3A1&mode=design&t=NfoChDxyF8hl3zSL-1">Online Store and artist website - Figma</a></h1>
            <p className="project-text">I wanted to reinvent one of my favorite artists' online merch store as well as design a theme for their website. I got to practice so much about Figma and really develop my interest in this software. Also here is a sneak peak of some projects I am currently working on in Figma: A music version of Letterboxd and a concert tracking mobile app.</p>
          </div>

          <div className="project">
            <h1 className="project-title"><a href="https://www.treasurenz.com">Treasure New Zealand - PERN Stack</a></h1>
            <p className="project-text">This is a website that is currently in development. We hope to launch it sometime between late 2024 - early 2025. Working with another developer, we are using the PERN stack do develop a really exciting application.</p>
          </div>

          <div className="project">
            <h1 className="project-title"><a href="https://drive.google.com/drive/folders/1vCpVw0VaXOiePYBJMduzk9RCg_fEI7Dw?usp=drive_link">Social Media Designs</a></h1>
            <p className="project-text">Content creation and graphic designs is one of my personal hobbies. During my time in high school, I got to experiment with social media design as a part of business studies class. Now I am a member of Biztech Society as a design team member, creating graphic designs to attract members of the university interested in the intersection between business and technology.</p>
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

    </div>
  );
};

export default About;
