'use strict';

FamousFramework.module('famous-demos:styling-inner-content', {
    behaviors: {
        'node': {
            position: [100, 100],
            size: [200, 200],
            style: {
                'background-color': 'whitesmoke',
                'border-radius': '10px',
                'line-height': '200px',
                'text-align': 'center'
            }
        },
        'a': {
            'style': function (color, fontFamily) {
                return FamousFramework.helpers.formatStyle({
                    'color': color,
                    'font-family': fontFamily,
                    'font-size': '30px',
                    'text-align': 'center'
                });
            }
        }
    },
    events: {},
    states: {
        color: '#49afeb',
        fontFamily: 'Lato, Helvetica, Arial, sans-serif'
    },
    tree: '\n        <node>\n            <a href="http://www.famous.org">famous.org</a>\n        </node>\n    '
});