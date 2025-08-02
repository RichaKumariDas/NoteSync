import React from 'react';
import '../styles/Auth.css'; // Assuming global styles are applied here

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="animated-line gradient-text">
          Welcome to <span>NoteSync</span>
        </h2>

        <p className="animated-line">
          <strong>NoteSync</strong> is your trusted companion for capturing, organizing, and safeguarding your personal thoughts and ideas. Whether you’re drafting a project plan, journaling daily insights, or listing tasks, NoteSync keeps everything synced and accessible.
        </p>

        <p className="animated-line">
          With an elegant glass-inspired dark interface, NoteSync makes your note-taking experience delightful and secure. Your content is encrypted, and only you can access or edit your notes from any device.
        </p>

        <h4 className="animated-line">What You Can Do</h4>
        <ul className="about-list">
          <li className="animated-line">
            <span className="star-bullet"></span> Create and edit unlimited personal notes
          </li>
          <li className="animated-line">
            <span className="star-bullet"></span> Secure login ensures your data stays private
          </li>
          <li className="animated-line">
            <span className="star-bullet"></span> Easily access your notes from any device, anytime
          </li>
          <li className="animated-line">
            <span className="star-bullet"></span> Experience a clutter-free, beautiful UI made for productivity
          </li>
        </ul>

        <p className="animated-line about-footer">
          Your ideas matter. Keep them safe and in sync with <strong>NoteSync</strong>.
        </p>
      </div>

      <div className="about-right">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E10AQHZiLseAvs0Ng/image-shrink_800/image-shrink_800/0/1729614926346?e=2147483647&v=beta&t=f1gpGk2wYvedQOpiXf7ckwvZ4z1ycFYi9S2oSxxKk7A"
          alt="Notepad"
          className="fade-image"
        />
      </div>
    </div>
  );
};

export default About;
