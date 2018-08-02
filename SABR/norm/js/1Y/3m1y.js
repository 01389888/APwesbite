var trace1 = {
                    x: [0.007758,0.012758,0.017758,0.022758,0.032758,0.037758,0.042758,0.047758],
                    y: [0.4155,0.3311,0.2466,0.1845,0.1169,0.1215,0.1396,0.1593],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.51874,0.48095,0.44858,0.42022,0.39494,0.37211,0.35126,0.33207,0.31426,0.29764,0.28204,0.26734,0.25343,0.24023,0.22767,0.21571,0.2043,0.19342,0.18306,0.17325,0.16401,0.1554,0.14754,0.14053,0.13455,0.12972,0.12615,0.12385,0.1227,0.12254,0.12316,0.12437,0.12601,0.12796,0.13012,0.13242,0.1348,0.13724,0.1397,0.14216,0.14462,0.14705,0.14946,0.15184,0.15418,0.15648],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0277580000000000],
                y: [0.144900000000000],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);