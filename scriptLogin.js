let arrayUsuarios = JSON.parse(sessionStorage.getItem('arrayUsuarios')) || [];
let arrayPaginas = JSON.parse(sessionStorage.getItem('arrayPaginas')) || [];
let globalUser = JSON.parse(sessionStorage.getItem('globalUser')) || String;

console.log(arrayUsuarios)
console.log(arrayPaginas)

document.getElementById('btn-close1').addEventListener('click', function () {
    document.getElementById('alert1').style = 'display: none'
})

document.getElementById('btn-close2').addEventListener('click', function () {
    document.getElementById('alert2').style = 'display: none'
})

document.getElementById('btn-close3').addEventListener('click', function () {
    document.getElementById('alert3').style = 'display: none'
})


document.getElementById('btRegistrar').addEventListener('click', function () {
    setTimeout(trigger, 3000)
})


document.getElementById('btRegistrar').addEventListener('click', spinner)



let validation;




function backToNormal() {
    document.getElementById('if1').innerText = 'Empty or invalid email!'
    document.getElementById('if2').innerText = 'Empty or invalid password!'
}


document.getElementById('txEmail').addEventListener('input', backToNormal)

document.getElementById('txSenha').addEventListener('input', backToNormal)






function verificarEmailSenha() {


    let emailV = document.getElementById('txEmail').value.trim();
    let senhaV = document.getElementById('txSenha').value.trim();

     


    for (var i = 0; i < arrayUsuarios.length; i++) {
        if ((emailV === arrayUsuarios[i][1] && senhaV === arrayUsuarios[i][2]) === false) {
            console.log('testeArrayUsuarios',arrayUsuarios)
            console.log('teste', (emailV === arrayUsuarios[i][1] && senhaV === arrayUsuarios[i][2]))
            console.log('email', emailV)
            console.log('senha', senhaV)
            console.log('emailArray', arrayUsuarios[i][1]);
            console.log('senhaArray', arrayUsuarios[i][2]);
            
            document.getElementById('txEmail').value = ``
            document.getElementById('if1').innerText = 'Email ou senha incorretos!'
            document.getElementById('txSenha').value = ``
            document.getElementById('if2').innerText = 'Email ou senha incorretos!'
        }



    }

}

















(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {





        form.addEventListener('submit', event => {


            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                validation = true


            }

            else {

                validation = false
            }

            form.classList.add('was-validated')
        }, false)
    })
})()










//RESOLVE O PROBLEMA DO FORMS DE RELOAD
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission








    // (() => {
    //     'use strict'

    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     const forms = document.querySelectorAll('.needs-validation')

    //     // Loop over them and prevent submission
    //     Array.from(forms).forEach(form => {
    //         form.addEventListener('submit', event => {
    //             if (!form.checkValidity()) {
    //                 event.preventDefault()
    //                 event.stopPropagation()
    //                 validation = true;

    //             }

    //             form.classList.add('was-validated')
    //         }, false)
    //     })
    // })()










    // You can process the email or send it via AJAX here
});
































function trigger() {







    if (validation == true) {
        document.getElementById('btRegistrar').style = 'font-size: small;'
        document.getElementById('spinner').style = 'display: none; '
        console.log(arrayUsuarios)

    }

    else {


        








        let contem = false
        let confirmer = null //


        let email = document.getElementById('txEmail').value.trim().replace(/\s+/g, '');;
        let senha = document.getElementById('txSenha').value.trim().replace(/\s+/g, '');


        //First check

        if (email == '' || senha == '') {
            document.getElementById('alert2').style = 'display: none '
            document.getElementById('btn-close2').style = 'margin-bottom: 2px'
            document.getElementById('alert3').style = 'display: none '
            document.getElementById('alert1').style = 'display: none '

        }

        //

        //When array has an item


        if (arrayUsuarios.length > 0) {

            if (email == '' || senha == '') {
                document.getElementById('alert2').style = 'display: none '
                document.getElementById('btn-close2').style = 'margin-bottom: 2px'
                document.getElementById('alert3').style = 'display: none '
                document.getElementById('alert1').style = 'display: none '

            }

            else {
                for (var i = 0; i < arrayUsuarios.length; i++) {
                    if (email === arrayUsuarios[i][1] && senha === arrayUsuarios[i][2]) {
                        confirmer = true
                        contem = true
                    }



                }
            }
        }

        //



        if (confirmer == true) {
            document.getElementById('alert1').style = 'display: none '
            document.getElementById('btn-close1').style = 'margin-bottom: 2px'
            document.getElementById('alert2').style = 'display: none'
            document.getElementById('alert3').style = 'display: none'




            for (var i = 0; i < arrayUsuarios.length; i++) {
                if (email === arrayUsuarios[i][1] && senha === arrayUsuarios[i][2]) {

                    globalUser = email
                    sessionStorage.setItem('globalUser', JSON.stringify(globalUser));
              
                    let paginaUsuario = arrayPaginas[i]

                    document.getElementById('btnEntrarLogin').addEventListener('click', function () {
                        let newWindow = window.open()
                        newWindow.document.write(paginaUsuario)
                        newWindow.document.close()

                    })

                    document.getElementById('btnModalIndex').click()







                }

            }






        }

        if (contem == false) {
            document.getElementById('alert1').style = 'display: none'
            document.getElementById('alert2').style = 'display: none'
            document.getElementById('alert3').style = 'display: none '
            document.getElementById('btn-close3').style = 'margin-bottom: 2px'

            document.getElementById('txEmail').value = ``
            document.getElementById('if1').innerText = 'Email ou senha incorretos!'
            document.getElementById('txSenha').value = ``
            document.getElementById('if2').innerText = 'Email ou senha incorretos!'


            


        }



        document.getElementById('btRegistrar').style = 'font-size: small;'
        document.getElementById('spinner').style = 'display: none; '



    }



}

function spinner() {
    document.getElementById('btRegistrar').style = 'display: none'
    document.getElementById('spinner').style = 'color:rgb(236, 124, 108);'
}






//////AO MEXER COM PONINTEROVER E POINTERLEAVE
///// USAR pointer-events: none; E cursor: pointer;
  

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btRegistrar');

    button.addEventListener('pointerover', () => {
        button.style.backgroundColor = '#ff8a65';
        button.style.border = '1px solid #ff8a65';
        button.innerHTML = `<img src="colorInversion/icons8-access-64.png" width="50px" height= "50px" alt="">`;
        
    });

    button.addEventListener('pointerleave', () => {
        button.style.backgroundColor = '#f8f9fa';
        button.style.border = '1px solid #f8f9fa';
        button.innerHTML = `<img src="img/icons8-credenciais-do-usuário-64.png" width="50px" height= "50px"  alt="">`;
      
    });

    
});














//////AO MEXER COM PONINTEROVER E POINTERLEAVE
///// USAR pointer-events: none; E cursor: pointer;
  

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btnEntrarLogin');

    button.addEventListener('pointerover', () => {
        button.innerHTML = `<img src="colorInversion/icons8-entrar-50 (1).png" width="30px" height="30px" alt="">`;
        button.style.backgroundColor = '#ff8a65';
        button.style.border = '1px solid #ff8a65';
         
        
    });

    button.addEventListener('pointerleave', () => {
        button.innerHTML = `<img src="img/icons8-enter-50.png" width="30px" height="30px" alt="">`;
        button.style.backgroundColor = '#0d6efd';
        button.style.border = '1px solid #0d6efd';
        
      
    });

    
});












//////AO MEXER COM PONINTEROVER E POINTERLEAVE
///// USAR pointer-events: none; E cursor: pointer;
  

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('modalClose');

    button.addEventListener('pointerover', () => {
        button.innerHTML = `<img src="colorInversion/icons8-caixa-de-seleção-marcada-50 (1).png" width="30px" height="30px" alt="">`;
        button.style.backgroundColor = '#5b1784';
        button.style.border = '1px solid #5b1784';
         
        
    });

    button.addEventListener('pointerleave', () => {
        button.innerHTML = `<img src="img/icons8-caixa-de-seleção-marcada-50.png" width="30px" height="30px" alt="">`;
        button.style.backgroundColor = '#f8f9fa';
        button.style.border = '1px solid #f8f9fa';
        
      
    });

    
});














 



//


