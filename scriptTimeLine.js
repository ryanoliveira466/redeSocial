let arrayUsuarios = JSON.parse(sessionStorage.getItem('arrayUsuarios')) || [];
let arrayPaginas = JSON.parse(sessionStorage.getItem('arrayPaginas')) || [];
let arrayPost = JSON.parse(sessionStorage.getItem('arrayPost')) || [];
let arrayComentariosPost = JSON.parse(sessionStorage.getItem('arrayComentariosPost')) || [];
let globalUser = JSON.parse(sessionStorage.getItem('globalUser')) || String;

let arrayTeste = JSON.parse(sessionStorage.getItem('arrayTeste')) || [];

let arrayWhoLiked = JSON.parse(sessionStorage.getItem('arrayWhoLiked')) || [];

let arrayAllPost = []
let incrementCom2 = 0
let numberPost;






setTimeout(() => {
    document.getElementById("whiteLoadingPage").style.display = "none";
  }, 500); // Hide after 4 seconds to match the animation duration











console.log(arrayPost)

console.log('Array Teste', arrayTeste)
//  console.log(arrayUsuarios)
//  console.log(arrayPaginas)


//TESTE ORDENAR DATA POST

for (var i = 0; i < arrayPost.length; i++) {
    arrayPost[i].forEach((element) => {
        arrayAllPost.push(element)
    })
}



function menorMaior(array) {

    let finalArray = []
    let arrayNum = array


    while (arrayNum.length > 0) {

        let excluirArrayoriginal = 0
        let num = arrayNum[0]

        for (var i = 0; i < arrayNum.length; i++) {
            if (num.dataPost < arrayNum[i].dataPost) {
                num = arrayNum[i]
                excluirArrayoriginal = i
            }

        }

        if (excluirArrayoriginal > 0) {
            arrayNum.splice(excluirArrayoriginal, 1)
        }

        else {
            arrayNum.splice(0, 1)
        }

        finalArray.push(num)



    }

    arrayAllPost = finalArray




}

menorMaior(arrayAllPost)

console.log('Final', arrayAllPost)








arrayTeste = arrayAllPost






///TESTE COLOCANCO POSTS NA TIMELINE

//CRIAR OBJETO PARA CADA POST

for (var i = 0; i < arrayTeste.length; i++) { ///////////////////////// TROQUEI arrayTeste por arrayAllPost

    let increment = 0











    // Create the main container
    const container = document.createElement('div');
    container.className = 'border border-3 border-light';
    container.style.width = '500px';
    container.style.height = 'auto';
    container.style.wordWrap = 'break-word';
    container.style.backgroundColor = 'white';
    container.style.fontFamily = 'Arial, Helvetica, sans-serif;'


    // Create the header section
    const header = document.createElement('div');
    header.className = 'd-flex w-100 justify-content-between';

    const heading = document.createElement('h5');
    heading.className = 'mb-1';
    heading.textContent = arrayTeste[i].username
    heading.style.color = 'rgb(69, 39, 160)'

    const date = document.createElement('small');
    date.style.color = 'rgb(149, 63, 202)';
    date.textContent = 'Today';

    header.appendChild(heading);
    header.appendChild(date);
    container.appendChild(header);

    // Create the main content
    const texto = document.createElement('p');
    texto.id = arrayTeste[i].idPost
    texto.className = 'mb-1';
    texto.style.color = '#e66f00';
    texto.innerHTML = arrayTeste[i].nomePost //////////////text content

    container.appendChild(texto);

    // Create the small print

    //  let hourNow = `${new Date().toLocaleTimeString()}`
    //  let datePost = `${document.getElementById('identifier').textContent} em: ${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')} às: ${hourNow}`
    const smallPrint = document.createElement('small');
    smallPrint.style.color = 'rgb(97, 88, 88)';
    smallPrint.textContent = arrayTeste[i].dataTemplatePost

    container.appendChild(smallPrint);

    // Append the container to the body or a specific element
    document.getElementById('postGlobais').appendChild(container)



    let botaoLike = document.createElement('button')
    botaoLike.id = arrayTeste[i].btnLikeId
    botaoLike.innerHTML = '<img src="img/icons8-gostar-50.png" alt="Send Message">';
    botaoLike.className = "btn btn-light"
    botaoLike.style.marginTop = '20px'
    document.getElementById('postGlobais').appendChild(botaoLike)



    let quantidadeLikes = document.createElement('p')
    quantidadeLikes.innerText = arrayTeste[i].numberLikes
    quantidadeLikes.id = 'textoLike'
    document.getElementById('postGlobais').appendChild(quantidadeLikes)


    let arrayPostConstVauleButtonLike = i



    botaoLike.addEventListener('click', function () {

        quantidadeLikes.innerText++
        arrayTeste[arrayPostConstVauleButtonLike].numberLikes = quantidadeLikes.innerText
        sessionStorage.setItem('arrayPost', JSON.stringify(arrayPost));
    })





     /////////TOAST


        // Create toast element
        let toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = `liveToast${botaoLike.id}`
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        toast.style.maxWidth = '95vw'
       
         
        
        
        // Create the toast header
        let toastHeader = document.createElement('div');
        toastHeader.className = 'toast-header';
        toastHeader.innerHTML = `
            <img src="img/icons8-logotipo-do-stellarium-240.png" width="20px" height="20px" class="rounded me-2" alt="...">
            <strong class="me-auto">Likes</strong>
            <small>Now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        `;

        // Create the toast body
        let toastBody = document.createElement('div');
        toastBody.className = 'toast-body';
        toastBody.textContent = 'Hello, world! This is a toast message.';

        // Append header and body to the toast
        toast.appendChild(toastHeader);
        toast.appendChild(toastBody);



        document.getElementById('postGlobais').appendChild(toast)




            ///TOAST


            botaoLike.addEventListener('click', function () {


                let confirmer = true
                let index = null
    
    
    
                for(var i = 0;i < arrayWhoLiked.length;i++){
                    if(arrayWhoLiked[i].id === botaoLike.id){
                        confirmer = false
                        
                    }
    
                }
    
                if(confirmer === true){
    
                    arrayWhoLiked.push(
                        {
                            id: botaoLike.id,
                            array: []
                        }
                    )
                    
    
                }
    
    
                for(var i = 0;i < arrayWhoLiked.length;i++){
                    if(arrayWhoLiked[i].id === botaoLike.id){
                        index = i
                        
                    }
    
                }
    
    
    
    
                let contemM = false
    
    
                for(var i = 0;i < arrayWhoLiked[index].array.length;i++){
                    if(globalUser === arrayWhoLiked[index].array[i]){
                        contemM = true
                        
                    }
                }
    
    
                if(contemM === false){
                    arrayWhoLiked[index].array.push(globalUser)
                }
    
    
    
                let quemCurtiu = arrayWhoLiked[index].array.join();
    
    
                toastBody.textContent = quemCurtiu
    
                 
    
    
               console.log('CONTEM', contemM);
               
    
    
    
                console.log('Boolean TESTE',globalUser === arrayWhoLiked[index].array[0])
    
    
                console.log('INDEX',index)
    
                console.log('Boolean',arrayWhoLiked[0].id === botaoLike)
    
                console.log(arrayWhoLiked);
                
                sessionStorage.setItem('arrayWhoLiked', JSON.stringify(arrayWhoLiked));

            

                if(toast.className === 'toast fade show' || toast.id.className === 'toast fade showing'){
                    
                    return;
                }


                else{

                    new bootstrap.Toast(document.getElementById(toast.id)).show();
    
                }
             });
 




















    botaoLike.addEventListener('pointerover', () => {
        botaoLike.style.backgroundColor = '#b45380';
        botaoLike.style.border = '1px solid #b45380';
        botaoLike.innerHTML = `<img src="colorInversion/icons8-gostar-50 (1).png" style="pointer-events: none;" width="50px" height= "50px" alt="">`;

    });

    botaoLike.addEventListener('pointerleave', () => {
        botaoLike.style.backgroundColor = '#f8f9fa';
        botaoLike.style.border = '1px solid #f8f9fa';
        botaoLike.innerHTML = `<img src="img/icons8-gostar-50.png" style="pointer-events: none;" width="50px" height= "50px"  alt="">`;

    });

    botaoLike.style.cursor = 'pointer'

   














 





    
        

    //             // Show the toast
    // new bootstrap.Toast(toast).show();

    // // Remove the toast after it's hidden
    // toast.addEventListener('hidden.bs.toast', function () {
    //     toast.remove();
    // });








            //  let botaoTeste = document.createElement('button')
            //  botaoTeste.id = `teste${botaoLike.id}`
            //  document.getElementById('conteudo').appendChild(botaoTeste)
        
            //  document.getElementById(botaoTeste.id);addEventListener('click' , function(){
                 
            //         new bootstrap.Toast(document.getElementById(toast.id)).show();
                
            //  })


/////////TOAST





























    let comentarios = document.createElement('div')
    comentarios.id = arrayTeste[i].comentariosId
    comentarios.className = 'tabComentarios'
    comentarios.style = 'background-color: #3f2786;'

    document.getElementById('postGlobais').appendChild(comentarios)



     

    let inputComentario = document.createElement('div') //////////'textarea'
    inputComentario.name = arrayTeste[i].inputComentarioName
    inputComentario.className = `textAreaComent`

    inputComentario.contentEditable = 'true' ////////////////////////////


    //
    inputComentario.id = arrayTeste[i].inputComentarioId
    //

    document.getElementById(comentarios.id).appendChild(inputComentario)




    /////BARRA EMOJI

    let inputEmoji = document.createElement('input')
    inputEmoji.id = `input${comentarios.id}`
    inputEmoji.className = `inputEmoji`

    document.getElementById(comentarios.id).appendChild(inputEmoji)


  






    let botaoComentar = document.createElement('button')
    botaoComentar.innerHTML = '<img src="img/icons8-enviar-comentário-50.png" alt="Send Message">';
    botaoComentar.className = "btn btn-light"

    //
    botaoComentar.id = arrayTeste[i].btnComentarId
    //
    document.getElementById(comentarios.id).appendChild(botaoComentar)




    let valueToArrayCom = arrayTeste[i].id



    botaoComentar.addEventListener('pointerover', () => {
        botaoComentar.style.backgroundColor = '#ff8a65';
        botaoComentar.style.border = '1px solid #ff8a65';
        botaoComentar.innerHTML = `<img src="colorInversion/icons8-enviar-comentário-50 (1).png" style="pointer-events: none;" width="50px" height= "50px" alt="">`;

    });

    botaoComentar.addEventListener('pointerleave', () => {
        botaoComentar.style.backgroundColor = '#f8f9fa';
        botaoComentar.style.border = '1px solid #f8f9fa';
        botaoComentar.innerHTML = `<img src="img/icons8-enviar-comentário-50.png" style="pointer-events: none;" width="50px" height= "50px"  alt="">`;

    });

    botaoComentar.style.cursor = 'pointer'
























 /////////////TESTE EMOJI API

   

     

 let mainEmojiSection = document.createElement('div')
 mainEmojiSection.id = `mainEmojiSection${comentarios.id}`
 mainEmojiSection.className = `mainEmojiSection`

 let emojiSection = document.createElement('div')
 emojiSection.id = `emojiSection${comentarios.id}`
 emojiSection.className = `emojiSection`

 document.getElementById('postGlobais').appendChild(mainEmojiSection)

 document.getElementById(mainEmojiSection.id).appendChild(emojiSection)




document.getElementById(`input${comentarios.id}`).addEventListener('input', function () {

    if (document.getElementById(inputEmoji.id).value === "") {

    }



    document.getElementById(`emojiSection${comentarios.id}`).remove()
    let emojiSection = document.createElement('div')
    emojiSection.id = `emojiSection${comentarios.id}`
    emojiSection.className = `emojiSection`
    document.getElementById(mainEmojiSection.id).appendChild(emojiSection)




    for (var i = 0; i < emojiArray.length; i++) {
        if (emojiArray[i].includes(document.getElementById(inputEmoji.id).value)) {




            let imagemEmoji = document.createElement('img')
            imagemEmoji.src = `https://emojiapi.dev/api/v1/${emojiArray[i]}.svg`
            imagemEmoji.style.width = `20px`
            imagemEmoji.style.height = `20px`


            let emojiButton = document.createElement('button')
            emojiButton.className = 'btn btn-dark'
            emojiButton.style.marginTop = '0.07rem'
            emojiButton.appendChild(imagemEmoji)

            let emojiIndexAt = i

            emojiButton.addEventListener('click', function () {

                let imagemEmojiTextArea = document.createElement('img')
                imagemEmojiTextArea.src = `https://emojiapi.dev/api/v1/${emojiArray[emojiIndexAt]}.svg`
                imagemEmojiTextArea.style.width = '20px'
                imagemEmojiTextArea.style.height = 'auto'

                document.getElementById(inputComentario.id).appendChild(imagemEmojiTextArea)









            })

            document.getElementById(emojiSection.id).appendChild(emojiButton)


        }
    }
})
















































/////Texte scri

 




   
    let divCom = document.createElement('div')
    divCom.id = `divCom${arrayTeste[i].comentariosId}`
    divCom.className = `divCom`






    ////TESTE SCROOOLLLLL

    let mainDivCom = document.createElement('div')
    mainDivCom.id = `mainDivCom${arrayTeste[i].comentariosId}`
    mainDivCom.className = `mainDivCom`

    mainDivCom.appendChild(divCom)


    ////TESTE SCROOOLLLLL
     
    document.getElementById('postGlobais').appendChild(mainDivCom)






    document.getElementById(botaoComentar.id).addEventListener('click', function () {




    
         


        if(document.getElementById(inputComentario.id).innerHTML === ""){
            document.getElementById("blankSpaceButton").click()

            return;

            

        }

        //FUNCTION PRECISA DE UM VALOR FIXO
        //O VALOR DE I SÓ VAI FUNCIONAR NO FOR
        //DEPOIS DISSO PERDE VALOR E DÁ ERRO





        let hourNow = `${new Date().toLocaleTimeString()}`

        let date = `${globalUser} em: ${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, "0")}-${new Date().getDate().toString().padStart(2, '0')} às: ${hourNow}`



         




        let dataComentario;
        dataComentario = document.createElement('p')
        dataComentario.innerText = date
        dataComentario.className = 'dataDaMensagem'
        dataComentario.style = "font-size: small;  font-family: Arial, Helvetica, sans-serif;"
        document.getElementById(divCom.id).appendChild(dataComentario)  

        mainDivCom.scrollTop = 0;

        



        let textoComentario;
        textoComentario = document.createElement('p')
        textoComentario.innerHTML = inputComentario.innerHTML //////////////////////1.TEXT 2.value
        textoComentario.style.color = '#a600ff'
        textoComentario.style.backgroundColor = 'white'
        textoComentario.className = 'border1 border-3 border-light'
        document.getElementById(divCom.id).appendChild(textoComentario)  

        mainDivCom.scrollTop = 0;



        let objData = {
            texto: inputComentario.innerHTML,////////////value
            data: date,
            id: 'data',
        }


        let objTexto = {
            data: date,
            texto: inputComentario.innerHTML,/////////////////////value
            id: 'texto',
        }




        arrayComentariosPost[valueToArrayCom][inputComentario.name].push(objTexto)
        arrayComentariosPost[valueToArrayCom][inputComentario.name].push(objData)
        sessionStorage.setItem('arrayComentariosPost', JSON.stringify(arrayComentariosPost));


        inputComentario.innerHTML = ""  //////////////value


        //SCROLL


        mainDivCom.scrollTop = 0;

        






    })


    if (arrayComentariosPost[arrayTeste[i].id][inputComentario.name].length > 0) {
        arrayComentariosPost[arrayTeste[i].id][inputComentario.name].forEach(element => {


            ////AO CONTRÁRIO PARA NÃO BUGAR O COLUMN-REVERSE




            if (element.id === 'texto') {


                let dataComentario;
                dataComentario = document.createElement('p')
                dataComentario.innerText = element.data
                dataComentario.className = 'dataDaMensagem'
                dataComentario.style = "font-size: small;  font-family: Arial, Helvetica, sans-serif;"
                document.getElementById(divCom.id).appendChild(dataComentario)


            }


            if (element.id === 'data') {


                let textoComentario;
                textoComentario = document.createElement('p')
                textoComentario.innerHTML = element.texto ////////////////////text
                textoComentario.style.color = '#a600ff'
                textoComentario.style.backgroundColor = 'white'
                textoComentario.className = 'border1 border-3 border-light'

 

                document.getElementById(divCom.id).appendChild(textoComentario)





            }






        })
    }


    ////AO CONTRÁRIO PARA NÃO BUGAR O COLUMN-REVERSE


    

}

///TESTE COLOCANCO POSTS NA TIMELINE



 



document.getElementById('searchBarUser').addEventListener('input', function () {

    if (document.getElementById('searchBarUser').value === "") {

        document.getElementById('searchBarResult').remove()
        let divSearchResult = document.createElement('div')
        divSearchResult.className = `searchBarResult bg-body-tertiary`
        divSearchResult.id = `searchBarResult`
        document.getElementById('testeRemoverDiv').appendChild(divSearchResult)

    }

    else {



        document.getElementById('searchBarResult').remove()
        let divSearchResult = document.createElement('div')
        divSearchResult.className = `searchBarResult bg-body-tertiary`
        divSearchResult.id = `searchBarResult`
        document.getElementById('testeRemoverDiv').appendChild(divSearchResult)

        for (var i = 0; i < arrayUsuarios.length; i++) {
            if (arrayUsuarios[i][1].includes(document.getElementById('searchBarUser').value)) {


                let paginaUser = i
                let pagina = document.createElement('button')
                pagina.className = `btn btn-outline-secondary`
                pagina.type = `button`
                pagina.innerText = `${arrayUsuarios[i][1]} `
                pagina.id = `buttonSearchResult${i}`
                pagina.style = "border: 1px solid rgb(128, 0, 255);"
                document.getElementById('searchBarResult').appendChild(pagina)

                document.getElementById(pagina.id).addEventListener('click', function () {


                    //erro estava aqui,coloquei i em vez de 0


                    let newWindow = window.open()
                    newWindow.document.write(arrayPaginas[paginaUser])
                    newWindow.document.close()

                })






            }

        }

    }//else

})










document.getElementById('searchUser').addEventListener('click', function () {



    //remove a div com os botões para ser criada de novo para dicionar a pesquisa atual
    document.getElementById('searchBarResult').remove()
    let divSearchResult = document.createElement('div')
    divSearchResult.className = `searchBarResult bg-body-tertiary`
    divSearchResult.id = `searchBarResult`
    document.getElementById('testeRemoverDiv').appendChild(divSearchResult)





    let notIn = true



    for (var i = 0; i < arrayUsuarios.length; i++) {
        if (document.getElementById('searchBarUser').value === arrayUsuarios[i][1]) {

            notIn = false


            let paginaUser = i
            let pagina = document.createElement('button')
            pagina.className = `btn btn-outline-secondary`
            pagina.type = `button`
            pagina.innerText = `${arrayUsuarios[i][1]} `
            pagina.id = `buttonSearchResult${i}`
            pagina.style = "border: 1px solid rgb(128, 0, 255);"
            document.getElementById('searchBarResult').appendChild(pagina)

            document.getElementById(pagina.id).addEventListener('click', function () {


                //erro estava aqui,coloquei i em vez de 0


                let newWindow = window.open()
                newWindow.document.write(arrayPaginas[paginaUser])
                newWindow.document.close()

            })



        }


    }

    if (notIn === true) {
        document.getElementById('btnModalIndex').click()
    }

})









// arrayUsuarios.forEach(element => {




//     let pagina = document.createElement('button')
//     pagina.innerText = `Página de ${element[0]}`
//     pagina.id = element[0]
//     document.getElementById('boxDados').appendChild(pagina)

//     document.getElementById(element[0]).addEventListener('click', function () {
//         for (let i = 0; i < arrayUsuarios.length; i++) {

//             //erro estava aqui,coloquei i em vez de 0
//             if (element[0] === arrayUsuarios[i][0]) {



//                 let newWindow = window.open()
//                 newWindow.document.write(arrayPaginas[i])
//                 newWindow.document.close()




//             }

//         }

//     })



// });














// let arrayUsuarios = JSON.parse(sessionStorage.getItem('arrayUsuarios')) || [];
// let arrayPaginas = JSON.parse(sessionStorage.getItem('arrayPaginas')) || [];
// let arrayPost = JSON.parse(sessionStorage.getItem('arrayPost')) || [];

// console.log(arrayUsuarios);
// console.log(arrayPaginas);

// arrayUsuarios.forEach((element, index) => {
//     console.log('teste', element[0]);

//     let pagina = document.createElement('button');
//     pagina.innerText = `Página de ${element[0]}`;
//     pagina.id = element[0];
//     document.getElementById('boxDados').appendChild(pagina);

//     pagina.addEventListener('click', function () {
//         console.log('teste', element[0]);

//         let newWindow = window.open();
//         newWindow.document.write(arrayPaginas[index]);
//         newWindow.document.close();
//     });
// });






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



    console.log(arrayComentariosPost)


});










 

//LISTA EMOJI
let emoji = `exclamation_question_mark trade_mark information leftright_arrow updown_arrow upleft_arrow upright_arrow downright_arrow downleft_arrow keyboard sun cloud umbrella snowman comet check_box_with_check umbrella_with_rain_drops hot_beverage shamrock skull_and_crossbones radioactive biohazard orthodox_cross wheel_of_dharma frowning_face female_sign male_sign aries taurus sagittarius capricorn aquarius pisces spade_suit club_suit heart_suit diamond_suit hot_springs hammer_and_pick anchor crossed_swords medical_symbol balance_scale alembic gear scissors check_mark_button airplane envelope black_nib check_mark multiply star_of_david sparkles eightspoked_asterisk eightpointed_star snowflake sparkle red_question_mark white_question_mark white_exclamation_mark red_exclamation_mark heart_exclamation red_heart plus minus divide right_arrow_curving_up right_arrow_curving_down wavy_dash japanese_congratulations_button japanese_secret_button grinning_face grinning_face_with_big_eyes grinning_face_with_smiling_eyes beaming_face_with_smiling_eyes grinning_squinting_face grinning_face_with_sweat rolling_on_the_floor_laughing face_with_tears_of_joy slightly_smiling_face upsidedown_face winking_face smiling_face_with_smiling_eyes smiling_face_with_halo smiling_face_with_hearts smiling_face_with_hearteyes starstruck face_blowing_a_kiss kissing_face smiling_face kissing_face_with_closed_eyes kissing_face_with_smiling_eyes smiling_face_with_tear face_savoring_food face_with_tongue winking_face_with_tongue zany_face squinting_face_with_tongue moneymouth_face hugging_face face_with_hand_over_mouth shushing_face thinking_face zippermouth_face face_with_raised_eyebrow neutral_face expressionless_face face_without_mouth face_in_clouds smirking_face unamused_face face_with_rolling_eyes grimacing_face face_exhaling lying_face relieved_face pensive_face sleepy_face drooling_face sleeping_face face_with_medical_mask face_with_thermometer face_with_headbandage nauseated_face face_vomiting sneezing_face hot_face cold_face woozy_face knockedout_face face_with_spiral_eyes exploding_head cowboy_hat_face partying_face disguised_face smiling_face_with_sunglasses nerd_face face_with_monocle confused_face worried_face slightly_frowning_face face_with_open_mouth hushed_face astonished_face flushed_face pleading_face frowning_face_with_open_mouth anguished_face fearful_face anxious_face_with_sweat sad_but_relieved_face crying_face loudly_crying_face face_screaming_in_fear confounded_face persevering_face disappointed_face downcast_face_with_sweat weary_face tired_face yawning_face face_with_steam_from_nose pouting_face angry_face face_with_symbols_on_mouth smiling_face_with_horns angry_face_with_horns skull pile_of_poo clown_face ogre goblin ghost alien alien_monster robot grinning_cat grinning_cat_with_smiling_eyes cat_with_tears_of_joy smiling_cat_with_hearteyes cat_with_wry_smile kissing_cat weary_cat crying_cat pouting_cat seenoevil_monkey hearnoevil_monkey speaknoevil_monkey kiss_mark love_letter heart_with_arrow heart_with_ribbon sparkling_heart growing_heart beating_heart revolving_hearts two_hearts heart_decoration broken_heart heart_on_fire mending_heart orange_heart yellow_heart green_heart blue_heart purple_heart brown_heart black_heart white_heart hundred_points anger_symbol collision dizzy sweat_droplets dashing_away hole bomb speech_balloon i_witness left_speech_bubble right_anger_bubble thought_balloon zzz mechanical_arm mechanical_leg brain anatomical_heart lungs tooth bone eyes eye tongue mouth genie zombie people_with_bunny_ears person_fencing skier family speaking_head bust_in_silhouette busts_in_silhouette people_hugging footprints light_skin_tone mediumlight_skin_tone medium_skin_tone mediumdark_skin_tone dark_skin_tone red_hair curly_hair white_hair bald monkey_face monkey gorilla orangutan dog_face dog guide_dog service_dog poodle wolf fox raccoon cat_face cat black_cat lion tiger_face tiger leopard horse_face horse unicorn zebra deer bison cow_face ox water_buffalo cow pig_face pig boar pig_nose ram ewe goat camel twohump_camel llama giraffe elephant mammoth rhinoceros hippopotamus mouse_face mouse rat hamster rabbit_face rabbit chipmunk beaver hedgehog bat bear polar_bear koala panda sloth otter skunk kangaroo badger paw_prints turkey chicken rooster hatching_chick baby_chick frontfacing_baby_chick bird penguin dove eagle duck swan owl dodo feather flamingo peacock parrot frog crocodile turtle lizard snake dragon_face dragon sauropod trex spouting_whale whale dolphin seal fish tropical_fish blowfish shark octopus spiral_shell snail butterfly bug ant honeybee beetle lady_beetle cricket cockroach spider spider_web scorpion mosquito fly worm microbe bouquet cherry_blossom white_flower rosette rose wilted_flower hibiscus sunflower blossom tulip seedling potted_plant evergreen_tree deciduous_tree palm_tree cactus sheaf_of_rice herb four_leaf_clover maple_leaf fallen_leaf leaf_fluttering_in_wind grapes melon watermelon tangerine lemon banana pineapple mango red_apple green_apple pear peach cherries strawberry blueberries kiwi_fruit tomato olive coconut avocado eggplant potato carrot ear_of_corn hot_pepper bell_pepper cucumber leafy_green broccoli garlic onion mushroom peanuts chestnut bread croissant baguette_bread flatbread pretzel bagel pancakes waffle cheese_wedge meat_on_bone poultry_leg cut_of_meat bacon hamburger french_fries pizza hot_dog sandwich taco burrito tamale stuffed_flatbread falafel egg cooking shallow_pan_of_food pot_of_food fondue bowl_with_spoon green_salad popcorn butter salt canned_food bento_box rice_cracker rice_ball cooked_rice curry_rice steaming_bowl spaghetti roasted_sweet_potato oden sushi fried_shrimp fish_cake_with_swirl moon_cake dango dumpling fortune_cookie takeout_box crab lobster shrimp squid oyster soft_ice_cream shaved_ice ice_cream doughnut cookie birthday_cake shortcake cupcake pie chocolate_bar candy lollipop custard honey_pot baby_bottle glass_of_milk teapot teacup_without_handle sake bottle_with_popping_cork wine_glass cocktail_glass tropical_drink beer_mug clinking_beer_mugs clinking_glasses tumbler_glass cup_with_straw bubble_tea beverage_box mate ice chopsticks fork_and_knife_with_plate fork_and_knife spoon kitchen_knife amphora globe_showing_europeafrica globe_showing_americas globe_showing_asiaaustralia globe_with_meridians world_map map_of_japan compass snowcapped_mountain mountain volcano mount_fuji camping beach_with_umbrella desert desert_island national_park stadium classical_building building_construction brick rock wood hut houses derelict_house house house_with_garden office_building japanese_post_office post_office hospital bank hotel love_hotel convenience_store school department_store factory japanese_castle castle wedding tokyo_tower statue_of_liberty church mosque hindu_temple synagogue shinto_shrine kaaba fountain tent foggy night_with_stars cityscape sunrise_over_mountains sunrise cityscape_at_dusk sunset bridge_at_night carousel_horse ferris_wheel roller_coaster barber_pole circus_tent locomotive railway_car highspeed_train bullet_train train metro light_rail station tram monorail mountain_railway tram_car bus oncoming_bus trolleybus minibus ambulance fire_engine police_car oncoming_police_car taxi oncoming_taxi automobile oncoming_automobile sport_utility_vehicle pickup_truck delivery_truck articulated_lorry tractor racing_car motorcycle motor_scooter manual_wheelchair motorized_wheelchair auto_rickshaw bicycle kick_scooter skateboard roller_skate bus_stop motorway railway_track oil_drum fuel_pump police_car_light horizontal_traffic_light vertical_traffic_light stop_sign construction sailboat canoe speedboat passenger_ship ferry motor_boat ship small_airplane airplane_departure airplane_arrival parachute seat helicopter suspension_railway mountain_cableway aerial_tramway satellite rocket flying_saucer bellhop_bell luggage hourglass_done hourglass_not_done watch alarm_clock stopwatch timer_clock mantelpiece_clock twelve_oclock twelvethirty one_oclock onethirty two_oclock twothirty three_oclock threethirty four_oclock fourthirty five_oclock fivethirty six_oclock sixthirty seven_oclock seventhirty eight_oclock eightthirty nine_oclock ninethirty ten_oclock tenthirty eleven_oclock eleventhirty new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon full_moon waning_gibbous_moon last_quarter_moon waning_crescent_moon crescent_moon new_moon_face first_quarter_moon_face last_quarter_moon_face thermometer full_moon_face sun_with_face ringed_planet star glowing_star shooting_star milky_way sun_behind_cloud cloud_with_lightning_and_rain sun_behind_small_cloud sun_behind_large_cloud sun_behind_rain_cloud cloud_with_rain cloud_with_snow cloud_with_lightning tornado fog wind_face cyclone rainbow closed_umbrella umbrella_on_ground high_voltage snowman_without_snow fire droplet water_wave jackolantern christmas_tree fireworks sparkler firecracker balloon party_popper confetti_ball tanabata_tree pine_decoration japanese_dolls carp_streamer wind_chime moon_viewing_ceremony red_envelope ribbon wrapped_gift reminder_ribbon admission_tickets ticket military_medal trophy sports_medal 1st_place_medal 2nd_place_medal 3rd_place_medal soccer_ball baseball softball basketball volleyball american_football rugby_football tennis flying_disc bowling cricket_game field_hockey ice_hockey lacrosse ping_pong badminton boxing_glove martial_arts_uniform goal_net flag_in_hole ice_skate fishing_pole diving_mask running_shirt skis sled curling_stone bullseye yoyo kite pool_8_ball crystal_ball magic_wand nazar_amulet video_game joystick slot_machine game_die puzzle_piece teddy_bear piata nesting_dolls chess_pawn joker mahjong_red_dragon flower_playing_cards performing_arts framed_picture artist_palette thread sewing_needle yarn knot glasses sunglasses goggles lab_coat safety_vest necktie tshirt jeans scarf gloves coat socks dress kimono sari onepiece_swimsuit briefs shorts bikini womans_clothes purse handbag clutch_bag shopping_bags backpack thong_sandal mans_shoe running_shoe hiking_boot flat_shoe highheeled_shoe womans_sandal ballet_shoes womans_boot crown womans_hat top_hat graduation_cap billed_cap military_helmet rescue_workers_helmet prayer_beads lipstick ring gem_stone muted_speaker speaker_low_volume speaker_medium_volume speaker_high_volume loudspeaker megaphone postal_horn bell bell_with_slash musical_score musical_note musical_notes studio_microphone level_slider control_knobs microphone headphone radio saxophone accordion guitar musical_keyboard trumpet violin banjo drum long_drum mobile_phone mobile_phone_with_arrow telephone telephone_receiver pager fax_machine battery electric_plug laptop desktop_computer printer computer_mouse trackball computer_disk floppy_disk optical_disk dvd abacus movie_camera film_frames film_projector clapper_board television camera camera_with_flash video_camera videocassette magnifying_glass_tilted_left magnifying_glass_tilted_right candle light_bulb flashlight red_paper_lantern diya_lamp notebook_with_decorative_cover closed_book open_book green_book blue_book orange_book books notebook ledger page_with_curl scroll page_facing_up newspaper rolledup_newspaper bookmark_tabs bookmark label money_bag coin yen_banknote dollar_banknote euro_banknote pound_banknote money_with_wings credit_card receipt chart_increasing_with_yen email incoming_envelope envelope_with_arrow outbox_tray inbox_tray package closed_mailbox_with_raised_flag closed_mailbox_with_lowered_flag open_mailbox_with_raised_flag open_mailbox_with_lowered_flag postbox ballot_box_with_ballot pencil fountain_pen pen paintbrush crayon memo briefcase file_folder open_file_folder card_index_dividers calendar tearoff_calendar spiral_notepad spiral_calendar card_index chart_increasing chart_decreasing bar_chart clipboard pushpin round_pushpin paperclip linked_paperclips straight_ruler triangular_ruler card_file_box file_cabinet wastebasket locked unlocked locked_with_pen locked_with_key key old_key hammer axe pick hammer_and_wrench dagger water_pistol boomerang bow_and_arrow shield carpentry_saw wrench screwdriver nut_and_bolt clamp white_cane link chains hook toolbox magnet ladder test_tube petri_dish dna microscope telescope satellite_antenna syringe drop_of_blood pill adhesive_bandage stethoscope door elevator mirror window bed couch_and_lamp chair toilet plunger shower bathtub mouse_trap razor lotion_bottle safety_pin broom basket roll_of_paper bucket soap toothbrush sponge fire_extinguisher shopping_cart cigarette coffin headstone funeral_urn moai placard atm_sign litter_in_bin_sign potable_water wheelchair_symbol mens_room womens_room restroom baby_symbol water_closet passport_control customs baggage_claim left_luggage warning children_crossing no_entry prohibited no_bicycles no_smoking no_littering nonpotable_water no_pedestrians no_mobile_phones no_one_under_eighteen up_arrow right_arrow down_arrow left_arrow right_arrow_curving_left left_arrow_curving_right clockwise_vertical_arrows counterclockwise_arrows_button back_arrow end_arrow on_arrow soon_arrow top_arrow place_of_worship atom_symbol om yin_yang latin_cross star_and_crescent peace_symbol menorah dotted_sixpointed_star gemini cancer leo virgo libra scorpio ophiuchus shuffle_tracks_button repeat_button repeat_single_button play_button fastforward_button next_track_button play_or_pause_button reverse_button fast_reverse_button last_track_button upwards_button fast_up_button downwards_button fast_down_button pause_button stop_button record_button eject_button cinema dim_button bright_button antenna_bars vibration_mode mobile_phone_off transgender_symbol infinity double_exclamation_mark currency_exchange heavy_dollar_sign recycling_symbol fleurdelis trident_emblem name_badge japanese_symbol_for_beginner hollow_red_circle cross_mark cross_mark_button curly_loop double_curly_loop part_alternation_mark copyright registered keycap_x23 keycap_ keycap_0 keycap_1 keycap_2 keycap_3 keycap_4 keycap_5 keycap_6 keycap_7 keycap_8 keycap_9 keycap_10 input_latin_uppercase input_latin_lowercase input_numbers input_symbols input_latin_letters a_button_blood_type ab_button_blood_type b_button_blood_type cl_button cool_button free_button id_button circled_m new_button ng_button o_button_blood_type ok_button p_button sos_button up_button vs_button japanese_here_button japanese_service_charge_button japanese_monthly_amount_button japanese_not_free_of_charge_button japanese_reserved_button japanese_bargain_button japanese_discount_button japanese_free_of_charge_button japanese_prohibited_button japanese_acceptable_button japanese_application_button japanese_passing_grade_button japanese_vacancy_button japanese_open_for_business_button japanese_no_vacancy_button red_circle orange_circle yellow_circle green_circle blue_circle purple_circle brown_circle black_circle white_circle red_square orange_square yellow_square green_square blue_square purple_square brown_square black_large_square white_large_square black_medium_square white_medium_square black_mediumsmall_square white_mediumsmall_square black_small_square white_small_square large_orange_diamond large_blue_diamond small_orange_diamond small_blue_diamond red_triangle_pointed_up red_triangle_pointed_down diamond_with_a_dot radio_button white_square_button black_square_button`
let emojiArray = emoji.split(' ')

console.log('CADE O COPIMHO?',emojiArray.includes('wine_glass'))
console.log(emojiArray);







const toastTrigger = document.getElementById('blankSpaceButton')
const toastLiveExample = document.getElementById('blankSpaceToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}





