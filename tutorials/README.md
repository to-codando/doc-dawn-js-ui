# Tutorial

Essa é uma página de exemplo da documentação da biblioteca e o exemplo demonstra como criar um input básico.

```js
import template from './template.html.js'
import styles from './styles.css.js'

export const input = ({ view }) => {

  view(() => ({
    template,
    styles
  }))

}
```

Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

Esse breve exemplo demonstra como criar um input básico.

```js
/*Código omitido*/

const template = ({ html, props, state }) => html`
  <label>
    <span>${props.label}</span>
    <input value="${state.value}"/>
  </label>
`

/*Código omitido*/

export const input = (_) => {

  _.view(() => ({
    template,
    styles
  }))

}
```

Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

Esse breve exemplo demonstra como criar um input básico.

```html
  <label>
    <span>${props.label}</span>
    <input value="${state.value}"/>
  </label>
```

Essa é uma página de exemplo da documentação da biblioteca e o exemplo demonstra como criar um input básico.

```js
/*Código omitido*/

const styles = ({ css }) => css`
  input { 
    display: flex;
    width: 100%;
    padding: 1rem;
  }
`

/*Código omitido*/

export const input = ({ view }) => {

  view(() => ({
    template,
    styles
  }))

}
```
Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

Esse breve exemplo demonstra como criar um input básico.

```css
  input { 
    display: flex;
    width: 100%;
    padding: 1rem;
  }
```
Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

  <div class="widget">
    <h3>dsInput</h3>
    <div class="content">
      <div data-component="ds-name"></div>
    </div>
  </div>


  > Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

  <div class="widget">
    <h3>dsText</h3>
    <div class="content">
      <div data-component="ds-text"></div>
    </div>
  </div>  

```js
 /*código omitido*/
  _.hooks(() => ({
    beforeOnInit,
    afterOnInit
  }))

  /*código omitido*/

  const beforeOnInit = () => {}
  const afterOnInit = () => {}
```

Esse é um breve exemplo de como escrever um componente básico que contém algumas instruções para definir um templates e um estilo e também eventos dom que permitirão ao usuário interagir com o componente.

Esse breve exemplo demonstra como criar um input básico.
