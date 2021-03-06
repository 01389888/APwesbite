var trace1 = {
                    x: [0.009769,0.014769,0.019769,0.024769,0.034769,0.039769,0.044769,0.049769],

                    y: [0.4122,0.3409,0.2931,0.2654,0.2311,0.2262,0.2256,0.2262],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.52783,0.49614,0.46934,0.44615,0.42574,0.40755,0.39117,0.37631,0.36274,0.35028,0.33881,0.32821,0.3184,0.3093,0.30086,0.29303,0.28577,0.27904,0.27282,0.26709,0.26182,0.257,0.2526,0.2486,0.245,0.24178,0.23891,0.23637,0.23415,0.23224,0.23059,0.22921,0.22806,0.22713,0.2264,0.22584,0.22545,0.22521,0.22509,0.22509,0.22519,0.22538,0.22566,0.226,0.22641,0.22687],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0298],
                y: [0.2413],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3Y15Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv4', data, layout);
