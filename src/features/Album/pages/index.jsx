import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'The New Vietnam',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2023/02/07/4/c/d/7/1675759910856_300.jpg'
        },
        {
            id: 2,
            name: 'V-SOUND 2010s',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2023/09/19/0/4/0/3/1695112393389_300.jpg'
        },
        {
            id: 3,
            name: 'C-pop Favorite',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2024/02/05/6/6/8/d/1707124761193_300.jpg'
        },
    ];

    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;