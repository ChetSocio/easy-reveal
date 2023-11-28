# Easy-Reveal !

Easy reveal is the updated (by Chetraj Gautam) version of react-reveal package and is an animation framework for React. It's MIT licensed, has a tiny footprint and written specifically for React in ES6. It can be used to create various cool reveal on scroll animations in your application. If you liked this package, don't forget to star the Github repository. 

It also supports nextjs app directory as well as React 18

## Search Engine Visibility 

`easy-reveal` is regularly checked against googlebot in the Google Search Console to make sure that googlebot can see the content in the revealed elements. 


## Installation

In the command prompt run:

```sh
npm install easy-reveal --save
```

`yarn` is *coming soon: 



## Quick Start

Import effects from [React Reveal](https://www.npmjs.com/package/easy-reveal) to your project. Lets try `Zoom` effect first:

```javascript
import Zoom from 'easy-reveal/Zoom';
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

`easy-reveal` supports server side rendering out of the box. In some cases, when the javascript bundle arrives much later than the HTML&CSS it might cause a flickering. To prevent this `easy-reveal` will not apply reveal effects on the initial load. 
Another option is to apply gentle fadeout effect on the initial render. You can force it on all `easy-reveal` elements by placing the following code somewhere near the entry point of your app:

```jsx
import config from 'easy-reveal/globals';

config({ ssrFadeout: true });
```

Or you you can do it on a per element basis using `ssrFadeout` prop:

```jsx
<Zoom ssrFadeout><h1>Content</h1></Zoom>
```

One last option is to use `ssrReveal` prop. If enabled, this option will suppress both flickering and `ssrFadeout` effect. The unfortunate drawback of this option is that the revealed content will appear hidden to Googlebot and to anyone with javascript switched off. So it will makes sense for images and/or headings which are duplicated elsewhere on the page.

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

Copyright © 2018 Roman Nosov + 2023 Chetraj Gautam (BatchNepal). Project source code is licensed under the MIT license.
