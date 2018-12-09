import React, {Component} from 'react';
import PropTypes from 'prop-types';

class YandexMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapAPIIsReady: false,
      mapLoaded: false,
      zoom: props.zoom,
      location: {
        lat: props.location.lat,
        lng: props.location.lng,
      }
    };
    this.mapRef = React.createRef();
    this.initAPI = this.initAPI.bind(this);
  }
  static defaultProps = {
    zoom: 16,
    location: {
      lat: 55.773206,
      lng: 38.446328,
    }
  }
  static propTypes = {
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
    zoom: PropTypes.number.isRequired
  }
  componentDidMount() {
    this.ymaps = window.ymaps;
    if(!this.state.mapAPIIsReady) this.initAPI();
  }
  componentDidUpdate(){
    this.map = new this.ymaps.Map(this.mapRef.current, {
      center: [this.state.location.lat, this.state.location.lng],
      zoom: this.state.zoom
    });
  }
  initAPI(){
    //TODO: Write exception handlers
    const waitForYandexMapsAPI = new Promise( (resolve, reject) => {
      this.ymaps.ready( () => { resolve() });
    } );
    waitForYandexMapsAPI.then( () => {
      this.setState( () => ({ mapAPIIsReady: true }) );
    } );
  }
  //test this
  componentWillUnmount(){
    this.map.destroy();
  }
  render(){
    return <div className="yaMap" ref={this.mapRef} />
  }
}

export default YandexMap;
