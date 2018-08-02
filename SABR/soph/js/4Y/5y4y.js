var trace1 = {
                    x: [0.009542,0.014542,0.019542,0.024542,0.034542,0.039542,0.044542,0.049542],

                    y: [0.3659,0.3269,0.2994,0.2817,0.256,0.2479,0.2419,0.2368],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.43736,0.41698,0.40008,0.38571,0.37328,0.36235,0.35264,0.34393,0.33607,0.32892,0.32238,0.31638,0.31084,0.30572,0.30097,0.29655,0.29243,0.28857,0.28496,0.28157,0.27839,0.2754,0.27258,0.26992,0.2674,0.26503,0.26278,0.26065,0.25863,0.25672,0.2549,0.25318,0.25153,0.24997,0.24849,0.24707,0.24572,0.24444,0.24321,0.24204,0.24092,0.23986,0.23884,0.23786,0.23693,0.23603],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0295],
                y: [0.2661],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '5Y4Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv6', data, layout);