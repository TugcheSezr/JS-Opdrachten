document.querySelector('.add-btn').addEventListener('click', function(){
  const userName = document.querySelector('.name').value;
  const userAge = document.querySelector('.age').value;
  const userLengte = document.querySelector('.lengte').value;
  
  console.log(userName);
  console.log(userAge);
  console.log(userLengte);

      const output = document.querySelector(".output");
      output.innerHTML = `
      <p> Naam: ${userName}</p>
      <p> Age: ${userAge}</p>
      <p> Lengte: ${userLengte}</p>
      `;
});
