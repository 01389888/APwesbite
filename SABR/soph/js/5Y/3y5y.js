var trace1 = {
                    x: [0.009355,0.014355,0.019355,0.024355,0.034355,0.039355,0.044355,0.049355],

                    y: [0.4629,0.3825,0.3274,0.2956,0.2569,0.2516,0.251,0.2517],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.5852,0.54974,0.51975,0.49379,0.47095,0.45058,0.43225,0.41562,0.40043,0.3865,0.37367,0.36182,0.35086,0.3407,0.33129,0.32257,0.3145,0.30704,0.30016,0.29384,0.28805,0.28276,0.27797,0.27365,0.26977,0.26633,0.26329,0.26063,0.25834,0.25639,0.25474,0.25338,0.25229,0.25144,0.2508,0.25036,0.25009,0.24998,0.25001,0.25016,0.25042,0.25077,0.25121,0.25172,0.25229,0.25292],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0294],
                y: [0.2685],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3Y5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv4', data, layout);
