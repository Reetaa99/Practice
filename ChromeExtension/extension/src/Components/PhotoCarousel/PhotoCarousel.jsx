import React from 'react';
import ReactDOM from 'react-dom';
import { DOMMessage, DOMMessageResponse } from '../../types';
import "./PhotoCarousel.css";


let listOfImages = [];

export default class PhotoCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            borderColor: "pink",
            listOfImages: this.importAll(require.context('../../../public/images', false, /\.(png|jpe?g|svg)$/))
        }
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div>
                <p>Memory</p>
                <div id="memo" style={{ borderColor: this.state.borderColor }} >
                    {
                        this.state.listOfImages.map(
                            (image, index) => <img key={index} src={image} alt="info"></img>
                        )
                    }
                </div>
            </div>
        )
    }
}