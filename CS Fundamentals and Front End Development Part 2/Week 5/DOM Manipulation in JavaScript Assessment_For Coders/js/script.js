// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  // Get the projects array from the projects.js file
  // Traverse over the projects array
  // Create a card for each project
  // Display the project details in the card
  // Append the card to the projects section in the HTML
  // The code for the View Project button is not implemented yet, it is just a sample button
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${project.image}" alt="Project Image" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="btn">View Project</button>
    `;
    document.getElementById("projects").appendChild(card);
  }
}
// This function should return the projectId of the new project
function newProjectId() {
  // Get the projects array from the projects.js file, and return the length of the array plus 1
  var newId = projects.length + 1;
  return newId;
}
// This function should save the new project details to the projects array
function saveNewProject() {
  // Create the new projectId by calling the newProjectId() function
  // Get the new project details by using the DOM elements
  // Create a new project object with the new project details and the new projectId
  // Add the new project object to the projects array
  // Load the projects after adding the new project
  var newId    = newProjectId();
  var newTitle = document.getElementById("title").value;
  var newDesc  = document.getElementById("desc").value;
  var newImage = document.getElementById("image").value;
  var newProject = {
    id: newId,
    title: newTitle,
    description: newDesc,
    image: newImage
  };
  projects.push(newProject);
  loadProjects();
  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}