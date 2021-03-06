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
                y: [0.82196,0.76366,0.71368,0.66988,0.63083,0.59555,0.56334,0.53367,0.50614,0.48043,0.4563,0.43355,0.41201,0.39155,0.37206,0.35344,0.33563,0.31858,0.30224,0.28659,0.27165,0.25743,0.24399,0.23144,0.21992,0.20962,0.20078,0.19362,0.18827,0.18477,0.18298,0.18265,0.1835,0.18524,0.18764,0.19051,0.1937,0.19712,0.20068,0.20432,0.20801,0.21171,0.2154,0.21907,0.2227,0.22629],
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
