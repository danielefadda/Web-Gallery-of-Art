$(function () {
    $('#countempo').highcharts({
        chart: {
            type: 'line',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '','']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'DarkSlateGray'
                }
            }
        },
        //legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: false,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',//
        tooltip: {
            formatter: function () {
                return this.x +
                    this.series.name + ': ' + this.y + '<br/>';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Number of paintings',
            color: 'DarkSlateGray',
            data: [2, 4,2,7,41,274,96,358,962,1436,767,1904,1111,678,522,658,1027]
        },]
    });
});
