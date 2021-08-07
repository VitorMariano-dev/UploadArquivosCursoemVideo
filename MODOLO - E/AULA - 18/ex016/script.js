function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] FALTAM DADOS!')
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo Inválido! CONSIDERANDO PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }else{
            for(c = i; c >= f; c -= p){
                //Contagem regressiva
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
            
    }
}