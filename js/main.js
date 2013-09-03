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
	 function ScrollBy100 () {
            window.scrollBy (0,100);}
	
	var events = {
		1974 : {
			content : '<p>Despite recent success in the environmental awareness arena including the formation of the EPA, landmark legislation, and the very first Earth Day (April 20, 1970), concern for the environment still remains at relatively low levels.  Still an environmental issue is dominating the eco-consciousness of Americans as a result of the oil embargo, as 46% say fuel and energy shortages is one of their top concerns.  Americans gain an affinity to smaller, more fuel-efficient cars from overseas.  It is a trend that replays itself several times over the next 4 decades as Americans are quick to react to rising fuel prices – See 1980-81, 2006, and 2008.</p>'
		},
		1978 : {
			content : '<p>Love Canal disaster becomes a national media story, but concern for pollution remains steady.</p>'
		},
		1987 : {
			content : '<p>“Contrary to the expectations of many analysts, attention to environmental issues has not peaked; it is still gathering momentum.  In fact, public attitudes towards a wide variety of environmental issues today point to a steady growth in the power of environmental movements in the coming decades.”  -January 1987 Public Pulse.  This prediction becomes true as concern for pollution rises the next 4 years.</p>'
		},
		1989 : {
			content : '<p>Exxon Valdez oil spill pushes concern for the environment to its highest levels ever in the US.  The recession in the early part of the 1990’s helps to cool off the topic. Even prior to the Valdez oil spill, 62% said that pollution posed a very serious threat to American society – up sharply from the 44% who thought so in 1984.</p>'
		},
		1990 : {
			content : '<p>The birth year for Green Gauge, when SC Johnson commissions the first study entitled “The Environment:  Public Attitudes and Individual Behavior” (perhaps we should hyperlink?)</p>'
		},
		1994 : {
			content : '<p>Roper Public Pulse - “The environmental movement has changed dramatically in the space of about a decade.  Public concern about the environment rose to crises proportions at the end of the 1980s:  About one-quarter of Americans identified the environment as one of their top two or three concerns.  In the 1990s, though, concern settled to a new base line…The delicne partly reflects a shift in focus to other pressing issues, like the past recession, crime, and health care costs.  But environmental concerns also have attenuated because public anxiety is now starting to be addressed through actions by government, businesses, and people themselves…Lower levels of concern do not necessarily mean a lessening of the importance of the issue.  The environment like other “hot” social issues, has a life cycle…And once consumers reach a level of competence enabling them to deal with the problem, it’s not uncommon to see behaviors outpace concerns:  It is at this point that the public begins to internalize an issue.”</p>'
		},
		1995 : {
			content : '<p>Even though recession concerns tend to dominate in the US, when people around the world are given the specific choice between protecting the environment and having economic growth, the environment wins by a fairly substantial margin, according to the Roper/INRA global survey.  At the same time, however, only 8% of people around the world believe their country’s environmental situation today is close to or is the best possible.  Each of the world’s major regions believes that on balance the environment should take priority over economic growth with Central Europe (76%) and the former Soviet Union (71%) most pro-environment.  These two regions are also the least likely to give high markets to the current condition of the environment in their countries.  On the other hand more economically developed regions like North America are much more likely to feel positive about the state of the environment  - a trend that persists to present day.</p>'
		},
		1998 : {
			content : '<p>– Increased interest and action on the environment - “A combination of factors is probably responsible:  economic good times, peace, and a declining crime rate may leave people less concerned about personal security, allowing environmental issues to rise.” -Green Gauge Report 2000.  Green purchasing hits a 10 year high in early 2001, as 55% of the American public report having purchased a product labeled or advertised as environmentally safe at some point..  By 2002, however recession, homeland security, and corporate distrust are dominating concerns in the US.</p>'
		},
		1999 : {
			content : '<p>68% Recall seeing labels saying product is environmentally safe or biodegradable (+18 pts from 1990)</p>'
		},
		2003 : {
			content : '<p>Despite cooling attitudes towards the environment, hybrid cars and other products that can help save money and save the environment start to capture the attention of Americans.   “Activities and products that are catching the environmentally yet economically conscious consumer’s eye include: energy efficient products, electricity conservation at home, recycling centers and hybrid cars” 68% of Americans are aware of Hybrids (+18 points from 2002) and 30% of those aware are interested in buying (+5 point s from 2002)– Green Gauge US Report 2003.  By 2013, 95% were aware of Gas-Electric Hybrids and 48% would consider purchasing.</p>'
		},
		2005 : {
			content : '<p>Americans begin to experience an “environmental awakening” Beginning in 2005 many environmental behaviors are back on the rise and green purchasing hits another high in 2008, with 63% report having purchased a product labeled or advertised as environmentally safe at some point.  - this exuberance is short-lived however as the Housing Market crash refocuses Americans squarely on the state of the economy.</p>'
		},
		2006 : {
			content : '<p>Al Gore’s and inconvenient truth reignites the global warming debate.  Much of the world remains highly concerned about the issue to this day, but skepticism still persists in parts of the Developed world – namely the US and UK.</p>'
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
				plotLines: [{ // mark the weekend
                color: 'white',
                width: 2,
                value: 0,
            }],
			},

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
				itemHiddenStyle: {color: '#fff'},
				itemStyle: {
						color: '#fff'                        
					},
				itemHoverStyle: {
					color: '#fff',
					fontWeight: 'bold'
					}
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