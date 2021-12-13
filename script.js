 var txt='Subject: '
 function get(data){
     document.getElementById("subject").value=txt+data
 }

$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxl2l_SWztQz7pEJsAhbcGbJVBny7c5Y1y1VNAjnDgnBVpjb9zxexXZVSOnkckUIYHUTw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})