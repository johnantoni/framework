'use strict';

FamousFramework.scene('famous-tests:static-assets:more-assets', {
    behaviors: {
        'ui-element': {
            'content': '<img src="{{@assets/excite3.png}}">'
        }
    },
    events: {},
    tree: '\n        <ui-element></ui-element>\n    '
});