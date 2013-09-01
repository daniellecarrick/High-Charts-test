//High Charts Test
// by DC

$(function () {

	var yearConverter = function(x){
		return Math.floor((x)/1000/60/60/24/365)+1970;
	}

	var events = {
		1974 : {
			content : '<p>Hey there snoogs!</p>'
		},
		1975 : {
			content : '<img src="http://placehold.it/350x450" width=350><p>Hey there. This is caption for my awesome pic</p>'
		},
		1976 : {
			content : 'later'
		},
		1977 : {
			content : 'last'
		}
	}

		$('#container').highcharts({
			chart: {
				width:3000,
				height:300,
				backgroundColor : '#0b1112'
			},

			colors: [
				   '#e52423', 
				   '#f6a738', 
				   '#B4E038', 
				   '#007dc3', 
				   ],

			title: {
				text: '',
			   
			},

			xAxis: { 
				type: 'datetime',
				opposite: true,
				labels: {
					rotation: 270,
					style: {color: '#fff'}
				},
				lineWidth: 0
			},

			yAxis: {
				title: {text: ''},
				min: 0,
				max: 80,
				gridLineWidth: 0,
				labels: {enabled: false},
			},

			tooltip: {
				backgroundColor: '#fff',
				borderColor: 'black',
				borderRadius: 2,
				borderWidth: 0,
				crosshairs: true,
				useHTML : true,
				formatter: function() {
					if(events[yearConverter(this.x)]){
						return events[yearConverter(this.x)].content + '<br/><p>year => <b>' + yearConverter(this.x) + '</b><br/>value => <b>' + this.y + '</b><br/>series => <b>' + this.series.name + '</b></p>';
					}
					else {
						return '<p> year => <b>' + yearConverter(this.x) + '</b><br/>value => <b>' + this.y + '</b><br/>series => <b>' + this.series.name + '</b></p>';
					}
				}
			},

			legend: {
				borderWidth: 0,
				itemHiddenStyle: {color: '#fff'},
				itemStyle: {
						color: '#fff'                        
					},
				itemHoverStyle: {
					color: '#fff',
					fontWeight: 'bold'
					},
				floating: true
			},
			series: [{
				name: 'Environmental Pollution (US)',
				data: [12,11,11,13,10,10,10,7,8,12,14,13,15,14,19,21,18,16,15,12,13,12,12,16,16,17,17,14,12,12,13,13,12,15,19,18,15,16,17],
				pointStart: Date.UTC(1974, 0, 1),
				pointInterval: 24 * 3600 *1000 * 365, // one year
				marker: {
					symbol: 'circle',
					states: {
					   hover: {
						fillColor: '#0b1112',
					   }
					}
				}
			}, {
				name: 'Recession and Unemployment (US)',
				data: [15,33,20,19,20,27,24,34,50,22,20,17,17,16,12,10,26,41,28,21,16,19,15,15,8,6,17,24,25,24,19,21,19,22,56,56,50,53,46],
				pointStart: Date.UTC(1974, 0, 1),
				pointInterval: 24 * 3600 *1000 * 365, // one year
				marker: {
					symbol: 'circle'
				}
			}, {
				name: 'Environmental Pollution (Global)',
				data: [23,25,28,26,26,26,25,24],
				pointStart: Date.UTC(2006, 0, 1),
				pointInterval: 24 * 3600 *1000 * 365, // one year
				marker: {
					symbol: 'circle'
				}
			}, {
				name: 'Recession and Unemployment (Global)',
				data: [37,34,33,51,47,42,44,41],
				pointStart: Date.UTC(2006, 0, 1),
				pointInterval: 24 * 3600 *1000 * 365, // one year
				marker: {
					symbol: 'circle'
				}
			}]
		});
	});