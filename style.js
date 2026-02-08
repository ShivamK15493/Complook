// Development in Progress

let result = document.getElementById("output");
let compName;                    // FIX
let compani;                     // FIX
let person = document.getElementById("official");
let information = document.getElementById("info");
let descrip;
let i;
let err = document.getElementById("er");;
let next = document.getElementById("again");
URL = "company.json";

person.hidden = true;
information.hidden = true;
// https://randomuser.me/api/?results=100  . It generates random Users Profile
// https://api.thecompaniesapi.com/v1/companies/microsoft.com

// 1. Mark Zuckerberg https://i.pinimg.com/736x/34/e0/a7/34e0a74590dd473c630d7cdfa41147a7.jpg
// 2. Bill Gates https://i.pinimg.com/736x/d2/45/cf/d245cfc057a7802a6c94dc5f433d4635.jpg
// 3. Larry Page https://i.pinimg.com/1200x/7c/de/1c/7cde1c91a38e3c69e5c463ef0ad05536.jpg
// 4. Larry Ellison https://i.pinimg.com/736x/eb/ed/08/ebed085d158dd96f36dc75da085776e5.jpg
// 5. Jensen Huang https://i.pinimg.com/736x/93/cf/c7/93cfc762c673e2cbe68db5a6c675ed7a.jpg
// 6. Charles Ranlett Flint https://i.pinimg.com/736x/c5/45/02/c54502e6f552c3693e837a92bf18e042.jpg
// 7. Martin Eberhard https://i.pinimg.com/736x/6a/3a/06/6a3a06a576e2af4f2c671c105515f6d9.jpg
// 8. Steve Jobs https://i.pinimg.com/736x/88/54/02/885402332d4f7441a9b07f45b02ef499.jpg
// 9. Jeff Bezos https://i.pinimg.com/736x/61/ac/54/61ac540d84604d0486669f358bc858aa.jpg
// 10.Sachin Bansal https://i.pinimg.com/736x/c7/9c/f6/c79cf6ecf2f515d7d7b6a2d90543079e.jpg


async function getFacts()
{
    compName = document.getElementById("inp1").value; // FIX
    compani = compName.trim().toUpperCase();  

    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
  
    for(i=0;i<data.length;i++)
    {
      //  console.log(data[i]);

        if(compani === "" || data[i].company !== compani)
        {
            err.innerText="Record not found or empty";
        }
        else if(data[i].company === compani)
        {
            person.hidden = false;
            information.hidden = false;
            err.style.display="none";

            let descp = data[i].description;
            let industr = data[i].industry;
            let foundYear = data[i].founded;
            let creator = data[i].founder;
            let City = data[i].city;
            let State = data[i].state;
            let Country = data[i].country;

            

            person.innerHTML=`<img src="${data[i].pic}" width="330px" height="440px" alt="Internet error">`;
            information.innerHTML=`<div id="comp">${data[i].company}</div>
           <hr>
           <div id="ffont"><b>Description:</b> ${descp}</div>
           <hr>
           <div><b>Industry:</b> ${industr}</div>
           <hr>
           <div><b>Founded:</b> ${foundYear}</div>
           <hr>
           <div><b>Founder:</b> ${creator}</div>
           <hr>
           <div><b>City:</b> ${City}</div>
           <hr>
           <div><b>State:</b> ${State}</div>
           <hr>
           <div><b>Country:</b> ${Country}</div>
           `;
        }
    }
}

