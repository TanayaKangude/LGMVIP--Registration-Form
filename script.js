let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
   


   //storing the data in objects getting from form
    const data={
        roll: document.getElementById("roll").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mob: document.getElementById("mob").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <div class="RollContainer">${data.roll}</div>
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:anushaviswanathan55610@ieee.org">${data.email}</a><br>
      <div class="MobileContainer">${data.mob}</div>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})
