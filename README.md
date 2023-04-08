<h1 align="center"> Double Vertical Slider </h1>
<h6 align="center">Project <a href="https://doublevertical-slider-samuelcolares.vercel.app/">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

<h3>Description</h3>
Creative project where while one section moves up, the section next to it moves in the opposite direction ↑↓ and vice versa ↓↑

<hr>
<h3>New things learned</h3>
With this project, I learned a better understanding of how to move elements inside a div (parent element) with overflow: hidden.

The HTML behind the project involves positioning two divs, one to the left and one to the right, and the corresponding elements are inverses.

Example:

```mermaid
graph LR;
    Left-Element-1 --> Right-Element-4;
    Right-Element-4-->Left-Element-1;
    Left-Element-2 --> Right-Element-3;
    Right-Element-3-->Left-Element-2;
    Left-Element-3 --> Right-Element-2;
    Right-Element-2-->Left-Element-3;
    Left-Element-4 --> Right-Element-1;
    Right-Element-1-->Left-Element-4;
```

```mermaid
graph LR;
    Left-Element-4 --> Left-Element-1 & Left-Element-3;
    Left-Element-3 --> Left-Element-2 & Left-Element-4;
    Left-Element-2 --> Left-Element-1 & Left-Element-3;
    Left-Element-1 --> Left-Element-4 & Left-Element-2;
    Right-Element-1 --> Right-Element-4 & Right-Element-2;
    Right-Element-2 --> Right-Element-3 & Right-Element-1;
    Right-Element-3 --> Right-Element-2 & Right-Element-4;
    Right-Element-4 --> Right-Element-1 & Right-Element-3;

```

As in HTML, the elements are positioned in the order they are written, so we need to move the left element up with position absolute and top -300vh (-300vh because I'm using 4 elements in the example, the count will always be '-(TotalElements-1)*100vh').

With the assumption of a screen with 1000px height:

```mermaid
graph LR;
A[Left-Element-1 0px] --> B[Right-Element-1 0px];
C[Left-Element-2 1000px] --> D[Right-Element-2 1000px];
E[Left-Element-3 2000px] --> F[Right-Element-3 2000px];
G[Left-Element-4 3000px] --> H[Right-Element-4 3000px];
```

In JavaScript, I'll move the elements on the left side in negative 300vh to move from 1 to 4:

```JavaScript
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
```
With this, when the elements are loaded, they will look like this:

```mermaid
graph LR;
G[Left-Element-1 -3000px]
E[Left-Element-2 -2000px]    
C[Left-Element-3 -1000px]
A[Left-Element-4 0px] --> B[Right-Element-1 0px];
Z[overflow:hidden] --> D[Right-Element-2 1000px];
X[overflow:hidden] --> F[Right-Element-3 2000px];
Y[overflow:hidden] --> H[Right-Element-4 3000px];

```

Now i just need to create a event so that when the up button is pressed the elements on the left move +1000px, and the ones on the right move -1000px and the reverse logic applies to down button

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
<h3>License</h3>


This project was inspired by project number 26 from the public repository 50 projects 50 days (https://github.com/bradtraversy/50projects50days) 
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
    Esquerda-Elemento-1 --> Direita-Elemento-4;
    Direita-Elemento-4-->Esquerda-Elemento-1;
    Esquerda-Elemento-2 --> Direita-Elemento-3;
    Direita-Elemento-3-->Esquerda-Elemento-2;
    Esquerda-Elemento-3 --> Direita-Elemento-2;
    Direita-Elemento-2-->Esquerda-Elemento-3;
    Esquerda-Elemento-4 --> Direita-Elemento-1;
    Direita-Elemento-1-->Esquerda-Elemento-4;
```

```mermaid
graph LR;
    Esquerda-Elemento-1 --> Esquerda-Elemento-4 & Esquerda-Elemento-2;
    Esquerda-Elemento-2 --> Esquerda-Elemento-1 & Esquerda-Elemento-3;
    Esquerda-Elemento-3 --> Esquerda-Elemento-2 & Esquerda-Elemento-4;
    Esquerda-Elemento-4 --> Esquerda-Elemento-3 & Esquerda-Elemento-1;
    Direita-Elemento-4 --> Direita-Elemento-1 & Direita-Elemento-3;
    Direita-Elemento-3 --> Direita-Elemento-2 & Direita-Elemento-4;
    Direita-Elemento-2 --> Direita-Elemento-3 & Direita-Elemento-1;
    Direita-Elemento-1 --> Direita-Elemento-4 & Direita-Elemento-2;
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
no JavaScript vou deslocar os elementos da esquerda em negativos 300vh para subir do 1 para o 4: 
```Javascript
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
```
Com isso ao dar load os elementos vao ficar assim:
```mermaid
graph LR;
G[Esquerda-Elemento-1 -3000px]
E[Esquerda-Elemento-2 -2000px]    
C[Esquerda-Elemento-3 -1000px]
A[Esquerda-Elemento-4 0px] --> B[Direita-Elemento-1 0px];
Z[overflow:hidden] --> D[Direita-Elemento-2 1000px];
X[overflow:hidden] --> F[Direita-Elemento-3 2000px];
Y[overflow:hidden] --> H[Direita-Elemento-4 3000px];
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
