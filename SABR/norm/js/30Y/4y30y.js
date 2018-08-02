var trace1 = {
                    x: [0.009055,0.014055,0.019055,0.024055,0.034055,0.039055,0.044055,0.049055],

                    y: [0.425,0.3601,0.3143,0.2871,0.2512,0.2425,0.2376,0.2339],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y:[0.51913,0.49017,0.46582,0.44485,0.42648,0.41019,0.39557,0.38236,0.37034,0.35935,0.34925,0.33993,0.33133,0.32335,0.31595,0.30908,0.30269,0.29674,0.29121,0.28607,0.28129,0.27685,0.27272,0.2689,0.26537,0.2621,0.25909,0.25631,0.25376,0.25142,0.24928,0.24733,0.24555,0.24393,0.24247,0.24115,0.23996,0.2389,0.23795,0.2371,0.23635,0.2357,0.23512,0.23463,0.2342,0.23384],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0291],
                y: [0.2641],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '4Y30Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv5', data, layout);