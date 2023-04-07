<h1 align="center"> Double Vertical Slider </h1>
<h6 align="center">Project <a href="https://doublevertical-slider-samuelcolares.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

</details>
<br>
<h3>Descrição</h3>

Projeto criativo aonde enquanto uma seção se desloca para cima a seção ao lado se desloca em sentido contrário ↑↓ e vice e versa ↓↑ 


<hr>
<h3>Novidades aprendidas</h3>

Com esse projeto aprendi uma noção maior em com deslocar elementos dentro de uma div (elemento pai) com overflow: hidden;

a noção no HTML por trás do projeto está em posicionar duas divs uma para o lado esquerdo e outra para o direito e os elementos correspontendes são inversos

Exemplo: 

```mermaid
graph LR;
    Esquerda-Elemento-4 --> Direita-Elemento-1;
    Direita-Elemento-1-->Esquerda-Elemento-4;
    Esquerda-Elemento-3 --> Direita-Elemento-2;
    Direita-Elemento-2-->Esquerda-Elemento-3;
    Esquerda-Elemento-2 --> Direita-Elemento-3;
    Direita-Elemento-3-->Esquerda-Elemento-2;
    Esquerda-Elemento-1 --> Direita-Elemento-4;
    Direita-Elemento-4-->Esquerda-Elemento-1;
```

```mermaid
graph LR;
    Esquerda-Elemento-4 --> Esquerda-Elemento-1 & Esquerda-Elemento-3;
    Esquerda-Elemento-3 --> Esquerda-Elemento-2 & Esquerda-Elemento-4;
    Esquerda-Elemento-2 --> Esquerda-Elemento-1 & Esquerda-Elemento-3;
    Esquerda-Elemento-1 --> Esquerda-Elemento-4 & Esquerda-Elemento-2;
    Direita-Elemento-1 --> Direita-Elemento-4 & Direita-Elemento-2;
    Direita-Elemento-2 --> Direita-Elemento-3 & Direita-Elemento-1;
    Direita-Elemento-3 --> Direita-Elemento-2 & Direita-Elemento-4;
    Direita-Elemento-4 --> Direita-Elemento-1 & Direita-Elemento-3;
```

Como no HTML os elementos são posicionados na sua ordem de escrita, precisamos deslocar entao o elemento da esquerda para cima com position absolute e top -300vh (-300vh porque estou usando 4 elementos no exemplo, a conta sempre vai ser '-(TotalElementos-1)*100vh')

Com a suposição de uma tela com 1000px de altura (height)

```mermaid
graph LR;
A[Esquerda-Elemento-1 0px] --> B[Direita-Elemento-1 0px];
C[Esquerda-Elemento-2 1000px] --> D[Direita-Elemento-2 1000px];
E[Esquerda-Elemento-3 2000px] --> F[Direita-Elemento-3 2000px];
G[Esquerda-Elemento-4 3000px] --> H[Direita-Elemento-4 3000px];
```
no JavaScript vou deslocar os elementos da direita de forma negativa para subir do 1 para o 4: 
```Javascript
rightSideSlides.style.transform = `translateY(-${(rightSlides.length - 1) * window.innerHeight}px)`
```
Com isso ao dar load os elementos vao ficar assim:
```mermaid
graph LR;
A[Esquerda-Elemento-1 0px] --> B[Direita-Elemento-4 0px];
C[Esquerda-Elemento-2 1000px] --> D[Direita-Elemento-3 -1000px];
E[Esquerda-Elemento-3 2000px] --> F[Direita-Elemento-2 -2000px];
G[Esquerda-Elemento-4 3000px] --> H[Direita-Elemento-1 -3000px];
```

agora só é preciso criar eventos para que quando o botão para cima for pressionado os elementos da esquerda se deslocam +1000px e os da direita em -1000px
e ao contrário com o botão para baixo

```javascript
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight // sliderContainer.clientHeight = altura total da tela (usamos 1000px no exemplo)
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` // assim os slides da direita descem -1000px
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)` // e os slides da esquerda sobem +1000px
}
```
<hr>
<h3>Licença</h3>


Este projeto foi inspirado no projeto número 26 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)


---
