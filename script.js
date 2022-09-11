let inp = document.querySelectorAll('.element')
let btn = document.querySelector('.btn')
let error = 0
let sas = 0
let spanError = document.querySelector('.error')
let spanSas = document.querySelector('.sas')
let h1 = document.querySelectorAll('.rte')
let p = document.querySelectorAll('.rp')

function name() {
    event.preventDefault()
    error = 0
    sas = 0
    for (let item of inp) { 
        console.log(item.value);
        if(item.value == '') {
            
        } else {
            sas ++
        }
        if(item.classList.contains('element')) {
            if(item.value == '') {
                item.style.borderColor = 'red'
                btn.style.background = 'red'
                error ++
                for (let item1 of h1) {
                    for (let item2 of p) {
                        item1.innerText = `Please enter your ${item2.innerText}`
                    }
                }
            }
        }
    }
    spanError.innerText = `Error: ${error}/12`
    spanSas.innerText = `Success: ${sas}/12`
}


btn.onclick = () => {
    name()
}

console.log(p);