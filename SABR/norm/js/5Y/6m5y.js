var trace1 = {
                    x: [0.009416,0.014416,0.019416,0.024416,0.034416,0.039416,0.044416,0.049416],

                    y: [0.7136,0.5267,0.3772,0.2834,0.246,0.2876,0.3277,0.364],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.97138,0.89756,0.83418,0.77854,0.72887,0.68394,0.64288,0.60503,0.56988,0.53703,0.50619,0.4771,0.44956,0.42341,0.39852,0.37481,0.35222,0.33071,0.31034,0.29118,0.27343,0.25741,0.24362,0.23271,0.22538,0.22208,0.22267,0.22644,0.23249,0.23999,0.24834,0.25714,0.26612,0.27513,0.28405,0.29283,0.30144,0.30985,0.31805,0.32604,0.33382,0.34138,0.34875,0.35592,0.3629,0.36969],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0294],
                y: [0.2271],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '6M5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv1', data, layout);