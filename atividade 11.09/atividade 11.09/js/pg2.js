let texto = ["O coração da casa. Blend artesanal com notas de chocolate amargo e caramelo.","Nossa assinatura. Café espresso combinado com leite vaporizado e um toque floral suave de lavanda.","Receita clássica francesa: crocante por fora, aerado e macio por dentro.","Pão de fermentação natural tostado, avocado temperado e ovo pochê com finalização de sementes."];
let imagem = ["../imagem/cafe1.png","../imagem/cafe2.png","../imagem/croasant.png","../imagem/sla.png"];
let preco = ["R$ 7,50","R$ 12,00","R$ 8,00","R$ 15,00"]



function cards(){

let cards = document.querySelector('#cards');

for(let i = 0; i < texto.length; i++){
    cards.innerHTML += ` <div class="primeiro" id="primeiro">

            <img src="${imagem[i]}" alt="qualquercoisa">
             <p class="texto">${texto[i]}</p>
             <br>
             <p class = "preco">${preco[i]}</p>
             
            <button id="butcard" class="butcard">Pedir</button>
        </div>`
}

}
cards()
