import React from 'react';
//import { Link } from "react-router-dom";
import BannerImage from '../assets/theWall.jpeg';
import "../styles/About.css";

function About() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="Information">
        <h1>About Bluvera Tracker</h1>
        
        <p>
          Welcome to Bluvera Tracker, your comprehensive companion in navigating the modern job search landscape. 
          In today's competitive employment market, staying organized isn't just helpful—it's essential for success. 
          Our application was born from the understanding that job hunting can be overwhelming, with countless 
          applications, varying requirements, and endless follow-ups that can easily slip through the cracks.
        </p>

        <p>
          Bluvera Tracker transforms the chaotic job search process into a streamlined, manageable system that 
          empowers you to take control of your career journey. Whether you're a recent graduate entering the 
          workforce, a seasoned professional seeking new opportunities, or someone making a career transition, 
          our platform adapts to your unique needs and helps you present your best self to potential employers.
        </p>

        <p>
          At its core, our application serves as your personal job search headquarters. Every application you 
          submit, every resume you tailor, and every cover letter you craft is securely stored and easily 
          accessible when you need it most. No more frantically searching through email attachments or trying 
          to remember which version of your resume you sent to which company. With Bluvera Tracker, you maintain 
          a complete history of your job search efforts, enabling you to track your progress, identify patterns, 
          and refine your approach for better results.
        </p>

        <p>
          The beauty of our system lies in its simplicity and effectiveness. Create detailed profiles for each 
          job application, complete with company information, position details, application dates, and current 
          status. Upload and organize multiple versions of your resume and cover letters, each tailored to 
          specific roles or industries. When interview opportunities arise, you'll have instant access to 
          exactly what you submitted, allowing you to prepare confidently and speak knowledgeably about your 
          qualifications and interest in the position.
        </p>

        <p>
          Beyond organization, Bluvera Tracker provides valuable insights into your job search strategy. Analyze 
          your application success rates, identify which types of positions generate the most responses, and 
          discover opportunities to improve your materials or approach. Our intuitive interface makes it easy 
          to update application statuses, add notes about interviews or communications, and set reminders for 
          follow-ups—ensuring no opportunity falls by the wayside.
        </p>

        <p>
          We believe that finding the right job shouldn't be a source of stress and confusion. With Bluvera Tracker, 
          you can approach your job search with confidence, knowing that you're organized, prepared, and 
          presenting yourself in the best possible light. Your next career opportunity is waiting—let us help 
          you find it with clarity, purpose, and professional excellence.
        </p>

        <div className="features-highlight">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">📊 Application Tracking</div>
            <div className="feature-item">📄 Document Management</div>
            <div className="feature-item">📅 Interview Scheduling</div>
            <div className="feature-item">💾 Secure Storage</div>
            <div className="feature-item">📈 Progress Analytics</div>
            <div className="feature-item">🔄 Easy Updates</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
