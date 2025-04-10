document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');
    const projectTitle = document.getElementById('project-title');
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const projectTags = document.getElementById('project-tags');
    const projectFeatures = document.getElementById('project-features');
    const projectChallenge = document.getElementById('project-challenge');
    const projectSolution = document.getElementById('project-solution');
    const projectOutcome = document.getElementById('project-outcome');
    const demoLink = document.getElementById('demo-link');
    const codeLink = document.getElementById('code-link');

    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Project data - this would ideally come from a database or JSON file
    const projectsData = {
        'spiros': {
            title: 'SpirosAI',
            image: 'assets/images/spiros.png',
            description: 'SpirosAI is an advanced AI-powered platform that helps businesses streamline their operations through intelligent automation and data analysis. Leveraging cutting-edge machine learning algorithms, SpirosAI provides actionable insights and predictive analytics to drive business growth.',
            tags: ['Angular', 'GCP', 'Full-Stack', 'AI', 'Machine Learning'],
            features: [
                'Real-time data processing and analytics',
                'Customizable dashboards for business metrics',
                'Predictive modeling and forecasting',
                'Natural language processing for automated customer service',
                'Integration with existing business systems and APIs'
            ],
            challenge: 'Developing a robust AI system that could handle diverse business data while maintaining high performance and scalability presented significant challenges. Additionally, creating intuitive user interfaces for complex data visualization required careful design considerations.',
            solution: 'We implemented a microservices architecture on Google Cloud Platform, utilizing Angular for the frontend and TensorFlow for the machine learning components. This approach allowed us to scale individual components as needed while maintaining a cohesive user experience.',
            outcome: 'SpirosAI successfully reduced operational costs for clients by an average of 23% while improving decision-making accuracy. The platform continues to evolve with regular updates and new features based on user feedback and advances in AI technology.',
            demo: 'https://example.com/spiros-demo',
            code: 'https://github.com/yourusername/spiros'
        },
        'trainlink': {
            title: 'TrainLink',
            image: 'assets/images/trainlink.png',
            description: 'TrainLink is a fitness app that seamlessly integrates with YouTube workout videos, enabling users to follow along with their favorite trainers directly in the app. It provides progress tracking, workout completion marking, and visual guidance to keep users motivated throughout their fitness journey.',
            tags: ['CSS', 'HTML', 'JS', 'Full-Stack', 'Firebase'],
            features: [
                'YouTube video integration for workout guidance',
                'Personalized workout scheduling and tracking',
                'Progress visualization with charts and statistics',
                'Custom workout creation and sharing',
                'Social features for motivation and community building'
            ],
            challenge: "Creating a smooth integration with YouTube's API while maintaining performance across devices was challenging. Additionally, designing an intuitive interface that could display video content alongside workout instructions required careful consideration of space and user interaction patterns.",
            solution: 'We built TrainLink using a responsive design approach with modern JavaScript frameworks and Firebase for backend services. This allowed us to create a seamless experience across devices while maintaining real-time synchronization of user data.',
            outcome: 'TrainLink has helped thousands of users maintain their fitness routines with a 78% retention rate after one month. The platform has grown through word-of-mouth recommendations and continues to add new features based on user feedback.',
            demo: 'https://trainlink.eu/',
            code: 'https://github.com/yourusername/trainlink'
        },
        'BarberShop': {
            title: 'BarberShop',
            image: 'assets/images/projects-placeholder.png',
            description: 'JetSky is a modern weather application that provides real-time weather data and forecasts with a beautiful, intuitive interface. Designed for both casual users and outdoor enthusiasts, JetSky offers detailed weather information in a visually appealing format.',
            tags: ['Figma', 'CSS', 'HTML', 'JavaScript', 'API Integration'],
            features: [
                'Real-time weather updates and forecasts',
                'Interactive maps with weather overlays',
                'Customizable alerts for weather changes',
                'Historical weather data analysis',
                'Location-based recommendations for outdoor activities'
            ],
            challenge: 'Creating an application that could present complex weather data in an accessible, visually appealing way while ensuring accurate information was our primary challenge. We also needed to optimize performance to handle frequent API calls without affecting user experience.',
            solution: 'We started with extensive UX research and prototyping in Figma, followed by implementation using modern web technologies. We implemented efficient API caching strategies and optimized the rendering process to ensure smooth performance even on lower-end devices.',
            outcome: 'JetSky has become a go-to weather app for outdoor enthusiasts, with users particularly appreciating the clean design and intuitive interface. The app has maintained a 4.8/5 rating across platforms and continues to grow its user base.',
            demo: 'https://example.com/jetsky-demo',
            code: 'https://github.com/yourusername/jetsky'
        }
    };

    // Load project data
    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];
        
        // Update page title
        document.title = `${project.title} - Project Details`;
        
        // Update project details
        projectTitle.textContent = project.title;
        projectImage.src = project.image;
        projectImage.alt = `${project.title} Project`;
        projectDescription.textContent = project.description;
        
        // Add tags
        projectTags.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            tagElement.textContent = tag;
            projectTags.appendChild(tagElement);
        });
        
        // Add features
        projectFeatures.innerHTML = '';
        project.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            projectFeatures.appendChild(featureItem);
        });
        
        // Set challenge, solution, and outcome
        projectChallenge.textContent = project.challenge;
        projectSolution.textContent = project.solution;
        projectOutcome.textContent = project.outcome;
        
        // Set links
        demoLink.href = project.demo;
        codeLink.href = project.code;
    } else {
        // If no valid project ID, redirect back to the main page
        window.location.href = 'index.html';
    }

    // Back button functionality
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}); 