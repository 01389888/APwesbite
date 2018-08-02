var trace1 = {
                    x: [0.008608,0.013608,0.018608,0.023608,0.033608,0.038608,0.043608,0.048608],

                    y: [0.4271,0.3434,0.2873,0.2571,0.2198,0.2125,0.2097,0.2075],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.51809,0.48662,0.45991,0.43672,0.41625,0.39795,0.38142,0.36638,0.3526,0.33991,0.32819,0.31732,0.30722,0.29782,0.28907,0.28092,0.27333,0.26628,0.25973,0.25367,0.24809,0.24295,0.23826,0.23399,0.23014,0.22668,0.2236,0.22089,0.21853,0.21649,0.21475,0.2133,0.21211,0.21115,0.21042,0.20987,0.20951,0.2093,0.20923,0.20928,0.20944,0.2097,0.21004,0.21045,0.21093,0.21146],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0286],
                y: [0.2316],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y15Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);