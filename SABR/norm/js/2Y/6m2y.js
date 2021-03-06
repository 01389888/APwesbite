var trace1 = {
                    x: [0.009396,0.014396,0.019396,0.024396,0.034396,0.039396,0.044396,0.049396],

                    y: [0.6074,0.4484,0.321,0.2411,0.2093,0.2446,0.2788,0.3097],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.82604,0.76324,0.70932,0.66198,0.61973,0.58151,0.54658,0.51438,0.48447,0.45654,0.4303,0.40555,0.38212,0.35988,0.33871,0.31854,0.29932,0.28103,0.2637,0.24741,0.23233,0.21872,0.20702,0.19778,0.19161,0.18887,0.18943,0.19269,0.19787,0.20428,0.2114,0.21889,0.22654,0.2342,0.24179,0.24926,0.25658,0.26373,0.27071,0.2775,0.28411,0.29055,0.29681,0.30291,0.30884,0.31462],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0294],
                y: [0.1931],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '6M2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv1', data, layout);
