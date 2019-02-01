## Synopsis
A set of React components for embedding Yandex Maps in React Apps.

**IMPORTANT** The components albeit functional are in the early stages of development. The fully fledged library will be rearranged and uploaded to the mpm registry when it's ready.

## Motivation
Yandex Maps (YM) is the most popular map service in Russia. The YM team provides \[imperative\] JavaScript API to enable developers to embed Yandex Maps in their JS apps and to add geo objects to those maps. yandex-maps-react is an easy to use React abstaction for that API. 

## Usage
1. Go to the [Yandex Developers Area](https://developer.tech.yandex.ru/) and grab your API key for Yandex.Maps
2. Add the Yandex Maps JS API library to your page:
```HTML
    <script src="https://api-maps.yandex.ru/2.1/?apikey=<your API-key>&lang=en_US" type="text/javascript">
    </script>
```
3. Use yandex-maps-react in your app and then add the bundle with your app right under the <script> from step 2.
4. The YandexMap component renders a div with a class 'yaMap' to the DOM. Define the size (width and height) of that div in your CSS to make the component visible:
```CSS
.yaMap {
  /*use any units you like*/
  width: 50%;
  height: 10em;
  }
```

## Code samples
The most important component in this library is YandexMap. It renders a div with your map to the DOM. You can use that component by itself but most likely you'll want to add Placemarks, Baloons and other geo objects to it. You can add those as children to YandexMap.

The code below renders a Yandex Map and two Placemarks on it.

```Javascript
import React, {Component} from 'react';
import YandexMap from './YandexMap';
import Placemark from './Placemark';

class App extends Component {
  render() {
    return (
      <YandexMap zoom={17} location={[55.754150, 37.608269]} >
        <Placemark coordinates={[23.323, 32.232]} />
        <Placemark coordinates={[65.323, 97.232]} />
      </YandexMap>
    )
  }
}

//Don't forget to use ReactDom.render() to render your component to the DOM


```
