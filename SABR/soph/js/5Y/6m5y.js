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
                y: [0.96855,0.89518,0.83219,0.77691,0.72756,0.68294,0.64216,0.60457,0.56967,0.53707,0.50647,0.4776,0.45029,0.42437,0.39971,0.37624,0.35388,0.33263,0.31252,0.29363,0.27617,0.26045,0.24692,0.23622,0.22898,0.2256,0.22594,0.22938,0.23505,0.2422,0.25022,0.25872,0.26744,0.2762,0.28491,0.2935,0.30192,0.31017,0.31821,0.32606,0.3337,0.34114,0.34838,0.35544,0.36231,0.369],
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