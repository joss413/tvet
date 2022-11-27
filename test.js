       

          // HOME part


function newParagraph() {

    
var element = document.createElement("p");
     
    var main = document.getElementById("main");
     
    main.appendChild(element);
     
    var text = document.createTextNode("    Producing competent, innovative and resourceful Technical and Vocational Education and Training teachers and leaders through the provisions of quality short and long term training, demand based research, technology and consultancy services in support of micro and small scale enterprises.");
     
    element.appendChild(text);

    document.getElementById("hidden").style.visibility="hidden"
    
    var pAttribute = document.createAttribute("id"); 
    pAttribute.value = "test";  
    element.setAttributeNode(pAttribute);

     

}


function removenewParagraph() {
 
    var element = document.getElementsByTagName("p")[1];
    var parent = element.parentNode;
    parent.removeChild(element);
     
     
    }


    function newText() {

        var elementp = document.createElement("p1");
             
            var section = document.getElementById("section");
             
            section.appendChild(elementp);
             
            var text = document.createTextNode("In fulfilling its Mission and achieving its vision the institute will uphold, promote and be guided by the following Core Values:Commitment for excellence,Initiative for change,Innovativeness,Resourcefulness,Team sprit,Social responsibility,Accept diversity ");
             
            elementp.appendChild(text);
        
            document.getElementById("none").style.visibility="hidden"

            var pAttribute = document.createAttribute("id"); 
            pAttribute.value = "test";  
            elementp.setAttributeNode(pAttribute);
        
             
        }

        function removenewText() {
         
            var elementp = document.getElementsByTagName("p1")[1];
            var parent = elementp.parentNode;
            parent.removeChild(elementp);
             
             
            }

      
           // Login part



            function validateTextbox() {
                var box = document.getElementById("name");
                var box2 = document.getElementById("F name");
                var box3 = document.getElementById("E-mail");
                var box4 = document.getElementById("Password");
                var box5 = document.getElementById("gender");
                var box6 = document.getElementById("day");
                var box7 = document.getElementById("signiture");
               
               
                if (box.value.length < 5 || box2.value.length < 5  || box3.value.length < 5  || box4.value.length < 5 || box5.value.length<0 || box6.value.length<0 || box7.value.length<0 ) {
                alert("Please enter at least 5 characters");
                
                     
            
               
   				
                
                
                }
                
                box.focus();
                box.style.border = "solid 3px red";
                box2.focus();
                box2.style.border = "solid 3px red";
                box3.focus();
                box3.style.border = "solid 3px red";
                box4.focus();
                box4.style.border = "solid 3px red";
                box6.focus();
                box6.style.border = "solid 3px red";


                return false;
                }
                


            // Info part

function changeStyle() {
 
        var confirmation=confirm("Click ok if u are sure");
        if (confirmation==true){
        var paragraph = document.getElementsByClassName('parag');
        
         
        document.getElementById("test").style.visibility="hidden";
         
        }

        else{
         
        }


    }

         // submit1 part

     function changeStyle() {
 
        var confirmation=confirm("Click ok if u are sure");
        if (confirmation==true){
        var paragraph = document.getElementsByClassName('para');
        
         
        document.getElementById("test").style.visibility="hidden";
         
        }

        else{
         
        }


    }
  

        // Contact us part

      function changeBackground() {
 
            var text = document.getElementById("para").style.backgroundColor = "#e7e7e7";
         
         
        }
         
        function backToNormal() {
         
            var text = document.getElementById("para").style.backgroundColor = "";
         
         
        } 

