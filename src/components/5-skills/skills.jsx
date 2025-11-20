import "./skills.css";

const Skills = () => {
    const skills = [
        {
            category: "Backend Development",
            items: ["PHP", "Laravel 12", "OOP", "RESTful APIs"]
        },
        {
            category: "Database & Storage",
            items: ["MySQL", "Database Design", "Query Optimization"]
        },
        {
            category: "Authentication & Security",
            items: ["Laravel Sanctum", "Authentication", "Authorization"]
        },
        {
            category: "Payment Integration",
            items: ["Stripe", "Fawry", "Payment Processing"]
        },
        {
            category: "Real-time Features",
            items: ["WebSocket", "Live Updates", "Notifications"]
        },
        {
            category: "Development Tools",
            items: ["Git", "GitHub", "Team Collaboration"]
        }
    ];
return (
        <section className="skills-section">
            <div className="skills-header">
                <h2 className="skills-title">Technical Skills</h2>
                <p className="skills-subtitle">
                    Specialized in backend development with modern PHP frameworks and database systems
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="skill-card" 
                        // FIX 1 & 2: Use template literals correctly with backticks
                        aria-labelledby={`skill-category-${index}`}
                    >
                        <h3 
                            id={`skill-category-${index}`} 
                            className="skill-category"
                        >
                            {skill.category}
                        </h3>
                        <div className="skill-items">
                            {skill.items.map((item, itemIndex) => (
                                <span 
                                    // FIX 3: Use a more unique key for stability
                                    key={`${skill.category}-${itemIndex}`} 
                                    className="skill-badge"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills