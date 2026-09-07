 document.getElementById("cta").innerHTML = "Buy Now!";
    const openbtn = document.getElementById('cta');
    const closebtn = document.getElementById('r-btn');
    const modal = document.getElementById('modal');

    openbtn.addEventListener('click', () =>

    {
        modal.ShowModal();
    })
   // let FIl = document.getElementById('fil1');
   let Fil = parseFloat("90.3");
   let Eng =parseFloat("92.1");
   let math = parseFloat("93.9");
   let Sci = parseFloat("90.5");
   let APs = parseFloat("95.4");
   
   let average = (Fil + Eng + math + Sci + APs)/5 ;


   
    console.log(`Average: ${average}`);
    let name = "RJD SHOP";
    let newname = "RJD ONLY";
    

    let paragraph =    `My Name is ${name}`;
    console.log(paragraph);

    paragraph = paragraph.replace(name,newname);

    alert(paragraph);
    document.getElementById("name").innerHTML = name; 
//alert(name[name.length - 1]);

    //let searches = "New World"

   // searches = searches.toUpperCase();

   // alert(searches);

  // function alerts() {
     //   let input = document.getElementById('searchs').value;
      //  input = input.toUpperCase();
      //  input = input.trim();
        

    //    alert(input);
        

//   }


function ShowModal() {
    
    document.getElementById('modal').style.display = "block";
}

function CloseModal() {
    document.getElementById('modal').style.display = "none";
}

function changeName() {
    let names = document.getElementById('name').value; 
    let newnames = document.getElementById('newname').value;
    document.getElementById('name').replace(names,newnames);

    //let newnames = document.getElementById('newname').value;
    

    
    
}
