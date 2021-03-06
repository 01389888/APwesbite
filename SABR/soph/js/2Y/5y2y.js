var trace1 = {
                    x: [0.009247,0.014247,0.019247,0.024247,0.034247,0.039247,0.044247,0.049247],

                    y: [0.3922,0.3502,0.32,0.3008,0.2731,0.2644,0.258,0.2524],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.46504,0.44335,0.42537,0.4101,0.39688,0.38526,0.37495,0.36571,0.35736,0.34976,0.34283,0.33646,0.33059,0.32516,0.32012,0.31543,0.31106,0.30697,0.30314,0.29955,0.29618,0.29301,0.29002,0.2872,0.28453,0.28202,0.27963,0.27738,0.27524,0.27321,0.27128,0.26945,0.26771,0.26606,0.26448,0.26298,0.26155,0.26019,0.25889,0.25764,0.25646,0.25532,0.25424,0.25321,0.25221,0.25127],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0292],
                y: [0.2839],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '5Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv6', data, layout);
