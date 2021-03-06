var trace1 = {
                    x: [0.009242,0.014242,0.019242,0.024242,0.034242,0.039242,0.044242,0.049242],

                    y: [0.6098,0.4871,0.3673,0.2777,0.1794,0.1833,0.2092,0.2379],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y:[0.8178,0.76,0.71048,0.6671,0.62843,0.59352,0.56165,0.5323,0.50509,0.47969,0.45586,0.4334,0.41215,0.39198,0.37278,0.35447,0.33697,0.32024,0.30423,0.28895,0.27438,0.26057,0.24758,0.23551,0.22449,0.2147,0.20634,0.19957,0.19451,0.19113,0.18931,0.18883,0.18944,0.1909,0.19298,0.19553,0.19841,0.20152,0.20479,0.20816,0.21158,0.21504,0.2185,0.22194,0.22536,0.22875],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0292],
                y: [0.222],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M30Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);
