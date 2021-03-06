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
                y: [0.58331,0.54819,0.5185,0.49282,0.47022,0.45009,0.43196,0.41553,0.40052,0.38676,0.37409,0.3624,0.35158,0.34155,0.33226,0.32365,0.31567,0.3083,0.30149,0.29523,0.28948,0.28423,0.27946,0.27514,0.27125,0.26778,0.2647,0.262,0.25964,0.25761,0.25589,0.25444,0.25325,0.2523,0.25156,0.25101,0.25063,0.25041,0.25033,0.25038,0.25053,0.25078,0.25112,0.25153,0.252,0.25254],
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
