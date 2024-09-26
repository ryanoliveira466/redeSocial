//////AO MEXER COM PONINTEROVER E POINTERLEAVE
///// USAR pointer-events: none; E cursor: pointer;
  

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btRegistrar');

    button.addEventListener('pointerover', () => {
        button.innerHTML = `<img src="colorInversion/icons8-signing-a-document-50.png" width="50px" height= "50px" alt="">`;
        button.style.backgroundColor = '#ff8a65';
        button.style.border = '1px solid #ff8a65';
         
        
    });

    button.addEventListener('pointerleave', () => {
        button.innerHTML = `<img src="img/icons8-assinando-um-documento-50.png" width="50px" height= "50px" alt="">`;
        button.style.backgroundColor = '#f8f9fa';
        button.style.border = '1px solid #f8f9fa';
        
      
    });

    
});






let arrayWhoLiked = JSON.parse(sessionStorage.getItem('arrayWhoLiked')) || [];
sessionStorage.setItem('arrayWhoLiked', JSON.stringify(arrayWhoLiked));





let arrayUsuarios = JSON.parse(sessionStorage.getItem('arrayUsuarios')) || [];
let arrayPaginas = JSON.parse(sessionStorage.getItem('arrayPaginas')) || [];
let arrayPost = JSON.parse(sessionStorage.getItem('arrayPost')) || [];
let arrayComentariosPost = JSON.parse(sessionStorage.getItem('arrayComentariosPost')) || [];

let validation;

 


function backToNormal() {
    document.getElementById('if1').innerText = 'Empty or invalid name!'
    document.getElementById('if2').innerText = 'Empty or invalid email!'
}


document.getElementById('txEmail').addEventListener('input', backToNormal)

document.getElementById('txNome').addEventListener('input', backToNormal)










//gastei o dia inteiro ontem para no final mudar a função pq fica melhor para o usuário 🤡🤡🤡🤡🤡


function atualizarTempoRealEmail() {



    let compararEmail = null;

    //  if(document.getElementById('txEmail').value.trim() == ""){
    //     document.getElementById('if2').innerText = 'Empty or invalid email!'
    //     return;


    //  }




    for (var i = 0; i < arrayUsuarios.length; i++) {
        if (document.getElementById('txEmail').value.trim() === arrayUsuarios[i][1]) {



            compararEmail = arrayUsuarios[i][1]


        }




    }

    if (document.getElementById('txEmail').value.trim() === compararEmail) {
        document.getElementById('if2').innerText = 'Email já registrado!'
        document.getElementById('txEmail').value = ``
    }

    else {
        document.getElementById('if2').innerText = 'Empty or invalid email!'
    }






}










function atualizarTempoRealNome() {


    let compararNome = null;

    //  if(document.getElementById('txNome').value.trim() == ""){
    //     document.getElementById('if1').innerText = 'Empty or invalid email!'
    //     return;


    //  }






    for (var i = 0; i < arrayUsuarios.length; i++) {
        if (document.getElementById('txNome').value.trim() === arrayUsuarios[i][0]) {

            compararNome = arrayUsuarios[i][0]



        }





    }




    if (document.getElementById('txNome').value.trim() === compararNome) {


        document.getElementById('if1').innerText = 'Nome já registrado!'
        document.getElementById('txNome').value = ``

    }

    else {
        document.getElementById('if1').innerText = 'Empty or invalid name!'
    }





}












// function atualizarTempoRealEmail() {
//     const emailInput = document.getElementById('txEmail').value.trim();
//     const emailMessage = document.getElementById('if2');

//     if (!emailInput) {
//         emailMessage.innerText = 'Empty or invalid email!';
//         return;
//     }

//     const emailExists = arrayUsuarios.some(user => user[1] === emailInput);

//     if (emailExists) {
//         console.log('iuuEMAIL');
//         emailMessage.innerText = 'Email já registrado!';
//         document.getElementById('txEmail').value = ''; // Clear input
//     } else {
//         emailMessage.innerText = ''; // Clear message if valid
//     }
// }

// function atualizarTempoRealNome() {
//     const nomeInput = document.getElementById('txNome').value.trim();
//     const nomeMessage = document.getElementById('if1');

//     if (!nomeInput) {
//         nomeMessage.innerText = 'Empty or invalid name!';
//         return;
//     }

//     const nomeExists = arrayUsuarios.some(user => user[0] === nomeInput);

//     if (nomeExists) {
//         console.log('iuuNOME');
//         nomeMessage.innerText = 'Nome já registrado!';
//         document.getElementById('txNome').value = ''; // Clear input
//     } else {
//         nomeMessage.innerText = ''; // Clear message if valid
//     }
// }

// // Event listeners for real-time updates
// document.getElementById('txEmail').addEventListener('input', atualizarTempoRealEmail);
// document.getElementById('txNome').addEventListener('input', atualizarTempoRealNome);







































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






function trigger() {



    //SET TIMEOUT era o vilão da história esse tempo todo,sem ele o meu código funciona 🤡🤡🤡🤡🤡
    //Literamlmente  o dia inteiro nisso que desgraça
    //SET TIMEOUT DEPENDENDO DE COMO O USUÁRIO DIGITA PODE MANDAR 1 2 OU MAIS REQUEST PRA FUNçÃO AO MESMO TEMPO,BUGANDO AS MENSAGENS🤡🤡🤡🤡🤡 😩🤦‍♂️

    //   document.getElementById('txEmail').addEventListener('input',function () {
    //      setTimeout(atualizarTempoRealEmail,2000)

    //   }  );
    //   document.getElementById('txNome').addEventListener('input',function () {
    //      setTimeout( atualizarTempoRealNome,2000)

    //   } );


    //QUERIA FAZER COM QUE O USUARIO COLOCASSE O EMAIL E NA HORA ELE APAGASSE PRA DAR O INVALID FEEDBACK
    //NAO CONSEGUI MUDAR O VALID FEEDBACK PRA DEIXAR VERMELHO ENTAO TODA VEZ QUE O USUARIO DIGITA ALGO QUE JA TEM NA ARRAY
    //ELE APAGA E MUDA A MENSAGEM PARA EMAIL/NOME JA REGISTRADO MAAAS NO FINAL ISSO NÃO FICA AGRADAVÉL
    //FUNCIONAR ESTÁ FUNCIONANDO PELO MENOS


    //   document.getElementById('txEmail').addEventListener('input',atualizarTempoRealEmail);
    //   document.getElementById('txNome').addEventListener('input',atualizarTempoRealNome);





    //TMB N FUNFA 🤡🤡🤡🤡🤡 😩



    //   function debounce(func, delay) {
    //       let timeout;
    //       return function (...args) {
    //           const context = this;
    //           clearTimeout(timeout);
    //           timeout = setTimeout(() => func.apply(context, args), delay);
    //       };
    //   }

    //   const debouncedUpdateEmail = debounce(atualizarTempoRealEmail, 500);
    //   const debouncedUpdateNome = debounce(atualizarTempoRealNome, 500);

    //   document.getElementById('txEmail').addEventListener('input', debouncedUpdateEmail);
    //   document.getElementById('txNome').addEventListener('input', debouncedUpdateNome);




    if (validation == true) {
        document.getElementById('btRegistrar').style = 'font-size: small;'
        document.getElementById('spinner').style = 'display: none; '
        console.log(arrayUsuarios)

    }

    else {

        // atualizarTempoRealEmail()
        // atualizarTempoRealNome()







        let contem = false //if false,add into array,if true ,doesnt add
        let confirmer = null //

        let nome = document.getElementById('txNome').value.trim();
        let email = document.getElementById('txEmail').value.trim();
        let senha = document.getElementById('txSenha').value.trim();


        //First check

        if (nome == '' || email == '' || senha == '') {
            document.getElementById('alert2').style = 'display: none '
            document.getElementById('btn-close2').style = 'margin-bottom: 2px'
            document.getElementById('alert3').style = 'display: none '
            document.getElementById('alert1').style = 'display: none '
            contem = null
        }

        //

        //When array has an item


        if (arrayUsuarios.length > 0) {

            if (nome == '' || email == '' || senha == '') {
                document.getElementById('alert2').style = 'display: none '
                document.getElementById('btn-close2').style = 'margin-bottom: 2px'
                document.getElementById('alert3').style = 'display: none '
                document.getElementById('alert1').style = 'display: none '
                contem = null
            }

            else {
                for (var i = 0; i < arrayUsuarios.length; i++) {
                    if (email === arrayUsuarios[i][1] || nome === arrayUsuarios[i][0]) {
                        contem = true
                        confirmer = true
                    }
                }
            }
        }

        //



        if (confirmer == true) {
            document.getElementById('alert1').style = 'display: none '
            document.getElementById('btn-close1').style = 'margin-bottom: 2px'
            document.getElementById('alert3').style = 'display: none '
            document.getElementById('alert2').style = 'display: none'

            document.getElementById('txNome').value = ``
            document.getElementById('if1').innerText = 'Email ou senha já registrados!'
            document.getElementById('txEmail').value = ``
            document.getElementById('if2').innerText = 'Email ou senha já registrados!'



        }

        if (contem === false) {



            document.getElementById('btnModalIndex').click()






            arrayUsuarios.push([nome, email, senha])



            const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleindexPerfilTemplate.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <title>Perfil de ${nome}</title>
</head>

 

<body>

     <nav class="navbar" id="navTop"
        style="box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;  ">
        <div class="container-fluid">
            <a class="navbar-brand" style="color: white;" href="#">
                <img src="img/icons8-logotipo-do-stellarium-240.png" alt="Logo" id="logo" width="160px" height="160px"
                    class="d-inline-block align-text-center">
                 <div style=" position: absolute; left: 170px; bottom: 80px;"><p>Nome: ${nome}</p> 
                     
                </div>
                <div style=" position: absolute; left: 170px; bottom: 42px;"><p>Email: ${email}</p> 
                     
                </div>
      
            </a>
        </div>
    </nav>

    <p id="identifier" style="display: none;">${email}</p>


        <button type="button" class="btn btn-primary" id="blankSpaceButton" style="display: none">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="blankSpaceToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="img/icons8-logotipo-do-stellarium-240.png" width="20px" height="20px" class="rounded me-2" alt="...">
      <strong class="me-auto">TimeLine</strong>
      <small>Now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Opps, blank space not allowed!
    </div>
  </div>
</div>
 

    

     
     

    <div class="boxDados" id="boxDados">

       <h1 style="color: blue; margin: 2rem;">Logar</h1>
        <button type="button" class="btn btn-light" onclick="window.location.href='indexLogin.html';" id="actionButtons"><img src="img/icons8-entrar-50.png" alt="HTML tutorial"
                style="width:42px;height:42px; margin: 2rem;"></button>
        <h1 style="color: blue;margin: 2rem;">TimeLine</h1>
        <button type="button" class="btn btn-light" onclick="window.location.href='indexTimeLine.html';" id="actionButtons"><img src="img/icons8-linha-do-tempo-50.png" alt="HTML tutorial"
                style="width:42px;height:42px; margin: 2rem;"></button>

<br>


         
 
        <div class="dados" id="dados">

            <h3 style="padding-top: 12px;font-size: medium;" > Escreva Algo: </h3>
            <div class="form-floating" style="margin:2rem;">
            <div id="txConteudo" class="textAreaComent" contenteditable="true" name="txConteudo" style="height: 100px;"></div>
             </div>

             <input class="inputEmoji" id="input">


            <div class="btRegistrara" id="btRegistrara" style="margin: 1rem;">
                <button id="btRegistrar" class="btn btn-light" name="btRegistrar" style="font-size: small;"><img src="img/icons8-enviar-mensagem-50.png"
                    alt="HTML tutorial" >
                    </button>

                <div class="" id="spinner" role="status" style="display: none;">
                    <img src="gif/764.png"   alt="" srcset="">
                </div>
            </div>




       
              
        

            

        </div>



        <div id="mainEmojiSection">
        <div id="emojiSection"></div>
    </div>


       
       

      



         
         
    </div>






     

              <div class="conteudo" id="conteudo">
        <p class="textoConteudo" id="textoConteudo"></p>
        </div>

       




        
<nav class="navbar" style="width: 100%; height: 330px; background-image: linear-gradient(rgb(33, 30, 36),rgb(55, 50, 66));;box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;" >
            <div class="container-fluid">
               
            </div>
        </nav>
    




     
     



         

 
         

     


     

   

 



 
    


    <script type="module" src="scriptPerfilTemplate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
         
</body>

</html>
`







            arrayPaginas.push(htmlTemplate)
            arrayPost.push([])
            arrayComentariosPost.push([])
            sessionStorage.setItem('arrayComentariosPost', JSON.stringify(arrayComentariosPost));



            document.getElementById('alert1').style = 'display: none'
            document.getElementById('alert2').style = 'display: none'
            document.getElementById('alert3').style = 'display: none '
            document.getElementById('btn-close3').style = 'margin-bottom: 2px'

        }

        document.getElementById('btRegistrar').style = 'font-size: small;'
        document.getElementById('spinner').style = 'display: none; '

        sessionStorage.setItem('arrayUsuarios', JSON.stringify(arrayUsuarios));
        sessionStorage.setItem('arrayPaginas', JSON.stringify(arrayPaginas));
        sessionStorage.setItem('arrayPost', JSON.stringify(arrayPost));


        console.log(arrayUsuarios)

    }




}

function spinner() {
    document.getElementById('btRegistrar').style = 'display: none'
    document.getElementById('spinner').style = 'color:rgb(236, 124, 108);'
}


 

 




 



 

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


