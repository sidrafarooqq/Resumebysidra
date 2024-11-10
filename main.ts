// Get the "Toggle Skills" button and the skills list container
const toggleButton = document.querySelector('button');
const skillsContainer = document.querySelector('.resume') as HTMLElement; // Assuming your skills list is inside this container

// Check if the button and skills container are present
if (toggleButton && skillsContainer) {
    // Add an event listener to the button
    toggleButton.addEventListener('click', () => {
        const skillsList = skillsContainer.querySelector('ul') as HTMLElement;
        
        // Toggle the visibility of the skills list (keep the div background color visible)
        if (skillsList.style.visibility === 'hidden') {
            skillsList.style.visibility = 'visible';  // Show skills
        } else {
            skillsList.style.visibility = 'hidden';   // Hide skills but keep the div color
        }
    });
}