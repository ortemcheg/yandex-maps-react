import React, {Component} from 'react';
import PropTypes from 'prop-types';

class YandexMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      mapLoaded: false,
      zoom: props.zoom,
      location: [props.location[0], props.location[1]]
    };
    this.mapRef = React.createRef();
    this.initAPI = this.initAPI.bind(this);
  }
  static defaultProps = {
    zoom: 16,
    location: [55.773206, 38.446328]
  }
  static propTypes = {
    location: PropTypes.arrayOf(PropTypes.number.isRequired),
    zoom: PropTypes.number.isRequired
  }
  componentDidMount() {
    this.ymaps = window.ymaps;
    if(!this.state.mapAPIIsReady) this.initAPI();
  }
  componentDidUpdate(){

  }
  initAPI(){
    //TODO: Write exception handlers
    const waitForYandexMapsAPI = new Promise( (resolve, reject) => {
      this.ymaps.ready( () => { resolve() });
    } );
    waitForYandexMapsAPI.then( () => {
      this.map = new this.ymaps.Map(this.mapRef.current, {
        center: [this.state.location[0], this.state.location[1]],
        zoom: this.state.zoom
      });
      this.setState( () => ({ mapLoaded: true }) );
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
