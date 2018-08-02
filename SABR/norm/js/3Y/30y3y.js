var trace1 = {
                    x: [0.00715,0.01215,0.01715,0.02215,0.03215,0.03715,0.04215,0.04715],

                    y:[0.5889,0.4594,0.3544,0.3014,0.2483,0.2375,0.2324,0.2304],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.66228,0.62157,0.58637,0.55534,0.52755,0.50239,0.47939,0.45821,0.4386,0.42034,0.40327,0.38728,0.37225,0.35812,0.34481,0.33229,0.32051,0.30947,0.29914,0.28953,0.28064,0.27249,0.26509,0.25845,0.25259,0.24751,0.2432,0.23964,0.2368,0.23464,0.23308,0.23207,0.23155,0.23145,0.23171,0.23227,0.23309,0.23412,0.23533,0.23668,0.23815,0.23971,0.24134,0.24303,0.24476,0.24653],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0271],
                y: [0.2689],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y3Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);