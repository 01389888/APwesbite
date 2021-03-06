var trace1 = {
                    x: [0.008978,0.013978,0.018978,0.023978,0.033978,0.038978,0.043978,0.048978],

                    y: [0.438,0.3524,0.2965,0.2661,0.228,0.2204,0.2174,0.2152],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.53922,0.50661,0.47894,0.4549,0.43369,0.41471,0.39757,0.38197,0.36767,0.35451,0.34233,0.33104,0.32055,0.31077,0.30166,0.29317,0.28526,0.2779,0.27105,0.26471,0.25885,0.25345,0.24851,0.244,0.23991,0.23624,0.23295,0.23005,0.2275,0.22529,0.22339,0.2218,0.22047,0.2194,0.21856,0.21792,0.21747,0.21719,0.21706,0.21706,0.21718,0.2174,0.21772,0.21811,0.21857,0.2191],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0290],
                y: [0.24],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y10Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);
