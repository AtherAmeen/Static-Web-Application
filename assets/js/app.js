$(function(){
    $('#tabs  .tab').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        let tab = $(this).attr('tab');
        let tabData = "lightbox-"+tab;

        $(`#lightboxes .lightbox`).hide();
        $(`#lightboxes .${tabData}`).show();
    })
})


function contactUs(){
    // alert("Thanks for your feedback");
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var mobileNumber= document.getElementById('Number').value;
    console.log(name);
    console.log(email);
    console.log(mobileNumber)
    if (name===""||email===""||mobileNumber===""){
        alert("plaease fill the required fields")
        return false;
    }else
    {
        localStorage.setItem('Name',name);
        localStorage.setItem('Email',email);
        localStorage.setItem('mobileNumber',mobileNumber);
        alert('Name:'+ name +'\nEmail:'+email + "\nMobile Number:"+mobileNumber);
    }
}