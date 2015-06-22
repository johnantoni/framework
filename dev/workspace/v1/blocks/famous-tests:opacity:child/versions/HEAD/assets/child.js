'use strict';

FamousFramework.module('famous-tests:opacity:child', {
    behaviors: {
        '$self': {
            opacity: function (opacity) {
                return opacity;
            },
            size: [120, 100],
            'style': {
                'background-image': 'url({{@CDN_PATH}}bottle-label.jpg)',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'display': 'block',
                'overflow': 'hidden'
            }
        }
    },
    events: {},
    states: {
        opacity: 0
    },
    tree: ''
});