import React from 'react';

const jobRoles = [
  // ... Previous 10 roles
  
      {
    title: 'Software Engineer',
    about: `Join our engineering team at VICZ Ltd to design, develop, and deploy cutting-edge software solutions. You’ll work on full-stack projects, collaborate across teams, and drive technical excellence.`,
    responsibilities: [
      'Design, develop, and maintain scalable web and mobile applications.',
      'Write clean, maintainable, and testable code.',
      'Participate in code reviews and provide constructive feedback.',
      'Collaborate with product managers and designers on feature implementation.',
      'Optimize performance and enhance the user experience.',
      'Debug and resolve software defects promptly.',
      'Implement and maintain CI/CD pipelines.',
      'Document technical specifications and design decisions.',
      'Mentor junior engineers and support team growth.',
      'Stay current with emerging technologies and best practices.',
    ],
    requirements: [
      'Bachelor’s degree in Computer Science or related field.',
      '5+ years of experience in full-stack development.',
      'Proficiency in React (or Angular/Vue) and Node.js (or Python/Ruby).',
      'Strong understanding of RESTful APIs and WebSockets.',
      'Experience with CI/CD tools (Jenkins, GitHub Actions).',
      'Familiarity with SQL/NoSQL databases (PostgreSQL, MongoDB).',
      'Version control with Git and collaborative workflows.',
      'Strong problem-solving and debugging skills.',
      'Excellent communication and teamwork skills.',
      'Passion for continuous learning and innovation.',
    ],
  },
  {
    title: 'Project Manager',
    about: `Our Project Manager leads planning, budgeting, execution, and delivery of complex IT and digital initiatives, ensuring alignment with business objectives.`,
    responsibilities: [
      'Define project scope, goals, and deliverables.',
      'Develop detailed project plans and timelines.',
      'Track progress and report weekly to stakeholders.',
      'Manage project budgets and resource allocation.',
      'Facilitate risk identification and mitigation strategies.',
      'Coordinate cross-functional teams across departments.',
      'Ensure deliverables meet quality standards.',
      'Lead Agile rituals and sprint planning.',
      'Resolve conflicts and impediments proactively.',
      'Conduct post-project analysis and documentation.',
    ],
    requirements: [
      'Bachelor’s degree in IT, Business, or related field.',
      'PMP, PRINCE2, or Agile certification.',
      '7+ years’ experience managing IT/digital projects.',
      'Strong leadership and planning abilities.',
      'Familiarity with project management tools (Jira, Trello).',
      'Excellent interpersonal and stakeholder management.',
      'Ability to adapt methodologies to project needs.',
      'Strong analytical and problem-solving capabilities.',
      'Proven track record of on-time, on-budget delivery.',
      'Exceptional communication skills in English.',
    ],
  },
  {
    title: 'DevOps Engineer',
    about: `At VICZ Ltd, our DevOps Engineer builds infrastructure, integrates deployment pipelines, and ensures system reliability to enable fast, secure deliveries.`,
    responsibilities: [
      'Design and maintain scalable CI/CD pipelines.',
      'Automate cloud infrastructure using IaC tools.',
      'Manage container orchestration with Kubernetes/Docker.',
      'Implement configuration management (Ansible/Puppet).',
      'Monitor application performance and reliability.',
      'Perform system capacity planning and optimization.',
      'Ensure security best practices and compliance.',
      'Troubleshoot production issues quickly.',
      'Maintain system documentation and runbooks.',
      'Collaborate with developers to streamline releases.',
    ],
    requirements: [
      '3+ years in DevOps, SRE, or related roles.',
      'Expertise in AWS, Azure, or GCP.',
      'Experience with Kubernetes and Docker.',
      'Hands-on with Terraform, Ansible, or CloudFormation.',
      'Familiar with monitoring tools like Prometheus & Grafana.',
      'Strong scripting skills (Python, Bash).',
      'Solid knowledge of networking and Linux.',
      'Understanding of security, backups, and redundancy.',
      'Good communication and collaboration abilities.',
      'Continuous integration and delivery mindset.',
    ],
  },
  {
    title: 'Cloud Solutions Architect',
    about: `Design, build, and optimize VICZ Ltd’s and clients’ cloud environments. You will ensure robust, secure, and scalable cloud architectures that align with business goals.`,
    responsibilities: [
      'Architect cloud-native solutions on AWS/Azure/GCP.',
      'Evaluate service offerings and recommend best-fit solutions.',
      'Design secure and compliant infrastructure.',
      'Lead infrastructure optimization and cost-reduction efforts.',
      'Define standards and templates for IaC.',
      'Guide development teams on architectural patterns.',
      'Conduct architecture reviews and audits.',
      'Maintain disaster recovery and backup strategies.',
      'Stay current on emerging cloud trends.',
      'Mentor junior architects and engineers.',
    ],
    requirements: [
      '5+ years as a cloud or solutions architect.',
      'AWS/Azure/GCP certifications.',
      'Deep knowledge of networking, storage, and security.',
      'Experience with Terraform, ARM, or CloudFormation.',
      'Understanding microservices and serverless architecture.',
      'Excellent stakeholder engagement skills.',
      'Ability to produce clear technical documentation.',
      'Strong problem-solving and analytical skills.',
      'Leadership in guiding technical teams.',
      'Commitment to secure architecture best practices.',
    ],
  },
  {
    title: 'Data Engineer',
    about: `As a Data Engineer at VICZ Ltd, you will build robust data pipelines, manage ETL/ELT processes, and enable analytics across our business and client projects.`,
    responsibilities: [
      'Design and build ETL/ELT pipelines.',
      'Implement data modeling and storage solutions.',
      'Ensure data reliability and integrity.',
      'Manage data warehousing (Snowflake, Redshift).',
      'Collaborate with data analysts and scientists.',
      'Optimize pipeline performance and scalability.',
      'Maintain data documentation and lineage.',
      'Implement data security and governance.',
      'Develop automated data quality testing.',
      'Onboard new data sources and platforms.',
    ],
    requirements: [
      '3+ years in data engineering roles.',
      'Proficiency in Python, SQL, or Java.',
      'Experience with ETL tools (Airflow, dbt).',
      'Knowledge of cloud-based data platforms.',
      'Strong data modeling skills.',
      'Familiarity with big data tools (Spark, Hadoop).',
      'Understanding data security and compliance.',
      'Attention to detail and troubleshooting skills.',
      'Ability to work with business/data stakeholder teams.',
      'Strong communication of technical designs.',
    ],
  },
  {
    title: 'Cybersecurity Analyst',
    about: `Join our team to protect VICZ Ltd and client assets from cyber threats. You will detect, analyze, and respond to security incidents proactively.`,
    responsibilities: [
      'Monitor network and system logs continuously.',
      'Analyze and respond to security alerts.',
      'Perform vulnerability scans and remediation.',
      'Implement endpoint and perimeter security controls.',
      'Develop incident response processes.',
      'Conduct penetration testing exercises.',
      'Collaborate on security awareness with staff.',
      'Maintain security documentation and policies.',
      'Stay current with threat intelligence.',
      'Support compliance audits and readiness.',
    ],
    requirements: [
      'Degree in Cybersecurity, IT, or equivalent.',
      'Certifications like CEH, CISSP, or Security+.',
      '2+ years in security monitoring roles.',
      'Familiar with SIEM, IDS/IPS, and firewalls.',
      'Experience with threat hunting techniques.',
      'Strong analytical and investigative skills.',
      'Knowledge of encryption and authentication.',
      'Good documentation and communication abilities.',
      'Ability to respond under pressure.',
      'Commitment to continuous cybersecurity learning.',
    ],
  },
  {
    title: 'UI/UX Designer',
    about: `As UI/UX Designer, you'll craft intuitive and visually appealing experiences, from wireframes through high-fidelity designs, working closely with our product and development teams.`,
    responsibilities: [
      'Design user flows, wireframes, and prototypes.',
      'Conduct user research and usability tests.',
      'Collaborate with cross-functional teams.',
      'Refine UI based on data and feedback.',
      'Build and maintain design systems.',
      'Ensure consistency across platforms.',
      'Create high-fidelity mockups.',
      'Provide design specs to development.',
      'Stay updated on UX trends.',
      'Present design rationale to stakeholders.',
    ],
    requirements: [
      'Portfolio demonstrating UI/UX design skills.',
      'Proficient in Figma, Sketch, or Adobe XD.',
      'Experience in user research methodologies.',
      'Understanding front‑end technologies.',
      '3+ years of UX design experience.',
      'Strong visual and interaction design sense.',
      'Excellent communication and collaboration.',
      'Critical thinking and problem-solving.',
      'Attention to detail and style consistency.',
      'Ability to advocate for user-centered design.',
    ],
  },
  {
    title: 'IT Project Coordinator',
    about: `Support VICZ Ltd’s project managers by organizing resources, tracking deliverables, and ensuring projects stay on time and within budget.`,
    responsibilities: [
      'Assist in project planning and scheduling.',
      'Track project deliverables and deadlines.',
      'Coordinate meetings and logistics.',
      'Prepare status reports and documentation.',
      'Manage communication between teams.',
      'Update project plans and tools.',
      'Assist in risk identification.',
      'Maintain document repositories.',
      'Support budget tracking tasks.',
      'Facilitate stakeholder communication.',
    ],
    requirements: [
      'Degree in IT, Business, or related.',
      '1‑2 years supporting project teams.',
      'Familiarity with PM tools (Jira, Asana).',
      'Strong organizational skills.',
      'Excellent written and verbal communication.',
      'Attention to detail and accuracy.',
      'Ability to multitask efficiently.',
      'Team player with proactive mindset.',
      'Adaptability in changing priorities.',
      'Basic understanding of project processes.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    about: `As part of VICZ Ltd’s support team you will troubleshoot issues, assist clients and internal users, and maintain documentation and system health.`,
    responsibilities: [
      'Respond to support tickets and break/fix issues.',
      'Troubleshoot hardware, network, and software.',
      'Provide remote and on-site technical support.',
      'Escalate complex issues appropriately.',
      'Maintain technical documentation.',
      'Assist in software/hardware deployment.',
      'Monitor system uptime and performance.',
      'Train end-users on systems and tools.',
      'Collaborate with IT teams on issues.',
      'Report patterns and improve processes.',
    ],
    requirements: [
      'Diploma or degree in IT or related.',
      '1‑3 years in technical support roles.',
      'Proficiency with Windows, macOS, Linux.',
      'Networking basics (TCP/IP, DHCP, DNS).',
      'Excellent customer communication.',
      'Problem-solving and documentation skills.',
      'Ability to prioritize and troubleshoot.',
      'Team-oriented with strong ethics.',
      'Willingness for on-call shifts.',
      'Familiarity with ticketing systems (Zendesk).',
    ],
  },
 {
  title: 'QA/Test Engineer',
  about: `Ensure that VICZ Ltd products are bug-free and maintain high quality by leading both manual and automated testing of applications across platforms.`,
  responsibilities: [
    'Develop test plans and test cases.',
    'Perform manual and automated testing.',
    'Identify and report defects.',
    'Work closely with development teams.',
    'Run regression and performance tests.',
    'Maintain automated test suites.',
    'Review test results and logs.',
    'Define acceptance criteria.',
    'Contribute to release readiness assessments.',
    'Document and track quality metrics.',
  ],
  requirements: [
    'Bachelor’s in CS or related field.',
    'Experience with Selenium, Cypress, or similar.',
    'Able to write automated testing scripts.',
    'Knowledge of CI/CD in QA.',
    'Understanding functional and non‑functional tests.'
  ]
},
{
  title: 'IT Business Analyst',
  about: `At VICZ Ltd, our Business Analysts bridge technology and business needs. You’ll gather requirements, analyze processes, and help define solutions.`,
  responsibilities: [
    'Gather and document functional and non-functional requirements.',
    'Facilitate workshops with stakeholders.',
    'Translate business needs into technical requirements.',
    'Analyze existing workflows and suggest improvements.',
    'Collaborate with product managers and developers.',
    'Create user stories and acceptance criteria.',
    'Support QA and UAT testing efforts.',
    'Prepare project reports and documentation.',
    'Ensure alignment with business objectives.',
    'Monitor implementation progress and feedback.'
  ],
  requirements: [
    'Bachelor’s degree in Business, IT, or related.',
    '2+ years in business analysis roles.',
    'Strong analytical and problem-solving abilities.',
    'Experience with Agile methodologies.',
    'Knowledge of BPM tools and techniques.',
    'Excellent verbal and written communication.',
    'Ability to manage multiple stakeholders.',
    'Attention to detail and documentation.',
    'Understanding of data flow and system design.',
    'Certifications like CBAP are a plus.'
  ]
},

  {
    title: 'Network Engineer',
    about: `Ensure the security and performance of VICZ Ltd’s internal and client networks. This includes LAN/WAN management, configuration, and troubleshooting.`,
    responsibilities: [
      'Design and implement secure network solutions.',
      'Maintain and monitor LAN/WAN infrastructure.',
      'Configure routers, switches, and firewalls.',
      'Troubleshoot network outages and bottlenecks.',
      'Implement network policies and upgrades.',
      'Ensure high availability and disaster recovery.',
      'Maintain network documentation and diagrams.',
      'Perform regular network audits.',
      'Collaborate with security and IT teams.',
      'Stay current with networking technologies.',
    ],
    requirements: [
      'Bachelor’s degree in Networking or related field.',
      'Certifications like CCNA, CCNP preferred.',
      'Strong knowledge of TCP/IP, DNS, VPN, VLAN.',
      'Experience with Cisco, Juniper, or Fortinet.',
      'Familiarity with SD-WAN technologies.',
      'Good understanding of cybersecurity principles.',
      'Analytical mindset and troubleshooting skills.',
      'Ability to work under pressure.',
      'Experience in network monitoring tools.',
      'Strong documentation and teamwork abilities.',
    ],
  },
  {
    title: 'AI/ML Engineer',
    about: `At VICZ Ltd, you’ll develop machine learning models to support intelligent systems and data-driven solutions for clients across sectors.`,
    responsibilities: [
      'Build and train supervised/unsupervised models.',
      'Preprocess and clean large datasets.',
      'Develop AI-powered tools and solutions.',
      'Optimize algorithms for performance.',
      'Deploy models in production environments.',
      'Collaborate with data scientists and engineers.',
      'Document model architecture and performance.',
      'Keep up with latest ML research.',
      'Ensure ethical and bias-free modeling.',
      'Participate in code and design reviews.',
    ],
    requirements: [
      'Degree in AI, Data Science, or equivalent.',
      '3+ years in ML/AI development.',
      'Proficiency in Python and libraries (scikit-learn, TensorFlow).',
      'Experience with NLP, CV, or time-series modeling.',
      'Understanding of data science lifecycle.',
      'Strong statistical and analytical skills.',
      'Ability to deploy ML models with APIs.',
      'Knowledge of MLOps tools.',
      'Good communication and documentation skills.',
      'Ability to work independently and in teams.',
    ],
  },
  {
    title: 'Digital Marketing Manager',
    about: `Lead VICZ Ltd’s digital presence, content strategy, SEO/SEM, and marketing automation to attract and convert global audiences.`,
    responsibilities: [
      'Develop digital marketing strategies and campaigns.',
      'Manage SEO/SEM, email, and social media.',
      'Optimize user journeys and conversion funnels.',
      'Track KPIs and report ROI to leadership.',
      'Oversee website updates and content.',
      'Conduct competitor and keyword research.',
      'Manage digital advertising budgets.',
      'Coordinate with design/content teams.',
      'Implement automation and CRM campaigns.',
      'Stay updated on digital trends.',
    ],
    requirements: [
      'Degree in Marketing or related field.',
      '5+ years of digital marketing experience.',
      'Hands-on with SEO tools (Ahrefs, SEMrush).',
      'Proficiency with Google Ads and Analytics.',
      'Strong understanding of social platforms.',
      'Excellent communication and leadership.',
      'Creativity in campaign design.',
      'Experience in content marketing.',
      'Ability to manage remote campaigns.',
      'Familiarity with CMS and CRM tools.',
    ],
  },
  {
    title: 'Product Manager',
    about: `Lead product strategy at VICZ Ltd. From discovery to delivery, you’ll define features, prioritize roadmaps, and shape products users love.`,
    responsibilities: [
      'Define product vision, strategy, and roadmaps.',
      'Gather feedback from users and stakeholders.',
      'Prioritize features using data-driven analysis.',
      'Write user stories and acceptance criteria.',
      'Lead cross-functional product teams.',
      'Monitor KPIs and user engagement.',
      'Communicate product goals to all teams.',
      'Conduct competitor benchmarking.',
      'Coordinate launches and user onboarding.',
      'Continuously iterate based on feedback.',
    ],
    requirements: [
      'Bachelor’s in Business or related field.',
      '3+ years in product management.',
      'Strong understanding of Agile methodologies.',
      'Excellent communication and collaboration.',
      'Experience in market/user research.',
      'Familiarity with wireframing tools.',
      'Strong data and metric analysis skills.',
      'Ability to prioritize in fast-paced settings.',
      'Problem-solving mindset.',
      'Experience in B2B SaaS preferred.',
    ],
  }
];

const Careers = () => {
  return (
    <div className="px-6 py-10 bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-center">Careers at VICZ Ltd</h1>
      <p className="text-center mb-8 text-lg">
        Interested candidates are encouraged to send their CV and a brief cover letter to: <br />
        <strong className="text-blue-600">careers@viczltd.com</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {jobRoles.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">{job.title}</h2>
            <p className="mb-4">{job.about}</p>
            <h3 className="font-bold text-lg mt-4 mb-2">Responsibilities:</h3>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3 className="font-bold text-lg mt-4 mb-2">Requirements:</h3>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
