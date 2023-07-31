const sendTheMail = () => {
    console.log("Send the mail");
    var emailValue = document.getElementById("email");
    var messageValue = document.getElementById("message");
    var nameValue = document.getElementById("name");

    var string = "Hello";

    if(emailValue == null || messageValue == null || nameValue == null || emailValue.length == 0 || messageValue.length == 0 || nameValue.length == 0)
        alert("Please enter all the values");
    
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/send_email');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          to: 'nsragvi@gmail.com',
          from: emailValue,
          subject: 'This is a test email',
          body: messageValue
        }));
        
}