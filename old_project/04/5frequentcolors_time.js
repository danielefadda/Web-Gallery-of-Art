$(function () {
    $('#TimlineFiveColors').highcharts({
        chart: {
            type: 'area',
            backgroundColor: 'rgba(0,0,0,0)',
            style: {
                fontFamily: 'EB Garamond',
            }
        },
        title: {
            text: ''
               },
        xAxis: {
            categories: ['1051<br/>1100','1101<br/>1150', '1151<br/>1200', '1201<br/>1250', '1251<br/>1300','1301<br/>1350','1351<br/>1400',	'1401<br/>1450','1451<br/>1500','1501<br/>1550','1551<br/>1600','1601<br/>1650','1651<br/>1700','1701<br/>1750','1751<br/>1800','1801<br/>1850','1851<br/>1900'],
            tickmarkPlacement: 'on',
            
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> <br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Brown',
            color: 'brown',
            data: [44.4, 69.4, 44.4, 46.0,	40.7, 33.7, 49.7, 41.8, 34.4, 33.5, 30.0, 28.2, 25.1, 24.2, 23.7, 22.7, 18.0]
        }, {
            name: 'Gray',
            color: 'gray',
            data: [22.2, 8.3, 33.3, 11.1, 36.6, 44.5, 22.8, 27.5, 32.7, 31.0, 31.5, 32.0, 35.3, 38.6, 37.2, 39.2, 50.8]
        }, {
            name: 'Black',
            color: 'black',
            data: [5.6, 8.3, 11.1, 20.6, 8.9, 5.7, 11.2, 13.7, 15.7, 18.9, 22.1, 22.2, 20.8, 19.2, 19.8, 19.3, 13.9]
        }, {
            name: 'Green',
            color: 'green',
            data: [11.1, 2.8, 5.6, 11.1, 10.0, 8.9, 8.6, 9.0, 10.3, 10.2, 11.2, 12.6, 13.5, 13.1, 13.8, 13.1, 11.9
]
        }, {
            name: 'Yellow',
            color: 'yellow',
            data: [5.6, 0.0, 0.0, 3.2, 1.9, 2.8, 2.7, 3.0, 2.8, 2.1, 2.2, 2.3, 2.3, 2.1, 2.6, 2.9, 2.3]
        }, {
            name: 'Red',
            color: 'red',
            data: [0.0, 2.8, 5.6, 3.2, 0.3, 1.3, 2.3, 2.6, 1.5, 2.2, 1.2, 1.0, 0.8, 0.8, 0.7, 0.3, 0.4]
        }, {
            name: 'White',
            color: 'white',
            data: [11.1, 2.8, 0.0, 1.6, 1.4, 1.1, 1.9, 0.8, 0.9, 0.7, 0.4, 0.5, 0.8, 0.4, 0.7, 0.8, 0.8]
        }, {
            name: 'Maroon',
            color: 'maroon',
            data: [0.0, 5.6, 0.0, 3.2, 0.3, 0.4, 0.8, 1.1, 1.1, 1.1, 1.0, 0.8, 0.8, 0.8, 0.7, 0.7, 0.3]
        }, {
            name: 'Purple',
            color: 'purple',
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 1.3, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.3, 0.3, 0.2, 0.3, 0.6]
        }, {
            name: 'Blue',
            color: 'blue',
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.0, 0.1, 0.2,	0.1, 0.1, 0.1, 0.3, 0.3, 0.4, 0.6, 0.8]
        }, {
            name: 'Teal',
            color: 'teal',
            data: [0.0,	0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.2]
        }]
    });
});