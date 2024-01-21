const localStorageKey = 'to-do-list-gg'

function validateIfExistsNewTask(){

    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-task').value
    let exists     = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask(){
    let input = document.getElementById('input-task')

    input.style.border = ''

    // validation
    if(!input.value){

        input.style.border = '1.5px solid red'
        error('Digite algo para inserir em sua lista')
    }
    else if(validateIfExistsNewTask()){

        alert('Já existe uma task com essa descrição')
    }
    else{

        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('listDo')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){

        list.innerHTML += `<li>${values[i]['name']}
        <button onclick="removeItem('${values[i]["name"]}')" id="" title="Clique aqui para excluir uma nova task">
            <i class='bx bx-trash' style='color:#ffffff'></
        </button>
        </li>`
    }
    animation()
}

function removeItem(data){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

function animation(){

    var icons = document.querySelectorAll('.bx');


    icons.forEach(function(elemento) {
        elemento.addEventListener('mouseenter', function() {

            this.classList.add('bx-tada');
        });

        elemento.addEventListener('mouseleave', function() {

            this.classList.remove('bx-tada');
        });
    });

}

showValues()
animation()
