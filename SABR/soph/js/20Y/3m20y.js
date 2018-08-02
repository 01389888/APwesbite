var trace1 = {
                    x: [0.009612,0.014612,0.019612,0.024612,0.034612,0.039612,0.044612,0.049612],

                    y: [0.5983,0.4783,0.3618,0.2741,0.1779,0.1811,0.2063,0.2344],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.81655,0.75915,0.70999,0.66691,0.62852,0.59385,0.56221,0.53308,0.50605,0.48084,0.45718,0.43488,0.41379,0.39376,0.37469,0.3565,0.33911,0.32248,0.30655,0.29132,0.27678,0.26296,0.2499,0.23769,0.22644,0.21632,0.2075,0.20018,0.19447,0.19043,0.18798,0.18693,0.18706,0.18812,0.18989,0.19218,0.19485,0.1978,0.20093,0.20419,0.20753,0.2109,0.2143,0.21769,0.22106,0.2244],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0296],
                y: [0.2201],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M20Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);