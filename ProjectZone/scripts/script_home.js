switch(localStorage.getItem("type")) {
          case "Personal":
            board_section=document.getElementById("personal");
            document.getElementById("personal_title").style.color = "black";
            break;
          case "Business":
            board_section=document.getElementById("business");
            document.getElementById("business_title").style.color = "black";
            break;
          case "Education":
            board_section=document.getElementById("education");
            document.getElementById("education_title").style.color = "black";
            break;
          case "Design":
            board_section=document.getElementById("design");
            document.getElementById("design_title").style.color = "black";
            break;
          case "Engineering":
            board_section=document.getElementById("engineering");
            document.getElementById("engineering_title").style.color = "black";
            break;
          case "Marketing":
            board_section=document.getElementById("marketing");
            document.getElementById("marketing_title").style.color = "black";
            break;
          case "Hr and Operations":
            board_section=document.getElementById("hrandOp");
            document.getElementById("hrandOp_title").style.color = "black";
            break;
          case "Productivity":
            board_section=document.getElementById("productivity");
            document.getElementById("productivity_title").style.color = "black";
            break;
          case "Product Management":
            board_section=document.getElementById("productMang");
            document.getElementById("productMang_title").style.color = "black";
            break;
          case "Project Management":
            board_section=document.getElementById("projectManagment");
            document.getElementById("projectManagment_title").style.color = "black";
            break;
          case "Sales":
            board_section=document.getElementById("sales");
            document.getElementById("sales_title").style.color = "black";
            break;
          case "Support":
            board_section=document.getElementById("support");
            document.getElementById("support_title").style.color = "black";
            break;
          case "Team Management":
            board_section=document.getElementById("team");
            document.getElementById("team_title").style.color = "black";
            break;
        } 

newDiv = document.createElement("div");
            newDiv.className = "col-lg-4 col-md-6 mb-4";
            
            newDiv2 = document.createElement("div");
            newDiv2.className = "card h-100";
           
            newa = document.createElement("a");
            newa.href = "boards.html";
        
            newDiv3 = document.createElement("div"); 
            newDiv3.style.width = "253px";
            newDiv3.style.height = "50px";
            newDiv3.style.backgroundColor = "#0079BF";
            
            newDiv4 = document.createElement("div");
            newDiv4.className ="card-body";
        
            newH4 = document.createElement("h4");
            newH4.className="card-title";
        
            newa2 = document.createElement("a");
            newa2.href = "boards.html";
            newa2.innerHTML= localStorage.getItem("title");        
            
        
            newI = document.createElement("i");
            var is_private = localStorage.getItem("private_public");
            if(is_private == "private")
                newI.className="fas fa-lock";
            else
               newI.className="fas fa-lock-open";
        
            newH5 = document.createElement("h5");
            newH5.style.display ="inline";
            newH5.innerHTML = " "+ localStorage.getItem("private_public");
        
            newP = document.createElement("p");
            newP.className ="card-text";
            newP.style.marginTop = "10px";
            newP.innerHTML = localStorage.getItem("des");
        
            newDiv5 = document.createElement("div");
            newDiv5.className = "card-footer";
            newI2= document.createElement("i");
            newI2.className="fas fa-users";
            newP2 =document.createElement("p");
            newP2.style.display="inline";
            newP2.style.marginLeft="5px";
            newP2.innerHTML= "1 Member";
        
            newDiv.appendChild(newDiv2);
            newDiv2.appendChild(newa);
            newa.appendChild(newDiv3);
        
            newDiv2.appendChild(newDiv4);
            newDiv4.appendChild(newH4);
            newH4.appendChild(newa2);
        
            newDiv4.appendChild(newI);
            newDiv4.appendChild(newH5);
            newDiv4.appendChild(newP);
        
            newDiv2.appendChild(newDiv5); //footer
            newDiv5.appendChild(newI2);
            newDiv5.appendChild(newP2);
        
            board_section.appendChild(newDiv);
        