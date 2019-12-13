var opened_lists = 0;

$('.new_card').keypress(function(event){
    if(event.which === 13){
        var parentId = $(this).parent().attr('id');
        var todoText = $(this).val();
        $(this).val("");
        if(parentId=='list1')
                $('#list1_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list2')
                $('#list2_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list3')
                $('#list3_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list4')
                $('#list4_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list5')
                $('#list5_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list6')
                $('#list6_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list7')
                $('#list7_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list8')
                $('#list8_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list9')
                $('#list9_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
        else if(parentId=='list10')
                $('#list10_ul').append('<li>' + todoText + '<span class = "del"><i class="fas fa-trash-alt"></i></span></li>');
    }
});

$('ul').on('click', ".del", function(event){
   $(this).parent().fadeOut(300, function(){
      $(this).remove();
   }); 
    event.stopPropagation();
});


$('ul').on('click', ".details", function(event){
   alert("hi");
});


$('ul').on('click', 'li', function(){
   $(this).toggleClass('done');
});

var all_lists = new Array();

/*function addlist(e) {
    if (e.keyCode == 13) {
        all_lists.push(e.target.value);
        listsTd.innerHTML = " <h4> "+ all_lists.pop()+" </h4>"; 
        listsTd.style.backgroundColor = '#EBECF0';
        listsTd.style.borderRadius = '5px';
        listsTd.style.width ='250px';
        listsTd.style.height = '40px';
        listsTd.innerHTML += '<button class="add_list_btn" id= "addlist"> + Add List</button>';
    }
}*/

function addList(){
    if(opened_lists <= 9)
        {
            var list_name;
            do{
                list_name = prompt("Enter List Title (Max length 25).. ");
            }while(list_name =='' || list_name.length>25);
        }
    
    //Cheacking for the Tempalete Boards ... 
    if(document.getElementById('list1').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list2').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list3').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list4').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list5').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list6').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list7').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list8').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list9').style.visibility == 'visible')
        opened_lists++;
    if(document.getElementById('list10').style.visibility == 'visible')
        opened_lists++;
    
     if(!(list_name === null)){ //User not pressing cancel
         switch (opened_lists) {
      case 0:
        document.getElementById('list1').style.visibility = 'visible';
        document.getElementById('list1_title').innerHTML =list_name;
        opened_lists+=1;
        break;
      case 1:
        document.getElementById('list2').style.visibility = 'visible';
        document.getElementById('list2_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 2:
        document.getElementById('list3').style.visibility = 'visible';
        document.getElementById('list3_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 3:
        document.getElementById('list4').style.visibility = 'visible';
        document.getElementById('list4_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 4:
        document.getElementById('list5').style.visibility = 'visible';
        document.getElementById('list5_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 5:
        document.getElementById('list6').style.visibility = 'visible';
        document.getElementById('list6_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 6:
        document.getElementById('list7').style.visibility = 'visible';
        document.getElementById('list7_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 7:
        document.getElementById('list8').style.visibility = 'visible';
        document.getElementById('list8_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 8:
        document.getElementById('list9').style.visibility = 'visible';
        document.getElementById('list9_title').innerHTML =list_name;
        opened_lists++;
        break;
      case 9:
        document.getElementById('list10').style.visibility = 'visible';
        document.getElementById('list10_title').innerHTML =list_name;
        opened_lists++;
        break;
      default:
            alert("Sorry .. you can't create more than 10 lists");
    }
     }
             
}

var boardsExpended = false;
function openCloseBoards(){
    if(!boardsExpended)
    {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementsByClassName("header_nav")[0].style.marginLeft = "250px";
        document.getElementsByClassName("board")[0].style.marginLeft = "250px";
        document.getElementsByClassName("right")[0].style.marginRight = "250px";
        boardsExpended= true;
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementsByClassName("header_nav")[0].style.marginLeft = "0";
        document.getElementsByClassName("board")[0].style.marginLeft = "0"; 
        document.getElementsByClassName("right")[0].style.marginRight = "0";
        boardsExpended = false;
    }
}

function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("header_nav")[0].style.marginLeft = "0";
    document.getElementsByClassName("board")[0].style.marginLeft = "0";         document.getElementsByClassName("right")[0].style.marginRight = "0";
    boardsExpended = false;
}

function updateTheme(color)
{
    var top_nav = document.getElementById("headerNav");
    var top_nav_color;
    
    var icone_color;


    switch (color){
        case '0079BF':
            top_nav_color ="0067A3";
            icone_color = "66A4C8";
            break;
        
        case 'D29034':
            top_nav_color ="B37B2C";
            icone_color ="E1B475";
            break;
        
        case '519839':
            top_nav_color="458131";
            icone_color="89B979";
            break;
        
        case 'B04632':
            top_nav_color="963C2B";
            icone_color="CA8274";
            break;
        
        case '89609E':
            top_nav_color="755287";
            icone_color="AF93BD";
            break;
        
        case 'CD5A91':
            top_nav_color="AF4D7B";
            icone_color="DD8FB5";
            break;
        
        case '4BBF6B':
            top_nav_color="40A35B";
            icone_color="85D49B";
            break;
        
        case '00AECC':
            top_nav_color="0094AE";
            icone_color="52C8DD";
            break;
        
        case '838C91':
            top_nav_color="70777B";
            icone_color="ABB1B5";
            break;
    }   
    
    document.body.style.backgroundColor = "#"+color;
    
    top_nav.style.backgroundColor = "#"+top_nav_color;
    
    var icons = document.getElementsByClassName("navIcon");
    for(var i = 0; i < icons.length; i++)
    {
       icons.item(i).style.backgroundColor = "#"+icone_color;
    }
    
    document.getElementById("board_title").style.backgroundColor ="#"+color;
    
}

var favorite = false;
function toggle_favorite()
{
    if(favorite)
        {
            document.getElementById('not_fav_icon').style.display = 'none';
            document.getElementById('fav_icon').style.display = 'inline';
            favorite=false;
        } else {
            document.getElementById('fav_icon').style.display = 'none';
            document.getElementById('not_fav_icon').style.display = 'inline';
            favorite=true;
    }
}

var board_members = new Array();
function addMember(){
    
    do{
        var member_email = prompt('Enter email of the member: ');
        var correct_format = validateEmail(member_email);
        if(correct_format)
            {
                
                var member_exist = board_members.includes(member_email);
                if(member_exist)
                    {
                        alert("This member is already added in this board");
                        continue;
                    }
                else{
                    board_members.push(member_email);
                }   
            }
    }while(!correct_format || member_exist);
    
    var x=document.getElementById("members"); 
    
    newLI = document.createElement("li");
    newLI.style.float = 'left';
    newLI.style.listStyle = 'none';
    
    newA = document.createElement("a");
    newA.className ="icon_btn";
    newA .classList += " navIcon";
    newA.title = member_email;
    
    newIcon = document.createElement("i");
    newIcon.className = "far fa-user";

    newLI.appendChild(newA);
    newA.appendChild(newIcon);
    x.appendChild(newLI);
}


function validateEmail(email){
        if(email.match(/^\S+@\S+.com$/))
            return true;
    return false;
}