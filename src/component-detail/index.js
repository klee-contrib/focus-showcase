//dependencies
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import hjs from 'highlight.js';
import './style/style.scss';
const types = require('focus-core').component.types;
import capitalize from 'lodash/string/capitalize';

/**
* Component describing a component.
*/
class ComponentDetail extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        hjs.highlightBlock(ReactDOM.findDOMNode(this.refs.code));
    }
    /** @inheriteDoc */
    render() {
        const {name, description, example, photo, keywords, version, code} = this.props;
        return (
            <div data-focus='component-detail'>
                <div className='mdl-shadow--2dp' data-focus='detail-header'>
                    <div data-focus='back'>
                        <button className='mdl-button mdl-js-button' onClick={()=>{Backbone.history.navigate('', true)}}>
                            <i className="material-icons">navigate_before</i>
                            <i className="material-icons">view_comfy</i>
                        </button>
                    </div>
                    <div data-focus='title'>
                        <h2>{`${capitalize(name)} - v${version}`}</h2>
                    </div>
                    <div data-focus='demo-button'>
                        <button
                            className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'
                            onClick={()=>{Backbone.history.navigate(`component/${name}/detail`, true)}}
                            >
                            Preview <i className="material-icons">code</i>
                    </button>
                </div>
            </div>
            <div style={{display: 'flex'}}>

                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                    <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
                        <i className="material-icons">play_circle_filled</i>
                    </header>
                    <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                        <div className="mdl-card__supporting-text">
                            <h4>Tags</h4>
                            {keywords.slice(0, 2).map((tag) => <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' style={{margin: '10px'}}>{tag}</button>)}
                        </div>
                        <div className="mdl-card__actions">
                            <a href="#" className="mdl-button">See all tags</a>
                        </div>
                    </div>
                </section>
                <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                    <div className="mdl-card mdl-cell mdl-cell--12-col">
                        <div className="mdl-card__supporting-text">
                            <h4>Description</h4>
                            <div data-focus='description'>{description}</div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text">
                        <h4>Sample code</h4>
                        <pre ref='code'>
                            <code className='javascript'>{code}</code>
                        </pre>
                    </div>
                </div>
            </section>

        </div>
    );
}
}

//Static props.
ComponentDetail.displayName = 'ComponentDetail';
ComponentDetail.defaultProps = {};
ComponentDetail.propTypes = {
    description: types('string'),
    example: types('string'),
    url: types('string'),
    keywords: types('string'),
    photo: types('string'),
    name: types('string')
};

module.exports = ComponentDetail;
