function iniciar() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (usuario === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return; 
    }
    if (usuario == "test24@gmail.com" && contraseña == "mitest24") {
        window.location.href = "principal2.html";  
    } else {
        alert("Su usuario o contraseña son inválidos");  
    }
}