import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { animate, inView, stagger } from "motion";
import contactAnimation from "../../animation/contact.json";
import "./contact.css";
// 💡 Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, // للمغلف في الهيدر
  faArrowRight, // للسهم
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp, // للواتساب
  faLinkedinIn, // للينكد إن
  faGithub, // للجيت هاب
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contactInfo = [
    {
      // 🚨 تم التعديل
      icon: faEnvelope, // نستخدم الـIcon Object
      title: "Email Address",
      details: "mostafaelkholy4321@gmail.com",
      link: "mailto:mostafaelkholy4321@gmail.com",
      description: "Send me a detailed email about your project or inquiry.",
    },
    {
      // 🚨 تم التعديل
      icon: faWhatsapp,
      title: "Phone / WhatsApp",
      details: "+20 155 065 0143",
      link: "https://wa.me/201550650143",
      target: "_blank",
      description: "The fastest way to reach me for quick discussions.",
    },
    {
      // 🚨 تم التعديل
      icon: faLinkedinIn,
      title: "LinkedIn Profile",
      details: "Mostafa Elkholy",
      link: "https://www.linkedin.com/in/mostafa-elkholy-4333b3262/",
      target: "_blank",
      description: "Connect professionally and view my full history.",
    },
    {
      // 🚨 تم التعديل
      icon: faGithub,
      title: "GitHub Repositories",
      details: "mostafaelkholy50",
      link: "https://github.com/mostafaelkholy50",
      target: "_blank",
      description: "Explore my code, contributions, and open-source projects.",
    },
  ];

  const sectionRef = useRef(null); // --- Animation on Scroll into View

  useEffect(() => {
    if (!sectionRef.current) return;

    const cleanup = inView(sectionRef.current, () => {
      const items = sectionRef.current.querySelectorAll(".contact-info-card");
      animate(
        items,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.7, easing: "ease-out", delay: stagger(0.1) }
      );
      animate(
        ".contact-animation-container",
        { opacity: [0, 1], scale: [0.9, 1] },
        { duration: 1, delay: 0.2 }
      );
    });
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact-us">
      {/* Header */}
      <div className="section-header">
        <h1 className="title">
         <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
        </h1>
      </div>
      <div className="contact-main-grid">
        {/* Lottie Animation (Left Side) */}
        <div className="contact-animation-container flex">

          <Lottie
            animationData={contactAnimation}
            loop={true}
            style={{ height: 350, width: "100%" }}
            aria-hidden="true"
          />

        </div>
        {/* RIGHT COLUMN: Contact Info Cards */}
        <div className="contact-info-column">

          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.target || "_self"}
              rel={item.target === "_blank" ? "noopener noreferrer" : ""}
              className="contact-info-card flex"
              aria-label={`Contact via ${item.title}`}
            >
             <FontAwesomeIcon icon={item.icon} className="info-icon" />

              <div className="info-details">
                <h3 className="info-title">{item.title}</h3>
                <p className="info-text details">{item.details}</p>

                <p className="info-text description">{item.description}</p>

              </div>
              <span className="icon-arrow-right contact-arrow" />

            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Contact;
