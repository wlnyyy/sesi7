function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function myForm(){
    var x= document.getElementById("form");
    if(x.style.display==="none"){
        x.style.display="block";
    }
    else {
        x.style.display="none";
    }
}



var nama=document.getElementById("nama").innerHTML;
var role=document.getElementById("role").innerHTML;
var availability=document.getElementById("availability").innerHTML;
var usia=document.getElementById("usia").innerHTML;
var lokasi=document.getElementById("lokasi").innerHTML;
var year=document.getElementById("year").innerHTML;
var email=document.getElementById("email").innerHTML;

// menampilkan section profile di section form

// change section profile to section form
 function changeText(){
     nama = "Hai";
     role= "yopppp";
     availability= document.getElementById("ans-availability").value;
     usia= document.getElementById("ans-usia").value;
     lokasi= document.getElementById("ans-lokasi").value;
     year= document.getElementById("ans-year").value;
     email= document.getElementById("ans-email").value;
 }