function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 16
    msg.innerHTML = `Horário: ${hora} horas.`;
    if (hora>=0 && hora<12) {
        img.src = 'img/manha.jpg';
        document.body.style.background = '#4facf1'
    }else if (hora>=12 && hora<18) {
        img.src = 'img/tarde.jpg';
        document.body.style.background = '#f5c16e'
    }else{
        img.src = 'img/noite.jpg';
        document.body.style.background = '#014062'
    }

}