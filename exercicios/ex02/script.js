function resultado(){
    var nasc = window.document.getElementById('nasc');
    var data = new Date();
    var ano = data.getFullYear();
    //alert(nasc.value);
    if (nasc.value==0 || nasc.value>ano) {
        alert('[ERRO] Veridique se os dados estão corretos!');
    }else{
        var sex = window.document.getElementsByName('sex');
        var idade = ano - Number(nasc.value);
        var res = document.getElementById('res');
        var img = document.getElementById('imagem');
        
        if (sex[0].checked) {
            if (idade>0 && idade<12) {
                res.innerHTML = `É um menino de ${idade} anos.`;
                img.src = 'img/ch.jpg'
            }
            else if (idade<25) {
                res.innerHTML = `É um jovem de ${idade} anos.`;
                img.src = 'img/jh.jpg'
            }
            else if (idade<50) {
                res.innerHTML = `É um adulto de ${idade} anos.`;
                img.src = 'img/ah.jpg'
            }
            else {
                res.innerHTML = `É um idoso de ${idade} anos.`;
                img.src = 'img/ih.jpg'
            }
        }

        if (sex[1].checked) {
            if (idade>0 && idade<12) {
                res.innerHTML = `É uma menina de ${idade} anos.`;
                img.src = 'img/cm.jpg'
            }
            else if (idade<25) {
                res.innerHTML = `É uma jovem de ${idade} anos.`;
                img.src = 'img/jm.jpg'
            }
            else if (idade<50) {
                res.innerHTML = `É uma adulta de ${idade} anos.`;
                img.src = 'img/am.jpg'
            }
            else {
                res.innerHTML = `É uma idosa de ${idade} anos.`;
                img.src = 'img/im.jpg'
            }
        }

        
    }
}