# Componente Avatar

### O que é?

O componente Avatar é a representação de um usuário.

### Quando usar?

Esse componente geralmente é usado no Header, Tabelas, Formulários e Cards. Também pode ser usado em componentes de upload de fotos de usuário ou em um componente de depoimentos.

### O design

Abaixo você pode acompanhar as configurações visuais que o componente aceita.
Através dessas configurações é possível estabelecer o comportamento visual mais adequado para o componente.
---

  <div class="grid grid-cols-4">
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-1"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-2"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-3"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-4"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-5"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-6"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-7"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-8"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-9"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-10"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-11"></div>
    </div>
    <div class="xxl-col-1 xl-col-2 lg-col-3 sm-col-6 xy-align-center">
      <div data-component="ds-avatar-12"></div>
    </div>
  </div>

---

### O código

O componente é composto por um código javascript e por seu element HTML.

```js
  // main.js
  import { avatar } from 'leme-js-ui'

  const ddsAvatar = avatar()
  const selector = 'dds-avatar'
  const context = document.body
  
  ddsAvatar
    .register(selector, context)

  ddsAvatar
    .props.set({ 
      size: 4,
      style: 'square',
      img: {alt: 'Uma descrição...', src: '../images/alguma.jpg'},
      note: { status: 'success', position:'bottom-right'}
    })

  ddsAvatar.init()

```

Abaixo o elemento HTML do comopenente presente na view onde o componente será renderizado.

```html
  <!--view.html-->
  <div class="header">
    <!--Código omitido-->
    <div [data-component="dds-avatar"]></div>
  </div>

```

No exemplo acima o componente se conectar a div com o seletor ```[data-component="dds-avatar"]```.

### Uso

A partir dessa seção você acompanha todas as comfigurações visuais possíveis para o componente.

### Instanciando o componente

O primeiro passo para instanciar o componente é executar a função fábrica *avatar*.

Após criar a instância do componente é preciso definir um seletor css para que o componente encontre o elemento HTML ao qual vai se ligar. 

```js
  import { avatar } from 'leme-js-ui'

  const ddsAvatar = avatar()
  const selector = 'dds-avatar'
  const context = document.querySelector('body')

  ddsAvatar.register(selector, context)
```

É através desse elemento HTML que o componente se manifestará na view, e a fução register é responsável por criar essa ligação.

> Observe que a variável **context** contém o elemento html **body** que por sua vez contém o elemento de seletor **[data-component="dss-avatar"]**. Por tanto, o **body** é o **contexto** onde o componente deve encontrar seu próprio elemento HTML.

### Propriedades

Através das propriedades do componente é possível configurar o comportamento da imagem do componente.

#### Imagem

```js
  /*código omitido*/

  ddsAvatar.register(selector, context)

  ddsAvatar.props.set({ 
    img: { alt:'descrição', src: '../caminh/da/imagem'}
  })
```

#### Notificação

Ainda através das propriedades do componente é possível configurar o estilos das notificações e o posicionamento.

```js
  /*código omitido*/

  ddsAvatar.register(selector, context)

  ddsAvatar.props.set({ 
    /*código omitido*/
    note: { status:'warning', position: 'top-right'}
  })
```

* status: [success, warning, danger, off] 
* position: [top-right, bottom-right, top-left, bottom-left]

Acima você acompanhou os possíveis valores para as propriedades **status** e **position**

#### Tamanho

Outra possíbilida é configurar os variações de tamanho do componente.


```js
  /*código omitido*/

  ddsAvatar.register(selector, context)

  ddsAvatar.props.set({ 
    /*código omitido*/
    size: 6
  })
```

* size: [1, 2, 3, 4, 5, 6] 

Logo acima você acompanhou os tamanhos disponíves para definição do componente.

#### Formato

Ainda é possível escolher entre o formato quadrado e o redondo.

```js
  /*código omitido*/

  ddsAvatar.register(selector, context)

  ddsAvatar.props.set({ 
    /*código omitido*/
    style: 'square'
  })
```

* style: [square, circle] 

Logo acima você acompanhou os estilos disponíves para definição do componente.



