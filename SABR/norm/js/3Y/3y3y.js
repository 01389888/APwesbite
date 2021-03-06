var trace1 = {
                    x: [0.009252,0.014252,0.019252,0.024252,0.034252,0.039252,0.044252,0.049252],

                    y:[0.4575,0.378,0.3232,0.2916,0.2533,0.2481,0.2475,0.2482],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.57417,0.53959,0.51035,0.48506,0.46281,0.44298,0.42514,0.40895,0.39419,0.38064,0.36818,0.35667,0.34602,0.33617,0.32703,0.31857,0.31073,0.30349,0.29681,0.29066,0.28502,0.27988,0.2752,0.27097,0.26717,0.26377,0.26077,0.25813,0.25583,0.25385,0.25218,0.25077,0.24962,0.2487,0.24798,0.24746,0.2471,0.2469,0.24683,0.24688,0.24704,0.24729,0.24763,0.24804,0.24851,0.24904],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0293],
                y: [0.2647],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3Y3Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv4', data, layout);
