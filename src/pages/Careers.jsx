import React from "react";
import "./Careers.css";

const jobRoles = [
  {
    title: "Junior Software Engineer",
    experience: "0-2 years",
    responsibilities: [
      "Assist in the development, testing, and debugging of software applications under senior supervision.",
      "Write clean, maintainable code following coding standards and best practices.",
      "Collaborate with cross-functional teams to understand requirements and deliver solutions.",
      "Participate in code reviews and actively seek feedback to improve skills.",
      "Assist in troubleshooting issues and provide timely fixes.",
      "Write unit tests and documentation for developed features.",
      "Learn and apply new technologies and programming languages as required.",
      "Contribute to team meetings and brainstorming sessions.",
      "Support deployment and integration activities.",
      "Maintain awareness of industry trends and emerging technologies.",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science, Software Engineering, or related field.",
      "Basic knowledge of programming languages such as JavaScript, Python, Java, or C#.",
      "Familiarity with version control systems like Git.",
      "Good problem-solving and communication skills.",
      "Eagerness to learn and adapt in a fast-paced environment.",
      "Understanding of software development lifecycle (SDLC) basics.",
      "Experience with HTML, CSS, and basic front-end frameworks is a plus.",
      "Ability to work collaboratively in a team setting.",
      "Strong attention to detail and willingness to ask questions.",
      "Internship or relevant project experience preferred.",
    ],
  },
  {
    title: "Senior Software Engineer",
    experience: "5+ years",
    responsibilities: [
      "Design, develop, and maintain complex software systems with a focus on scalability and performance.",
      "Lead code reviews and mentor junior developers to improve code quality.",
      "Architect software solutions in collaboration with product and engineering teams.",
      "Ensure best practices in software engineering, including testing, deployment, and documentation.",
      "Troubleshoot and resolve complex technical issues.",
      "Drive continuous improvement initiatives within the development team.",
      "Participate in technical planning and sprint estimation sessions.",
      "Contribute to setting the technical vision and roadmap.",
      "Evaluate and integrate new tools and technologies.",
      "Provide leadership during critical project phases.",
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Computer Science or related discipline.",
      "5+ years of professional software development experience.",
      "Strong proficiency in languages such as JavaScript/TypeScript, Python, Java, or C#.",
      "Deep understanding of software architecture and design patterns.",
      "Experience with cloud platforms (AWS, Azure, GCP) and CI/CD pipelines.",
      "Proven ability to mentor and lead development teams.",
      "Strong communication and interpersonal skills.",
      "Experience with Agile methodologies.",
      "Familiarity with containerization and orchestration tools like Docker and Kubernetes.",
      "Passion for innovation and delivering high-quality software.",
    ],
  },
  {
    title: "Junior Project Manager",
    experience: "0-2 years",
    responsibilities: [
      "Assist senior project managers in planning and executing projects.",
      "Track project progress and update status reports regularly.",
      "Coordinate meetings, document minutes, and follow up on action items.",
      "Support risk management and issue resolution processes.",
      "Maintain project documentation and deliverables.",
      "Communicate with stakeholders to gather requirements and feedback.",
      "Assist in resource allocation and scheduling.",
      "Help monitor project budgets and expenditures.",
      "Contribute to process improvements and lessons learned.",
      "Support team collaboration and foster positive communication.",
    ],
    requirements: [
      "Bachelor’s degree in Business, Management, or related field.",
      "Basic understanding of project management principles and methodologies.",
      "Strong organizational and multitasking skills.",
      "Effective verbal and written communication abilities.",
      "Proficiency with project management tools like MS Project, Trello, or Jira.",
      "Ability to work well in a team environment.",
      "Attention to detail and problem-solving mindset.",
      "Willingness to learn and grow professionally.",
      "Experience with documentation and reporting preferred.",
      "Certification like CAPM is a plus.",
    ],
  },
  {
    title: "Senior Project Manager",
    experience: "7+ years",
    responsibilities: [
      "Lead multiple complex projects from initiation through closure.",
      "Define project scope, goals, and deliverables aligned with business objectives.",
      "Develop detailed project plans including timelines, budgets, and resource plans.",
      "Manage project teams and coordinate cross-functional collaboration.",
      "Monitor project risks and issues and implement mitigation strategies.",
      "Communicate project status to stakeholders and senior leadership.",
      "Ensure quality standards and compliance are met throughout project lifecycle.",
      "Drive continuous improvement in project management processes.",
      "Mentor junior project managers and support team development.",
      "Lead change management and ensure stakeholder engagement.",
    ],
    requirements: [
      "Bachelor’s degree; PMP or equivalent certification preferred.",
      "7+ years of project management experience, including leadership roles.",
      "Proven success managing large-scale and complex projects.",
      "Excellent leadership, negotiation, and communication skills.",
      "Strong knowledge of Agile, Waterfall, and hybrid project management approaches.",
      "Experience with project management software and collaboration tools.",
      "Ability to manage multiple priorities and deliver under pressure.",
      "Strong problem-solving and decision-making capabilities.",
      "Demonstrated ability to influence and motivate teams.",
      "Commitment to professional development and continuous learning.",
    ],
  },
  {
    title: "Junior DevOps Engineer",
    experience: "0-2 years",
    responsibilities: [
      "Assist in deploying and maintaining infrastructure and CI/CD pipelines.",
      "Monitor system performance and troubleshoot issues under supervision.",
      "Collaborate with development teams to automate deployments.",
      "Participate in maintaining cloud infrastructure security and compliance.",
      "Write scripts to automate routine tasks.",
      "Help document infrastructure and processes.",
      "Support backup and recovery procedures.",
      "Learn containerization and orchestration technologies.",
      "Assist with configuration management.",
      "Stay current with DevOps best practices and tools.",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or related field.",
      "Basic understanding of Linux/Unix systems and networking.",
      "Familiarity with scripting languages such as Bash, Python, or PowerShell.",
      "Knowledge of version control systems like Git.",
      "Interest in cloud platforms like AWS, Azure, or GCP.",
      "Good problem-solving skills and eagerness to learn.",
      "Ability to work in a team environment.",
      "Basic knowledge of CI/CD concepts.",
      "Experience with Docker or Kubernetes is a plus.",
      "Strong communication skills.",
    ],
  },
  {
    title: "Senior DevOps Engineer",
    experience: "5+ years",
    responsibilities: [
      "Design, implement, and maintain scalable infrastructure and CI/CD pipelines.",
      "Lead efforts on automation, monitoring, and performance tuning.",
      "Collaborate with development and QA teams to streamline deployment workflows.",
      "Implement security best practices and compliance standards.",
      "Manage container orchestration and cloud infrastructure.",
      "Troubleshoot complex infrastructure and deployment issues.",
      "Mentor junior DevOps engineers and contribute to team knowledge sharing.",
      "Continuously evaluate and improve system reliability and scalability.",
      "Document infrastructure and processes clearly.",
      "Stay updated with emerging DevOps tools and methodologies.",
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Computer Science or related discipline.",
      "5+ years of professional DevOps or systems engineering experience.",
      "Strong expertise in cloud platforms (AWS, Azure, GCP).",
      "Hands-on experience with Docker, Kubernetes, and configuration management tools.",
      "Proficient scripting and automation skills (Python, Bash, etc.).",
      "Deep understanding of networking, security, and system administration.",
      "Excellent problem-solving and communication skills.",
      "Experience with monitoring and logging tools.",
      "Ability to lead and mentor technical teams.",
      "Passion for innovation and operational excellence.",
    ],
  },
];

export default function Careers() {
  return (
    <div className="careers-page">
      <div className="careers-container">
        <h1 className="careers-title">Careers at VICZ Ltd</h1>
        <p className="careers-intro">
          Interested candidates are encouraged to send their CV to{" "}
          <a href="mailto:careers@viczltd.com" className="email-link">
            careers@viczltd.com
          </a>
        </p>

        {jobRoles.map(({ title, experience, responsibilities, requirements }, idx) => (
          <section key={idx} className="job-role-card">
            <h2 className="job-title">{title}</h2>
            <p className="job-experience">Experience Required: {experience}</p>

            <div className="job-section">
              <h3>Roles & Responsibilities:</h3>
              <ul>
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h3>Requirements:</h3>
              <ul>
                {requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
