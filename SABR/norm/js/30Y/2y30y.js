var trace1 = {
                    x: [0.009211,0.014211,0.019211,0.024211,0.034211,0.039211,0.044211,0.049211],

                    y: [0.5035,0.4027,0.3319,0.2918,0.2503,0.2501,0.2556,0.2623],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.64383,0.60204,0.5665,0.53559,0.50826,0.48378,0.46164,0.44145,0.42293,0.40585,0.39005,0.37539,0.36175,0.34907,0.33728,0.32631,0.31615,0.30675,0.29811,0.29021,0.28304,0.27661,0.27089,0.26589,0.26159,0.25797,0.25499,0.25263,0.25084,0.24958,0.24878,0.24839,0.24838,0.24868,0.24926,0.25006,0.25106,0.25222,0.25352,0.25492,0.25642,0.25798,0.25961,0.26127,0.26297,0.26469],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0292],
                y: [0.2586],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '2Y30Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv3', data, layout);
