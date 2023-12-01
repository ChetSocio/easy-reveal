# Easy-Reveal ! (In Beta 🚀🚀)

This package will be live soon. Please wait till tthen. We are still testing its compatibility with
 nextjs and typescript for now.  But you can play with it and raise issues in github 😊

Easy reveal is the created & managed by Chetraj Gautam is an animation framework for React and Nextjs. It's MIT licensed, has a tiny footprint and written specifically for React in ES5. It can be used to create various cool reveal on scroll animations in your application. If you liked this package, don't forget to star the Github repository. 

It also supports nextjs app directory as well as React 18

## Installation

In the command prompt run:

```sh
npm install easy-reveal --save
```

`yarn` is *coming soon: 



## Quick Start

Import effects from [React Reveal](https://www.npmjs.com/package/easy-reveal) to your project. Lets try `Zoom` effect first:

```javascript
"use client" //in nextjs-14
import Zoom from 'easy-reveal';
```

Place the following code somewhere in your `render` method: 

```jsx
<Zoom>
  <p>Markup that will be revealed on scroll</p>
</Zoom>
```

You should see zooming animation that reveals text inside the tag. You can change this text to any JSX you want. If you place this code further down the page you'll see that it'd appear as you scroll down.

## Revealing React Components

You may just wrap your custom React component with the effect of your choosing like so:

```jsx
<Zoom>  
  <CustomComponent />
</Zoom>
```

In such case, in the resulting `<CustomComponent />` HTML markup will be wrapped in a `div` tag. If you would rather have a different HTML tag then wrap `<CustomComponent />` in a tag of your choosing:

```jsx
<Zoom>
  <section>
    <CustomComponent />   
  </section>
</Zoom>
```

or if you want to customize `div` props:

```jsx
<Zoom>
  <div className="some-class">
    <CustomComponent />   
  </div>
</Zoom>
```

## Revealing Images

If you want to reveal an image you can wrap `img` tag with with the desired `easy-reveal` effect:

```jsx
<Zoom>
  <img height="300" width="400" src="https://source.unsplash.com/random/300x400" />
</Zoom>
```

It would be a very good idea to specify width and height of any image you wish to reveal.

## Children

`easy-reveal` will attach a reveal effect to each child it gets. In other words,

```jsx
<Zoom>
  <div>First Child</div>
  <div>Second Child</div>
</Zoom>
```

will be equivalent to:

```jsx
<Zoom>
  <div>First Child</div>
</Zoom>
<Zoom>
  <div>Second Child</div>
</Zoom>  
```

If you don't want this to happen, you should wrap multiple children in a `div` tag:

```jsx
<Zoom>
  <div>
    <div>First Child</div>
    <div>Second Child</div>
  </div>
</Zoom>
```


## Server Side Rendering

`easy-reveal` doesnot supports server side rendering out of the box.  
## Forking This Package

Clone the this repository using the following command:

```sh
git clone https://github.com/ChetSocio/easy-reveal.git
```

In the cloned directory, you can run following commands:

```sh
npm install
```

Installs required node modules

```sh
npm run build
```

Builds the package for production to the `dist` folder

```sh
npm test
```

Runs tests

## License

Copyright © 2023 Chetraj Gautam (CEO of BatchNepal.com). Project source code is licensed under the MIT license.
