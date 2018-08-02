var trace1 = {
                    x: [0.006429,0.011429,0.016429,0.021429,0.031429,0.036429,0.041429,0.046429],

                    y: [0.532,0.4147,0.3158,0.2667,0.2188,0.2092,0.2049,0.2031],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.57783,0.54166,0.51046,0.48301,0.45848,0.4363,0.41605,0.39744,0.38021,0.3642,0.34926,0.33528,0.32217,0.30986,0.29829,0.28744,0.27726,0.26775,0.25889,0.25069,0.24316,0.2363,0.23012,0.22464,0.21986,0.21577,0.21235,0.20959,0.20743,0.20584,0.20475,0.2041,0.20385,0.20393,0.20429,0.2049,0.2057,0.20667,0.20777,0.20898,0.21028,0.21165,0.21308,0.21454,0.21604,0.21757],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0264],
                y: [0.2372],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y10Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);