BEST.scene('mike.xia:number-pad', 'HEAD', {
    behaviors: {
        '.item': {
            'size': [50, 50],
            'origin': [0.5, 0.5],
            'align': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'style': {
                // background: 'rgba(50, 50, 50, 1)',
                color : 'rgba(255, 255, 255, 0.8)',
                fontSize : '25px',
                fontFamily : 'sans-serif',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '50px',
                boxShadow: 'inset 0px 0px 0px 3px rgba(255,255,255,0.8)'
            },
            'unselectable': true,
            '$repeat': function (keys) {
                var buttons = [];
                for(var i=0; i<keys.length; i++) {
                    buttons.push({ 'content' : keys[i] });
                }
                return buttons;
            },
            'position': function ($index, radius, position) {
                if($index >= 10) {
                    var step = 2*Math.PI / 3;
                    return [
                        radius[$index]/3 * Math.sin($index * step) + position[0],
                        radius[$index]/3 * Math.cos($index * step) + position[1]
                    ]
                }else{
                    var step = 2*Math.PI / 10;
                    return [
                        radius[$index] * Math.sin($index * step) + position[0],
                        radius[$index] * Math.cos($index * step) + position[1]
                    ];
                }
            }
        }
    },
    events: {
        $public : {
            'keys': 'setter',
            'position': 'setter',
            'set-radius' : function($state, $payload) {
                var radius = $state.get('radius');
                for (var i = 0; i < radius.length; i++) {
                    radius[i] = $payload
                };
                $state.set('radius', radius, {duration: 500});
            }
        },
        '.item': {
            'click': function($dispatcher, $state, $payload) {
                $dispatcher.emit('number-pad-click');

                var endRadius;
                var transition;
                var delay;

                if($state.get('open')) {
                    $state.set('open', false);
                    endRadius = 15;
                    delay = 0;
                    transition = { duration : 800, curve : 'outExpo' };
                }else {
                    $state.set('open', true);
                    delay = 30;
                    endRadius = 100;
                    transition = { duration : 400, curve : 'outExpo' };
                }

                for(var i=0; i<13; i++) {
                    var oldVal = $state.get(['radius', i]);
                    $state
                        .set(['radius', i], oldVal, { duration : i * delay })
                        .thenSet(['radius', i], endRadius, transition);
                }
                
            },
            'mouseover': function() {
                console.log('mousing over')
            }
        }
    },
    states: {
        position : [0, 0],
        digits: 10,
        keys : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '#', '*', 'X'],
        radius : [17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
        open : false,
        rotationX : 0, 
        rotationY : 0
    },
    tree: 'number-pad.jade'
});

// document.body.addEventListener()