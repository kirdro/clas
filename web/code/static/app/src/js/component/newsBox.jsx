import React, {
    Component,
    PropTypes,
} from 'react';
import NewsItem from './NewsItem';
import NewsItemPrev from './NewsItemPrev';
import AppStore from '../store/store';

class NewsBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: AppStore.getState().news,
            secondNews: AppStore.getState().secondNews
        }
    }
    onChangeState(){
        this.setState({
            news: AppStore.getState().news,
            secondNews: AppStore.getState().secondNews
        });

    }
    componentDidMount() {
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        var componentPrevNewsNode = null;
        if (this.state.news.length > 0) {
            componentPrevNewsNode = this.state.news.map((prop, id) => {
                return(<NewsItemPrev key={id} id={id} prop={prop} />)
            })
        }
        return (
            <div className="row-fluid">
                {/*Edit Sidebar Content here*/}
                <div className="span3">
                    {componentPrevNewsNode}
                </div>
                {/*/End Sidebar Content */}
                {/*Edit Main Content Area here*/}
                <div className="span9" id="divMain">
                    <NewsItem prop={this.state.secondNews} />
                </div>
                {/*/End Main Content Area here*/}
            </div>
        );
    }
}

// NewsBox.propTypes = {};
// NewsBox.defaultProps = {};

export default NewsBox;
