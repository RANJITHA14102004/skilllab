function result(){
    var name=document.getElementById("name").value;
   var mark =Math.random()*100;
   var p=document.getElementById("p");

        if(mark>=35){
            p.innerHTML=name +" pass with mark 😁😁😁😁"+mark;
        }else{
            p.innerHTML=name +" fail with mark 😥😥😥😥"+mark;
        }
    }
    