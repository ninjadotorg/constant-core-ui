# `@cconstant-core-ui/base`

> This is style base of constant.money

## Usage

### Imports

import fonts at your head

```html
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet" />
```

import at SCSS root file

```scss
@import "~@constant-core-ui/base";
```

### Classes

#### Button

```jsx
<button className="c-btn">Place holder</button>
<button className="c-btn c-btn-primary">Place holder</button>
<button className="c-btn c-btn-red">Place holder</button>
<button className="c-btn c-btn-secondary c-btn-primary">Place holder</button>
<button className="c-btn c-btn-secondary c-btn-red">Place holder</button>
```

#### Input

```jsx
<input className="c-input" />
```

#### Breadcrumb

```jsx
<div className="c-breadcrumb">
  <ul>
    <li><a href="https://constant.money">Constant</a></li>
    <li><a href="https://explorer.constant.money">Explorer</a></li>
    <li><a href={`/block/${blockHash}`}>{`Block: ${blockHash}`}</a></li>
    <li><span>Txs</span></li>
  </ul>
</div>
```

#### Blocks

```jsx
<div className="c-block" />
```

#### Utils

```jsx
<div className="c-shadow-bottom" />
```
