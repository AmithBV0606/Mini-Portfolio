// Click events for buttons
const portfolio = document.getElementById("portfolio")
// console.log(portfolio);
const portfoliobtn = document.getElementById("portfolio-btn")
// console.log(portfoliobtn)
const skills = document.getElementById("skills")
// console.log(skills)
const skillsbtn = document.getElementById("skills-btn")
// console.log(skillsbtn);

// Eventlistner
portfoliobtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";

    skillsbtn.classList.remove("active-btn");
    portfoliobtn.classList.add("active-btn");
});

skillsbtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";

    portfoliobtn.classList.remove("active-btn");
    skillsbtn.classList.add("active-btn")
});

// Light and Dark mode : 
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubLogo = document.querySelector('img[alt="github logo"]');
    const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    const emailLogo = document.querySelector('img[alt="email logo"]');

    const lightlogos = {
        theme: "./assets/theme_light.png",
        github: "./assets/github_light.png",
        linkedin: "./assets/linkedin_light.png",
        email:"./assets/email_light.png"
    }

    const darklogos = {
        theme: "./assets/theme_dark.png",
        github: "./assets/github_dark.png",
        linkedin: "./assets/linkedin_dark.png",
        email:"./assets/email_dark.png"
    }

    function setTheme(isDark) {
        themeIcon.src = isDark ? darklogos.theme : lightlogos.theme;
        githubLogo.src = isDark ? darklogos.github : lightlogos.github;
        linkedinLogo.src = isDark ? darklogos.linkedin : lightlogos.linkedin;
        emailLogo.src = isDark ? darklogos.email : lightlogos.email;
    }

    toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme")
        // console.log("isDark : ", isDark); // Returns true or false
        setTheme(isDark)
        localStorage.setItem("isDark", isDark);

    })

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true"
        setTheme(isDark)
        document.body.classList.toggle("dark-theme", isDark);
    }

    loadTheme();
    
});