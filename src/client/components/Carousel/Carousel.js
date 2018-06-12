import React from 'react';
import { Carousel as Slider } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import { hotelsConstants } from '../../constants';
import './styles.css';

function Carousel(props) {
    const { id } = props;
    const images = Array(3).fill(0);

    return (
        <Slider>
            {
                images.map((value, index) => {
                    const src = `${hotelsConstants.URL_HOTEL_PHOTO}${id}_${index + 1}/300/200.auto`;

                    return (
                        <img key={src} src={src} />
                    );
                })
            }
        </Slider>
    );
}

Carousel.propTypes = {
    id: PropTypes.string,
};


export default Carousel;
