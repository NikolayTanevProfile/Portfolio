document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const projectCards = document.querySelectorAll('.project-card');

    // Comment out project cards click functionality
    /*
    // Make project cards clickable
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get project title
            const projectTitle = card.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '');
            
            // Navigate to project details page with project ID as parameter
            window.location.href = `project-details.html?id=${projectTitle}`;
        });
        
        // Add cursor pointer to indicate clickability
        card.style.cursor = 'pointer';
    });
    */

    // Handle timeline dot highlighting on scroll
    if (timeline) {
        // Initially highlight the first dot
        timelinePoints[0].classList.add('filled');
        
        timeline.addEventListener('scroll', function() {
            const scrollPosition = timeline.scrollTop;
            let activeIndex = 0;
            
            // Calculate which item is most visible in the viewport
            timelineItems.forEach((item, index) => {
                const itemTop = item.offsetTop - timeline.offsetTop;
                const itemBottom = itemTop + item.offsetHeight;
                
                // If item is in view, consider it active
                if (itemTop <= scrollPosition + 150 && itemBottom >= scrollPosition) {
                    activeIndex = index;
                }
            });
            
            // Update all dots based on the active index
            timelinePoints.forEach((point, index) => {
                if (index === activeIndex) {
                    point.classList.add('filled');
                } else {
                    point.classList.remove('filled');
                }
            });
        });
    }

    // Predefined responses based on keywords
    const responses = {
        'experience': 'I have experience in web development using Angular, GCP, and frontend technologies. I\'ve worked on projects like SPIROS, TrainLink, and JetSky.',
        'education': 'I studied Virtual Realities at SRH University Heidelberg from Oct. 2021 to Oct. 2024.',
        'skills': 'My skills include Angular, GCP, Frontend development, CSS, HTML, JS, Full-Stack development, Firebase, and Figma.',
        'projects': 'I\'ve worked on SPIROS, TrainLink, and JetSky. Would you like to know more about any of these projects?',
        'contact': 'You can reach me through LinkedIn, GitHub, or Twitter. The links are available in my profile.',
        'hello': 'Hello! I\'m glad you\'re interested in my portfolio. Feel free to ask about my experience, projects, or skills.',
        'spiros': 'SPIROS is a project built with Angular, GCP, and frontend technologies. It\'s focused on [add specific details about SPIROS project here].',
        'trainlink': 'TrainLink is a full-stack project using CSS, HTML, JS, and Firebase. It [add specific details about TrainLink project here].',
        'jetsky': 'JetSky is a design and development project created with Figma, CSS, and HTML. It [add specific details about JetSky project here].'
    };

    // Default fallback responses
    const fallbackResponses = [
        "That's an interesting question. I'd be happy to discuss that in more detail if you reach out to me directly.",
        "Thanks for your question! I'd be glad to share more details about that when we connect.",
        "Great question! That's something I'd love to elaborate on in a direct conversation.",
        "I appreciate your interest! Let's discuss that further when we connect."
    ];

    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.classList.add(isUser ? 'user' : 'system');
        
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        messageElement.appendChild(paragraph);
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for keyword matches
        for (const [keyword, response] of Object.entries(responses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Return random fallback response if no keyword match
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, true);
        
        // Clear input
        chatInput.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = getResponse(message);
            addMessage(response);
        }, 1000);
    }

    // Event listeners
    sendButton.addEventListener('click', handleSendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
}); 