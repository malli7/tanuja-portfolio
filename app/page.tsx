"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Zap,
  Award,
  Calendar,
  Building,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java"],
    "Frontend Frameworks": ["React.js", "Next.js", "Tailwind CSS", "HTML5"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes"],
    "Tools & Others": ["Git", "GitHub", "Jira", "Figma", "Tableau", "Power BI"],
  }

  const projects = [
    {
      title: "Job Discovery Dashboard for Freshers",
      description: "Full-stack job discovery platform with AI-driven resume matching and real-time analytics",
      tech: ["Next.js", "TypeScript", "Firebase", "OpenAI", "Chart.js"],
      features: [
        "AI-powered resume matching using OpenAI",
        "Real-time job aggregation from LinkedIn, Indeed, Google Jobs",
        "Interactive analytics dashboards",
        "Secure Firebase Authentication",
      ],
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "MediLink – Patient-Doctor Portal",
      description: "Real-time communication platform for seamless patient-doctor interactions",
      tech: ["React.js", "Next.js", "TypeScript", "WebSocket", "Azure"],
      features: [
        "Real-time messaging with WebSocket",
        "Appointment scheduling system",
        "Secure data exchange with RESTful APIs",
        "Azure Cloud Services integration",
      ],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Smart Fit – AI Fitness Dashboard",
      description: "AI-powered fitness analytics platform with personalized insights",
      tech: ["React", "Next.js", "Chart.js", "OpenAI", "Docker", "Azure"],
      features: [
        "Real-time workout and nutrition tracking",
        "AI-generated personalized insights",
        "Dynamic data visualizations",
        "Docker deployment on Azure",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Carelon Global Solutions",
      location: "Hyderabad, India",
      period: "July 2022 – July 2023",
      achievements: [
        "Led development of responsive web applications using React.js, Next.js, and TypeScript",
        "Translated complex Figma designs into pixel-perfect, accessible UI components",
        "Led cloud integration efforts deploying applications on Azure with Docker and Kubernetes",
        "Built and maintained CI/CD pipelines using GitHub Actions and Jira",
        "Integrated RESTful APIs for dynamic data rendering",
        "Implemented automated testing with Jest",
      ],
    },
    {
      title: "Pega Intern Delivery",
      company: "Virtusa",
      location: "Hyderabad, India",
      period: "Jan 2022 – Apr 2022",
      achievements: [
        "Developed enterprise-grade applications utilizing Pega, enhancing operational efficiency by 15%",
        "Configured decision rules and data pages for real-time analytics",
        "Designed front-end views and forms with Pega's UI tools",
        "Automated backend processes, reducing processing time by 20%",
      ],
    },
  ]

  const certifications = [
    "Pega Certified Senior System Architect (PCSSA) 8.6",
    "Pega Certified System Architect (PCSA) 8.4",
    "Java Programming - Oracle Academy",
    "Database Programming with PLSQL - Oracle Academy",
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Tanuja Madireddy
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-slate-200"
            >
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div style={{ opacity, scale }} className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Innovative Front-End Developer with expertise in React.js, Next.js, and TypeScript. Passionate about
                creating scalable, accessible web applications that deliver exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() =>
                  window.open(
                    "mailto:tanujamadireddy@gmail.com?subject=Job Opportunity&body=Hi Tanuja, I would like to discuss a potential opportunity with you.",
                    "_blank",
                  )
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                onClick={() => {
                  // Create a temporary link to download resume
                  const link = document.createElement("a")
                  link.href = "/resume.pdf" // You'll need to add your resume PDF to the public folder
                  link.download = "Venkata_Tanuja_Madireddy_Resume.pdf"
                  link.click()
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <div className="flex items-center text-slate-600">
                <MapPin className="w-5 h-5 mr-2" />
                Saint Louis, MO
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="w-5 h-5 mr-2" />
                +1 (314) 398-7857
              </div>
              <div className="flex items-center text-slate-600">
                <Mail className="w-5 h-5 mr-2" />
                tanujamadireddy@gmail.com
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proficient in modern web technologies and cloud platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {category === "Programming Languages" && <Code className="w-5 h-5 mr-2 text-blue-600" />}
                      {category === "Frontend Frameworks" && <Monitor className="w-5 h-5 mr-2 text-green-600" />}
                      {category === "Cloud & DevOps" && <Cloud className="w-5 h-5 mr-2 text-purple-600" />}
                      {category === "Tools & Others" && <Database className="w-5 h-5 mr-2 text-orange-600" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Building scalable solutions and driving digital transformation
            </p>
          </motion.div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2 flex items-center">
                          <Building className="w-6 h-6 mr-3 text-blue-600" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                    {"Master's in Computer and Information Science"}
                  </CardTitle>
                  <CardDescription>Saint Louis University • Aug 2023 – May 2025</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-green-600" />
                   {" Bachelor's in Computer Science and Engineering"}
                  </CardTitle>
                  <CardDescription>B V Raju Institute of Technology • Jun 2018 – Jun 2022</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-3 text-yellow-600" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Innovative solutions showcasing full-stack development expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">{project.icon}</div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             {" Let's Connect"}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             {" Ready to bring innovative ideas to life. Let's discuss how I can contribute to your team."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <Mail className="w-8 h-8 mb-3 text-blue-600" />
                    <span className="font-medium mb-2">Email</span>
                    <a
                      href="mailto:tanujamadireddy@gmail.com?subject=Job Opportunity&body=Hi Tanuja, I would like to discuss a potential opportunity with you."
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      tanujamadireddy@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    <Phone className="w-8 h-8 mb-3 text-green-600" />
                    <span className="font-medium mb-2">Phone</span>
                    <a
                      href="tel:+13143987857"
                      className="text-green-600 hover:text-green-800 transition-colors duration-200"
                    >
                      +1 (314) 398-7857
                    </a>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg">
                    <MapPin className="w-8 h-8 mb-3 text-purple-600" />
                    <span className="font-medium mb-2">Location</span>
                    <span className="text-purple-600">Saint Louis, MO</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://github.com/tanujamadireddy", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://linkedin.com/in/tanujamadireddy", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() =>
                      window.open(
                        "mailto:tanujamadireddy@gmail.com?subject=Job Opportunity&body=Hi Tanuja, I would like to discuss a potential opportunity with you.",
                        "_blank",
                      )
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Venkata Tanuja Madireddy. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
