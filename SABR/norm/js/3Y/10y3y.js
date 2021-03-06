var trace1 = {
                    x: [0.010331,0.015331,0.020331,0.025331,0.035331,0.040331,0.045331,0.050331],

                    y:[0.3127,0.2826,0.2649,0.255,0.2408,0.2371,0.2352,0.2334],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.3778,0.36043,0.34622,0.33429,0.32411,0.31529,0.30757,0.30075,0.29469,0.28926,0.28438,0.27998,0.27599,0.27237,0.26907,0.26606,0.26331,0.26078,0.25846,0.25633,0.25437,0.25256,0.2509,0.24935,0.24793,0.24661,0.24539,0.24426,0.24321,0.24224,0.24133,0.24049,0.23971,0.23898,0.23831,0.23768,0.23709,0.23654,0.23603,0.23556,0.23512,0.23471,0.23432,0.23396,0.23363,0.23332],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0303],
                y: [0.2456],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '10Y3Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv7', data, layout);
