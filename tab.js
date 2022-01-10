var num = document.getElementById("num")

function cauc(){

    if (!(num.value == 0)){
        
        var n = Number(num.value)
        var tab = document.getElementById('tab')

        tab.innerHTML = ''
        for (c = 1; c <= 10; c++){

            let it = document.createElement('option')
            it.text = `${c} x ${n} = ${c*n}`
            it.value = `tab${c}`

            tab.appendChild(it)
        }
        
    }else{

        alert('Preencha o Campo Abaixo')
    }
}