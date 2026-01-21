const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar" aria-label="Profile">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <span className="avatar-text">BS</span>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Bhavana Sharma</h1>
            <p className="profile-title">Full Stack Developer</p>
            <p className="profile-company">Graebert India Software</p>
            <p className="profile-availability">Available for freelance work</p>
          </div>
        </div>

        <div className="profile-social">
          <a 
            href="https://github.com/bhavana-it" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.596 2 12.255c0 4.528 2.865 8.37 6.839 9.727.5.096.682-.224.682-.497 0-.245-.009-.895-.014-1.757-2.782.62-3.369-1.372-3.369-1.372-.454-1.18-1.11-1.494-1.11-1.494-.907-.635.069-.622.069-.622 1.003.073 1.531 1.055 1.531 1.055.892 1.566 2.341 1.114 2.91.852.09-.664.349-1.114.635-1.37-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.034 1.029-2.75-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.05A9.252 9.252 0 0 1 12 6.844a9.26 9.26 0 0 1 2.503.347c1.909-1.326 2.748-1.05 2.748-1.05.545 1.412.202 2.455.1 2.714.64.716 1.028 1.63 1.028 2.75 0 3.944-2.339 4.81-4.566 5.064.359.316.678.94.678 1.895 0 1.368-.012 2.47-.012 2.807 0 .275.18.597.688.496C19.137 20.62 22 16.782 22 12.255 22 6.596 17.523 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/bhavana1996/" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
              <path
                d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0ZM2.5 21.5h4.9V9H2.5v12.5ZM9.5 9h4.7v1.7h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.2 5.84 7.36v5.97h-4.9v-5.29c0-1.26-.03-2.88-1.8-2.88-1.8 0-2.08 1.37-2.08 2.79v5.38H9.5V9Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a 
            href="mailto:bhavanait@outlook.com" 
            className="social-link" 
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="profile-contact">
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
                <path
                  d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <a href="tel:+919627716196" className="contact-value">+91 96277 16196</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <a href="mailto:bhavanait@outlook.com" className="contact-value">bhavanait@outlook.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
                <path
                  d="M12 22s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
                  fill="currentColor"
                  opacity="0.18"
                />
                <path
                  d="M12 22s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <span className="contact-value">Gurugram, India</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true" focusable="false">
                <rect x="3" y="5" width="18" height="16" rx="2" fill="currentColor" opacity="0.14" />
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="contact-details">
              <span className="contact-label">Birthday</span>
              <span className="contact-value">Dec 12, 1996</span>
            </div>
          </div>
        </div>

        <a href="/resume.pdf" className="download-cv" download>
          <span className="download-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" width="18" height="18" focusable="false">
              <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSidebar;
