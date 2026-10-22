const userProfile = {
  name: "Temirlan",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["sport", "music", "web development"]
};

document.querySelector("#profile-name").textContent = userProfile.name;
document.querySelector("#profile-birth-year").textContent = userProfile.birthYear;
document.querySelector("#profile-developer").textContent = userProfile.isDeveloper ? "Yes" : "No";
document.querySelector("#profile-hobbies").textContent = userProfile.hobbies.join(", ");

console.log("userProfile:", userProfile);
