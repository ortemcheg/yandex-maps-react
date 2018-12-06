import React, {Component} from 'react';

class YandexMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapAPIIsReady: false,
      mapLoaded: false,
      location: {
        lat: props.location.lat,
        lng: props.location.lng,
        zoom: props.location.zoom
      }
    };
    this.mapRef = React.createRef();
    this.initAPI = this.initAPI.bind(this);
  }
  static defaultProps = {
    location: {
      lat: 55.773206,
      lng: 38.446328,
      zoom: 16
    }
  }
  componentDidMount() {
    this.ymaps = window.ymaps;
    if(!this.state.mapAPIIsReady) this.initAPI();
  }
  componentDidUpdate(){
    if(!this.state.mapAPIIsReady) console.log('componentWillUpdate: Holly Molly! The API is still not ready!');
    this.map = new this.ymaps.Map(this.mapRef.current, {
      center: [this.state.location.lat, this.state.location.lng],
      zoom: this.state.location.zoom
    });
  }
  initAPI(){
    //Figure out the 'this' thing
    const self = this;
    //TODO: Write exception handlers
    const waitForYandexMapsAPI = new Promise( function(resolve, reject) {
      self.ymaps.ready( () => { resolve() });
    } );
    waitForYandexMapsAPI.then( () => {
      self.setState( () => ({ mapAPIIsReady: true }) );
    } );
  }
  render(){
    return <div className="yaMap" ref={this.mapRef} />
  }
}

export default YandexMap;
