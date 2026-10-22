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

const currentYear = new Date().getFullYear();
const currentAge = currentYear - userProfile.birthYear;
const hobbiesCount = userProfile.hobbies.length;

document.querySelector("#profile-age").textContent = currentAge;
document.querySelector("#profile-hobbies-count").textContent = hobbiesCount;

document.querySelector("#profile-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const birthYear = Number(document.querySelector("#birth-year").value);

  userProfile.name = username;
  userProfile.birthYear = birthYear;

  document.querySelector("#profile-name").textContent = userProfile.name;
  document.querySelector("#profile-birth-year").textContent = userProfile.birthYear;
  document.querySelector("#profile-age").textContent = new Date().getFullYear() - userProfile.birthYear;
});

console.log("userProfile:", userProfile);
