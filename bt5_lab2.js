      let name = document.getElementById("name"),
          sexm = document.getElementById("sexm"),
          sexf = document.getElementById("sexf"),
          email = document.getElementById("email"),
          dob = document.getElementById("dob"),
          city = document.getElementById("city"),
          add = document.getElementById("add"),
          region = document.getElementById("region"),
          zip = document.getElementById("zip");
        
   function cleartext (){
        name.value ="";
        sexm.checked =false;
        sexf.checked =false;
        email.value = "";
        dob.value = "";
        city.value = "";
        add.value = "";
        region.value = "";
        zip.value = "";    
    }

  function checktext() {
        if(name.value === "" || sexm.value === "" || sexf.value===""|| email.value === "" ||
           dob.value === "" || city.value === "" || add.value === "" ||
           region.value === "" || zip.value === "") {
               alert("Sorry! you fill all text boxs");
               return;
           }
        if (sexm.checked==true && sexf.checked==true) {
              alert("Sorry! You choose only one");
              sexm.checked =false;
              sexf.checked =false;
              return ;
              }
                
        
        let str = document.getElementById("email").value; 
        var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;   
        var isvalid = emailRegexStr.test(str);         
        if (!isvalid) {        
          alert('Invalid email address!');        
          return;
        } 


        alert("Submitted");
        cleartext(); 

  }



