document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const agent = e.target.agent.value.trim();
  console.log("DEBUG agent=", agent);
  greet(agent);
});
