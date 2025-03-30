const featWorkContainer = document.getElementsByClassName('feat-work-container');

//Need project to have image, github link, and live link
//TODO Lon term: When hovering over thei project image
const displayProjects = (container, projects) => {
    const createProjectCard = (project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-image", "mb-5", "bg-cover", "bg-center", "h-[200px]", "rounded-lg", "w-9/10", "m-auto", "group", "shadow-lg");
        projectDiv.style.backgroundImage = `url(${project.imageURL})`; // Set background image dynamically
    
        // Create button container
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("text-center", "*:w-1/5",  "h-1/2", "py-25");
    
        if (project.githubURL) {
            // Create GitHub button
            const githubButton = document.createElement("button");
            githubButton.classList.add("github-button", "bg-cyan-300", "rounded-md", "mx-2", "duration-500", "ease-in-out", "border", "h-8", "hover:bg-sky-500", "hover:text-white", "hover:border-black", "opacity-0", "group-hover:opacity-100");
        
            const githubLink = document.createElement("a");
            githubLink.href = project.githubURL;
            githubLink.textContent = "Github";
        
            githubButton.appendChild(githubLink); // Add link inside button
            buttonContainer.appendChild(githubButton);
        }
    
        if (project.liveURL) {

            // Create Live button
            const liveButton = document.createElement("button");
            liveButton.classList.add("live-button", "bg-cyan-300", "rounded-md", "mx-2", "duration-500", "ease-in-out", "border", "h-8", "hover:bg-sky-500", "hover:text-white","hover:border-black", "opacity-0", "group-hover:opacity-100");
        
            const liveLink = document.createElement("a");
            liveLink.href = project.liveURL;
            liveLink.textContent = "Live";
        
            liveButton.appendChild(liveLink); // Add link inside button
            buttonContainer.appendChild(liveButton);
        }
    
       
        
    
        // Append container to project div
        projectDiv.appendChild(buttonContainer);
    
        return projectDiv; // Return the constructed element
;
    }

    for (let i = 0; i < 6; i++){
        const card = createProjectCard(projects[i]);
        console.log({card})
        
        // featWorkContainer.appendChild(card);
        container[0].appendChild(card); 
     }
   
                
};

const featWork = [
    {
        title: 'beat-box-office',
        imageURL: './assets/images/work-beat-box-office.PNG',
        githubURL: 'https://github.com/Kal-a11y/beat-box-office/tree/main',
        liveURL: 'https://kal-a11y.github.io/beat-box-office/'

    },
    {
        title: 'landing-page',
        imageURL: './assets/images/work-mini-project-1.png',
        githubURL: 'https://github.com/Kal-a11y/landing-page',
        liveURL: 'https://kal-a11y.github.io/landing-page/'

    },
    {
        title: 'horiseon-implement-accessibility',
        imageURL: './assets/images/work-challenge-1-project.png',
        githubURL: '',
        liveURL: 'https://kal-a11y.github.io/horiseon-implement-accessibility/'

    },
    {
        title: 'prework-study-guide',
        imageURL: './assets/images/work-prework-project.png',
        githubURL: '',
        liveURL: 'https://kal-a11y.github.io/prework-study-guide/'

    },
    {
        title: 'note-taker',
        imageURL: './assets/images/work-note-taker.PNG',
        githubURL: 'https://github.com/Kal-a11y/note-taker',
        liveURL: 'https://note-taking-4x8e.onrender.com/'

    },
    {
        title: 'career-pal',
        imageURL: './assets/images/work-career-pal.PNG',
        githubURL: 'https://career-pal-project-2-5fb6730b0a09.herokuapp.com/',
        liveURL: 'https://kal-a11y.github.io/prework-study-guide/'

    },
    {
        title: 'hotel-utility-app',
        imageURL: './assets/images/work-hotel-utility-app.PNG',
        githubURL: 'https://github.com/Kal-a11y/hotel-utility-app',
        liveURL: 'https://hotel-utility-app.onrender.com/'

    },
    {
        title: 'academa',
        imageURL: './assets/images/work-academa.PNG',
        githubURL: 'https://github.com/song-richard/academa',
        liveURL: 'https://academa-zkud.onrender.com/'

    },
    {
        title: 'book-search-engine-refactoring',
        imageURL: './assets/images/work-book-search-engine-refactoring.PNG',
        githubURL: 'https://github.com/Kal-a11y/book-search-engine-refactoring',
        liveURL: 'https://book-search-engine-dhud.onrender.com/'

    },
    {
        title: 'text-editor',
        imageURL: './assets/images/work-text-editor.PNG',
        githubURL: 'https://github.com/Kal-a11y/text-editor',
        liveURL: 'https://jate-45o7.onrender.com/'

    },
    {
        title: 'e-commerce-backend',
        imageURL: './assets/images/work-e-commerce-backend.PNG',
        githubURL: 'https://github.com/Kal-a11y/e-commerce-back-end',        liveURL: ''
    },
    {
        title: 'generate-readme-file',
        imageURL: './assets/images/work-generate-readme-file.PNG',
        githubURL: 'https://github.com/Kal-a11y/generate-readme-file',        liveURL: ''
    },
    {
        title: 'simple-svg-logo-maker',
        imageURL: './assets/images/work-simple-svg-logo-maker.PNG',
        githubURL: 'https://github.com/Kal-a11y/simple-svg-logo-maker/blob/main/assets/images/LogoGeneratorDemo.gif',        liveURL: ''
    },
    {
        title: 'weather-dashboard',
        imageURL: './assets/images/work-weather-dashboard.PNG',
        githubURL: 'https://github.com/Kal-a11y/weather-dashboard',        liveURL: 'https://kal-a11y.github.io/weather-dashboard/'
    },
    {
        title: 'work-day-scheduler',
        imageURL: './assets/images/work-work-day-scheduler.PNG',
        githubURL: 'https://github.com/Kal-a11y/Work-day-scheduler',        liveURL: 'https://kal-a11y.github.io/Work-day-scheduler/'
    },
    {
        title: 'coding-practice-quiz',
        imageURL: './assets/images/work-coding-practice-quiz.PNG',
        githubURL: 'https://github.com/Kal-a11y/coding-practice-quiz',        liveURL: 'https://kal-a11y.github.io/coding-practice-quiz/'
    },
    {
        title: 'generate-password',
        imageURL: './assets/images/work-generate-password.PNG',
        githubURL: 'https://github.com/Kal-a11y/generate-password',        liveURL: 'https://kal-a11y.github.io/generate-password/'
    },

];

//run only on home page
displayProjects(featWorkContainer, featWork);