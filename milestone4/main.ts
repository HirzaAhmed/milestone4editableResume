document.getElementById("ResumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Type Assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extract values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create Resume Output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong><span id="edit-name"class="editable"> ${name}</span></p>
            <p><strong>Email:</strong><span id="edit-email"class="editable"> ${email}</span></p>
            <p><strong>Phone:</strong><span id="edit-phone"class="editable"> ${phone}</span></p>

            <h3>Education</h3>
            <p id="edit-education"class="editable">>${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience"class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills"class="editable">${skills}</p>
        `;


        // display the resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable()
        } else {
            console.error("The resume output element is missing.");
        }
    } else {
        console.error("One or more form elements are missing.");
    }
});


function makeEditable() {
    const editableElements = document.querySelectorAll(".editable")
    editableElements.forEach(element => {
        element.addEventListener("click", function() {
            const currentElemet = element as HTMLElement
            const currentValue = currentElemet.textContent || ""
    //replace content 
    if (
        currentElemet.tagName=== "p" || currentElemet.tagName ==="span"){
            const input = document.createElement("input")
            input.type = "text"
            input.value = currentValue
            input.classList.add("editing-input")


            currentElemet.style.display = "none"
            currentElemet.parentNode?.insertBefore(input, currentElemet)
            input.focus()
        }
        })
    })
}