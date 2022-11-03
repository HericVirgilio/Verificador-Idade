function verificar(){
    var inputNasc = document.getElementById('anoNasc')
    var anoNasc = Number(inputNasc.value)   
    const hoje = new Date()
    var yearNow = hoje.getFullYear()
    var idade = yearNow - anoNasc
    var radsex = document.getElementsByName('radsex')
    var img = document.getElementById('img')
    var genero
    if(radsex[0].checked){
        genero = 0
    }else{
        genero = 1
    }
    var res = document.getElementById('res')
    if(idade < 0){
        res.innerHTML = `Dados invalidos! Tente Novamente!`
        
    }else if(genero != 0 && genero != 1){
        res.innerHTML = 'Genero invalido!'
    }else{
        switch(genero){
            case 0:
                if(idade <= 12){
                    img.src = 'boy/boy 0.jpg'
                    res.innerHTML = `Você é um garoto e tem ${idade} anos`
                }else if(idade <= 18){
                    res.innerHTML = `Você é um garoto e tem ${idade} anos`
                    img.src = 'boy/boy + 12c.jpg'
                }else if(idade <= 35){
                    res.innerHTML = `Não sei nem oque você faz aqui, ${idade} anos na cara e na frente do PC`
                    img.src = 'boy/boy +18.jpg'
                }else if(idade < 50){
                    res.innerHTML = `Você é um Yonkou de ${idade} anos `
                    img.src = 'boy/boy +35.jpg'
                }else if(idade <= 70){
                    res.innerHTML = `Você ja lutou muito, tome um tempo para descansar!`
                    img.src = 'boy/boy +50.jpg'
                }else{
                    res.innerHTML = `Nem sei  como você ta vivo HAHAHAHHAHAH`
                    img.src = 'boy/boy +70.jpg'
                }
                break
            case 1:
                if(idade <= 12){
                    img.src = 'girl/girl+0.jpg'
                    res.innerHTML = `Você é um garota de  ${idade} anos`
                }else if(idade <= 18){
                    res.innerHTML = `Você é um garota e tem ${idade} anos`
                    img.src = 'girl/girl+12.jpg'
                }else if(idade <= 35){
                    res.innerHTML = `Não sei nem oque você faz aqui, ${idade} anos na cara e na frente do PC`
                    img.src = 'girl/girl+18.jpg'
                }else if(idade < 50){
                    res.innerHTML = `Você é uma shichibukai de ${idade} anos `
                    img.src = 'girl/girl+35.jpg'
                }else if(idade <= 70){
                    res.innerHTML = `Big Mom kkkkkkkkkk`
                    img.src = 'girl/girl+45.jpg'
                }else{
                    res.innerHTML = `Você so pode ser uma fada de ${idade} anos`
                    img.src = 'girl/girl+80.jpg'
                
                }
        }
    }
    
    
}