import React, {
    Component,
    PropTypes,
} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import AppStore from '../store/store';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
require('moment/locale/ru');
moment.locale('ru');

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            culture: 'ru',
            events: AppStore.getState().events,
            showModal: false,
            dataPlan: null,
            style: {
                overlay : {
                    position          : 'fixed',
                    top               : 0,
                    left              : 0,
                    right             : 0,
                    bottom            : 0,
                    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
                },
                content : {
                    position                   : 'absolute',
                    top                        : '40px',
                    left                       : '40px',
                    right                      : '40px',
                    bottom                     : '40px',
                    border                     : '1px solid #ccc',
                    background                 : '#fff',
                    overflow                   : 'auto',
                    WebkitOverflowScrolling    : 'touch',
                    borderRadius               : '4px',
                    outline                    : 'none',
                    padding                    : '20px'

                }
            }
        }
        this.internalStatet = {
            isMounted: true
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                projectsItem: AppStore.getState().projectsItem,
                events: AppStore.getState().events
            });
        }

    }
    componentDidMount() {
        this.internalStatet.isMounted = true;
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        this.internalStatet.isMounted = false;
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    onSelectEvent(e, event){
        // console.log('events', e)
        this.setState({
            showModal: true,
            dataPlan: e
        });

    }
    close(){
        this.setState({
            showModal: false
        });
    }
    render() {
        console.log('render', this.state.events);
        var autor = null,
            description = null,
            title = null,
            media = [],
        componentNode = null;
        if (this.state.dataPlan !== null) {
            autor = this.state.dataPlan.autor;
            description = this.state.dataPlan.description;
            title = this.state.dataPlan.title;
            media = this.state.dataPlan.media;
            componentNode = media.map((prop, id) => {
                if (prop.item_type === 'description') {
                    return (<p key={id}>{prop.value}</p>)
                }
                else if (prop.item_type === 'image') {
                    return (<img className="img-polaroid" style={{margin: '5px 0px 15px'}} key={id} src={prop.url} alt=""/>);
                }
                else if (prop.item_type === 'subtitle') {
                    return (<h3>{prop.value}</h3>);
                }
                else if (prop.item_type === 'video') {
                    // console.log('galleryDetail', prop.youtube_id);
                    const opts = {
                        height: '200',
                        width: '240',
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                        }
                    };
                    return (<YouTube
                        key={id}
                        opts={opts}
                        videoId={prop.youtube_id} />);
                }
            })
        }
        return (
            <div>
                <div className="row-fluid">
                    {/*Edit Main Content Area here*/}
                    <div className="span12" style={{height: '1000px'}} id="divMain">
                        <BigCalendar
                            onSelectEvent={this.onSelectEvent.bind(this)}
                            events={this.state.events}
                            culture={this.state.culture}
                            defaultDate={new Date()}
                            popup={true}
                        />
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Inline Styles Modal Example"
                    onRequestClose={this.close.bind(this)}
                    className="Modal"
                    style={this.state.style}
                    overlayClassName="Overlay"
                >
                    <h1>{title}</h1>
                    <span className="dateTimeNews">{autor}</span>
                    <p>{description}</p>
                    {componentNode}
                    <button className="btn btn-primary" onClick={this.close.bind(this)}>Закрыть</button>
                </ReactModal>
            </div>
        );
    }
}



export default Events;
