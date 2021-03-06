var trace1 = {
                    x: [0.009306,0.014306,0.019306,0.024306,0.034306,0.039306,0.044306,0.049306],

                    y: [0.4513,0.3729,0.319,0.2879,0.2502,0.245,0.2444,0.2451],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.56955,0.53502,0.50581,0.48052,0.45827,0.43844,0.42059,0.40438,0.38959,0.37603,0.36353,0.352,0.34133,0.33144,0.32228,0.31379,0.30594,0.29868,0.29199,0.28584,0.28021,0.27508,0.27042,0.26622,0.26247,0.25913,0.25618,0.25361,0.2514,0.24951,0.24793,0.24662,0.24557,0.24475,0.24415,0.24373,0.24348,0.24339,0.24343,0.24358,0.24385,0.2442,0.24463,0.24514,0.2457,0.24632],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0293],
                y: [0.2614],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv4', data, layout);
