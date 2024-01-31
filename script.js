const developersData = [
  {
    name: "Alice James",
    programmingLanguage: "Javascript",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 100,
    image: "./images/AliceJames.jpg",
    bio: "I am Alice James, an experienced JavaScript developer with a passion for creating dynamic and responsive web applications..."
  },
  {
    name: "James Roedan",
    programmingLanguage: "Python",
    mentorshipType: "Programming_development",
    available: "No",
    pricePerHour: 60,
    image: "./images/JamesRoedan.jpg",
    bio: "Hello, I'm James Roedan, a Python enthusiast specializing in backend development and data science..."
  },
  {
    name: "Charlie Wano",
    programmingLanguage: "Java",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/CharlieWano.jpg",
    bio: "I'm Charlie Wano, a seasoned Java developer with a focus on enterprise-level applications..."
  },
  {
    name: "David Roberts",
    programmingLanguage: "Ruby",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 45,
    image: "./images/DavidRoberts.jpg",
    bio: "Greetings! I'm David Roberts, a Ruby developer with a passion for building elegant and maintainable code..."
  },
  {
    name: "Xavi Gonzalez",
    programmingLanguage: "C#",
    mentorshipType: "Resume_advice",
    available: "No",
    pricePerHour: 65,
    image: "./images/XaviGonzalez.jpg",
    bio: "Hello, I'm Xavi Gonzalez, a dedicated C# developer specializing in Windows application development and .NET technologies..."
  },
  {
    name: "Frank Jackson",
    programmingLanguage: "PHP",
    mentorshipType: "Interview_coaching",
    available: "Yes",
    pricePerHour: 40,
    image: "./images/FrankJackson.jpg",
    bio: "I am Frank Jackson, an experienced PHP developer with a strong foundation in backend web development..."
  },
  {
    name: "Henrich Burchards",
    programmingLanguage: "Swift",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/HenrichBurchards.jpg",
    bio: "Hey there! I'm Henrich Burchards, a Swift developer passionate about crafting delightful iOS applications..."
  },
];



  // DEVELOPERS LIST

  const developersWidget = document.getElementById("developers");

    developersData.forEach(developer => {
        const developerDiv = document.createElement("div");
        developerDiv.classList.add("developer");

        developerDiv.innerHTML = 
        `<div>
        <h3>${developer.name}</h3>
        <p>${developer.bio}</p>
        <p>Skill: ${developer.programmingLanguage}</p>
        <p>Available: ${developer.available}</p>
        <p>From £${developer.pricePerHour}</p>
        <p>${developer.mentorshipType}</p>
        <img src="${developer.image}">
        `
        developersWidget.append(developerDiv);
    });

  // DEVELOPERS FILTER

    function filterDevelopers(){

      const mentorshipType = document.getElementById("mentorshipType");

      const budgetInput = document.getElementById("budget_input");
      const budgetValue = parseInt(budgetInput.value);
      budgetInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
          filterDevelopers();
        }
      })
      
      console.log(budgetValue);

      if(mentorshipType.value === "Programming_development"){
        const programmingLanguageCheckboxesContainer = document.getElementById("programmingLanguageCheckboxesContainer");
        programmingLanguageCheckboxesContainer.classList.add("block");
      }

      const checkboxes = document.querySelectorAll("#programmingLanguageCheckboxesContainer input[type='checkbox']");
      const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

      const selectedLanguages = checkedCheckboxes.map(checkbox => checkbox.id);
    
      const filteredDevelopers = developersData.filter(developer => {
        return (
            (mentorshipType.value === '' || developer.mentorshipType.includes(mentorshipType.value)) &&
            (selectedLanguages.length === 0 || selectedLanguages.includes(developer.programmingLanguage)) &&
            (!budgetValue || developer.pricePerHour <= budgetValue) // JOE COME BACK TO THIS.
        );
    });

    console.log(mentorshipType);

 // RENDERING THE FILTERED DEVELOPERS
   
    renderDevelopers(filteredDevelopers);
    }

    function renderDevelopers(filteredDevelopers) {
      const developersWidget = document.getElementById("developers");
      // Clear existing content
      developersWidget.innerHTML = "";
  
      // Render filtered developers
      filteredDevelopers.forEach(developer => {
          const developerDiv = document.createElement("div");
          developerDiv.classList.add("developer");
  
          developerDiv.innerHTML = `
              <h3>${developer.name}</h3>
              <p>${developer.bio}</p>
              <p>Skill: ${developer.programmingLanguage}</p>
              <p>Available: ${developer.available}</p>
              <p>From £${developer.pricePerHour}</p>
              <img src="${developer.image}">
          `;
  
          // Add click event listener to developerDiv
          developerDiv.addEventListener("click", () => showDeveloperDetails(developer, developersWidget));
  
          developersWidget.appendChild(developerDiv);
      });
  }
  

  //SHOWING  A SPECIFIC DEVELOPER.

function showDeveloperDetails(developer, developersWidget) {
    // Clear existing content
    developersWidget.innerHTML = "";

    const developerDetailDiv = document.createElement("div");
    developerDetailDiv.classList.add("developer-detail");

    developerDetailDiv.innerHTML = `
        <h3>${developer.name}</h3>
        <p>${developer.bio}</p>
        <p>Skill: ${developer.programmingLanguage}</p>
        <p>Available: ${developer.available}</p>
        <p>From £${developer.pricePerHour}</p>
        <p>${developer.mentorshipType}</p>
        <img src="${developer.image}">
        <p>IM A DETAIL VERSION</p>
    `;

    // Append developerDetailDiv to developersWidget
    developersWidget.appendChild(developerDetailDiv);
}


    // CONTACT FORM SUBMIT

    function submitForm() {
        const currentSkills = document.getElementById("currentSkills");
        const desiredSkills = document.getElementById("desiredSkills");
        const availability = document.getElementById("availability");

        if (!currentSkills || !desiredSkills || !availability) {
            const error = document.createElement("p");
            error.textContent = "All fields have to be completed";
            const notice = document.getElementById("notice");
            notice.append(error);
        }
    }

    // FOOTER

    const footerElement = document.getElementById("footer");
    const date = new Date().getFullYear();
    footerElement.append(date);
    footerElement.append(" Software Mentor. All rights reserved")
    