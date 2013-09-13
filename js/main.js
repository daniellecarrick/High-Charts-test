//High Charts Test
// by DC
// dc branch

$(function () {

	var yearConverter = function(x){
		return Math.floor((x)/1000/60/60/24/365)+1970;
	}

	//var yearHighlight = function(){
		//if(events[yearConverter(this.x)].content.length>0){
			
		//}
	//}
	$( "#right-button" ).click(function() {
		$('html, body').animate({scrollLeft : $('html, body').scrollLeft() + 300});
	});
	$( "#left-button" ).click(function() {
		$('html, body').animate({scrollLeft : $('html, body').scrollLeft() -300});
	});
	
	var events = {
		1974 : {
			content : '<p>Environmental concerns are at relatively low levels, despite recent successes for green including the formation of the Environmental Protection Agency and the first Earth Day on April 20, 1970. In 1974, the environmental issue dominating Americans’ conscience is fuel and energy shortages – 46% of Americans list this as a top concern – as a result of the oil embargo. This trend replays itself in 1980-81, 2006 and 2008, as fuel prices in the past four decades fluctuate and Americans quickly react.</p>'
		},
		1978 : {
			content : '<img src="img/love-canal.jpg" height="101px"><p>Love Canal disaster becomes a national media story, but concern for pollution remains steady.</p>'
		},
		1987 : {
			content : '<p>“Contrary to the expectations of many analysts, attention to environmental issues has not peaked; it is still gathering momentum.  In fact, public attitudes towards a wide variety of environmental issues today point to a steady growth in the power of environmental movements in the coming decades.”  -<i>1987 Roper Public Pulse</i>.</p>'
		},
		1989 : {
			content : '<img src="img/exxon-valdez.jpg" height="111px"><p><i>Exxon Valdez oil spill pushes concern for the environment to its highest levels ever in the US</i>. Even prior to the Valdez oil spill, 62% said that pollution posed a very serious threat to American society – up sharply from the 44% who thought so in 1984. <i>The recession in the early part of the 1990’s helps to cool off the topic.</i></p>'
		},
		1990 : {
			content : '<p>The birth year for GfK Roper’s Green Gauge, when SC Johnson commissions the first study with Roper entitled <i>“The Environment:  Public Attitudes and Individual Behavior”</i></p>'
		},
		1994 : {
			content : '<p>“The environmental movement has changed dramatically in the space of about a decade…Lower levels of concern do not necessarily mean a lessening of the importance of the issue.  The environment, like other ‘hot’ social issues, has a life cycle…And once consumers reach a level of competence enabling them to deal with the problem, it’s not uncommon to see behaviors outpace concerns:  It is at this point that the public begins to internalize an issue.” – <i>1994 Roper Public Pulse</i></p>'
		},

		2000 : {
			content : '<p>“A combination of factors is probably responsible (for the increased interests and action with the environment):  economic good times, peace, and a declining crime rate may leave people less concerned about personal security, allowing environmental issues to rise.” -<i>2000 GfK Roper Green Gauge Report</i> </p>'
		},
		1999 : {
			content : '<p>68% Recall seeing labels saying product is environmentally safe or biodegradable (+18 pts from 1990)</p>'
		},
		2001 : {
			content: '<p>Early 2001 – Green purchasing hits a 10 year high, as 55% of the American public report having purchased a product labeled or advertised as environmentally safe at some point.</p>'
		},
		2002 : {
			content: '<p>The recession, homeland security, and corporate distrust are dominating concerns in the US</p>'
		},
		2003 : {
			content : '<p>Despite cooling attitudes towards the environment, “activities and products that are catching the environmentally yet economically conscious consumer’s eye include: energy efficient products, electricity conservation at home, recycling centers and hybrid cars.” 68% of Americans are aware of hybrids (+18 points from 2002) and 30% of those who are aware of hybrids are interested in buying one (+5 points from 2002)– <i>2003 Roper Green Gauge Report</i></p>'
		},
		2005 : {
			content : '<p>A new environmental awakening begins in the US. Many environmental behaviors are back on the rise. Rreen purchasing hits another high in 2008, with 63% report having purchased a product labeled or advertised as environmentally safe at some point. This exuberance is short-lived, though, as the housing market crash  in 2008/2009 refocuses Americans on the economy.</p>'
		},
		2006 : {
			content : '<img src="img/inconvienent-truth.jpg" height="86px"><p>Al Gore’s film An Inconvenient Truth ignites passion – and debate – over global warming.</p>'
		},
		2010 : {
			content : '<p>Amid the ‘great recession’  consumers increasingly dissatisfied with green product offerings – a period of green fatigue sets in the marketplace in the US &emdash; <a href = "http://adage.com/article/news/consumer-revolt-sprouting-green-friendly-products/146944/">Ad Age Article</a>.</p>'
		},
		2011 : {
			content : '<p>SC Johnson reprises one of the first large scale environmental attitudes and behavior from 1990 with  <a href="http://www.scjohnson.com/en/commitment/focus-on/greengauge.aspx">“The Environment:  Public Attitudes and Individual Behavior — A Twenty-Year Evolution”</a>. Findings reveal that since 1990 environmental behaviors such as recycling and green purchasing have become more mainstream, despite short term dips and the overall fickleness of concern for the environment.</p>'
		},
		2012 : {
			content : '<p>Emerging markets leapfrogging developed markets in green action.  Emerging markets like Brazil, China, and South Africa experience growth in green purchasing, while developed markets see a contraction.</p>'
		},
		2013 : {
			content :'<p>A democratization of Green - Economic development and prosperity in the emerging world creates excitement in green trends - look for consumers (especially youth) to continue to climb the environmental engagement ladder and redefine what it means to go green in the future. In addition, as developed markets in North America and Western Europe shake the rust off of the recession, look for rising concern and action. Countries most concerned about environmental pollution, 2013: China 43%</br> Sweden 37%</br> Mexico 32%</br> Brazil 31%</br> US ranks #18 of 25 countries.</p>'
		}
	}

	$('#container').highcharts({
		chart: {
			width:3000,
			height:400,
			backgroundColor : '#0b1112',
			events : {
				redraw : function(event){
					redrawLabels(this);
				}
			}
		},

		colors: [
			   '#e52423', 
			   '#f6a738', 
			   '#B4E038', 
			   '#007dc3', 
			   ],

		title: {
			text: ''
		   
		},

		xAxis: { 
			type: 'datetime',
			opposite: true,
			labels: {
				rotation: 270,
				style: {color: '#C4C4C4'}
			},
			tickWidth: 0,
			lineWidth: 0
		},

		yAxis: {
			title: {text: ''},
			min: 0,
			max: 80,
			gridLineWidth: 0,
			labels: {enabled: false},
			plotLines: [{ 
	            color: 'white',
	            width: 2,
	            value: 0
        	}]
		},
		/*plotOptions: {
            series: {
                point: {
                    events: {
                        mouseOver: function() {
                        	$(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css('fill', 'black');
                        },
                        mouseOut: function() {                       
                             $(this.series.chart.yAxis[0].labelGroup.element.childNodes[this.x]).css('fill', '#999999');
                        }
                    }
                }
            }
        },*/
		tooltip: {
			backgroundColor: '#fff',
			borderColor: 'black',
			borderRadius: 2,
			borderWidth: 0,
			width: 400,
			crosshairs: true,
			useHTML : true,
			formatter: function() {
				if(events[yearConverter(this.x)]){
					return '<p><b>' + yearConverter(this.x) + '</b></br>' + this.series.name + ':' + this.y + '%' + events[yearConverter(this.x)].content;
				}
				else {
					return '<p><b>' + yearConverter(this.x) + '</b></br>' + this.series.name + ':' + this.y + '%';
				}
			}
		},

		legend: {
			borderWidth: 0,
			layout: 'vertical',
			align: 'left',
			itemHiddenStyle: {color: '#fff'},
			itemStyle: {color: '#fff'},
			itemHoverStyle: {
				color: '#fff',
				fontWeight: 'bold'
				},
			floating: true,
			y: -350
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
					fillColor: '#0b1112'
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

	var redrawLabels = function(chart){
		//add classes to labels with events
		var chartLabels = $(chart.container).find('.highcharts-axis-labels').children();
		chartLabels.each(function(index){
			var labelText = $(this).text();

			if(events[labelText]){
				$(this).attr({'class' :'active-label'});

			}
		});
	}
	

	//slide functionality
	$(window).on({
		resize : function(){
			$('.chart-wrapper').css({left : $(window).outerWidth(true)});
		}
	});
	$(window).trigger('resize');

	$('.js-enter').on({
		click : function(){
			$('html, body').animate({scrollLeft : $(window).outerWidth(true)}, 500, function(){
				$('.arrow').fadeIn();
			});
		}
	});


});



