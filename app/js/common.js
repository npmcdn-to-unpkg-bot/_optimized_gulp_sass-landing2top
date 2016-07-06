$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Google loader
	// google.charts.load("current", {packages:["calendar"]});
	// google.charts.setOnLoadCallback(drawChart);

	function drawChart() {
		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn({ type: 'date', id: 'Date' });
		dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
		dataTable.addRows([

			// 1 заезд
			[ new Date(2016, 5, 2), 1 ],
			[ new Date(2016, 5, 3), 1 ],
			[ new Date(2016, 5, 4), 1 ],
			[ new Date(2016, 5, 5), 1 ],
			[ new Date(2016, 5, 6), 1 ],
			[ new Date(2016, 5, 7), 1 ],
			[ new Date(2016, 5, 8), 1 ],
			[ new Date(2016, 5, 9), 1 ],
			[ new Date(2016, 5, 10), 1 ],
			[ new Date(2016, 5, 11), 1 ],
			[ new Date(2016, 5, 12), 1 ],
			[ new Date(2016, 5, 13), 1 ],
			[ new Date(2016, 5, 14), 1 ],
			[ new Date(2016, 5, 15), 1 ],
			[ new Date(2016, 5, 16), 1 ],
			[ new Date(2016, 5, 17), 1 ],
			[ new Date(2016, 5, 18), 1 ],
			[ new Date(2016, 5, 19), 1 ],
			[ new Date(2016, 5, 20), 1 ],
			[ new Date(2016, 5, 21), 1 ],
			[ new Date(2016, 5, 22), 1 ],

			// 2 заезд
			[ new Date(2016, 5, 25), 1 ],
			[ new Date(2016, 5, 26), 1 ],
			[ new Date(2016, 5, 27), 1 ],
			[ new Date(2016, 5, 28), 1 ],
			[ new Date(2016, 5, 29), 1 ],
			[ new Date(2016, 5, 30), 1 ],
			[ new Date(2016, 6, 1), 1 ],
			[ new Date(2016, 6, 2), 1 ],
			[ new Date(2016, 6, 3), 1 ],
			[ new Date(2016, 6, 4), 1 ],
			[ new Date(2016, 6, 5), 1 ],
			[ new Date(2016, 6, 6), 1 ],
			[ new Date(2016, 6, 7), 1 ],
			[ new Date(2016, 6, 8), 1 ],
			[ new Date(2016, 6, 9), 1 ],
			[ new Date(2016, 6, 10), 1 ],
			[ new Date(2016, 6, 11), 1 ],
			[ new Date(2016, 6, 12), 1 ],
			[ new Date(2016, 6, 13), 1 ],
			[ new Date(2016, 6, 14), 1 ],
			[ new Date(2016, 6, 15), 1 ],

			// 3 заезд
			[ new Date(2016, 6, 18), 1 ],
			[ new Date(2016, 6, 19), 1 ],
			[ new Date(2016, 6, 20), 1 ],
			[ new Date(2016, 6, 21), 1 ],
			[ new Date(2016, 6, 22), 1 ],
			[ new Date(2016, 6, 23), 1 ],
			[ new Date(2016, 6, 24), 1 ],
			[ new Date(2016, 6, 25), 1 ],
			[ new Date(2016, 6, 26), 1 ],
			[ new Date(2016, 6, 27), 1 ],
			[ new Date(2016, 6, 28), 1 ],
			[ new Date(2016, 6, 29), 1 ],
			[ new Date(2016, 6, 30), 1 ],
			[ new Date(2016, 6, 31), 1 ],
			[ new Date(2016, 7, 1), 1 ],
			[ new Date(2016, 7, 2), 1 ],
			[ new Date(2016, 7, 3), 1 ],
			[ new Date(2016, 7, 4), 1 ],
			[ new Date(2016, 7, 5), 1 ],
			[ new Date(2016, 7, 6), 1 ],
			[ new Date(2016, 7, 7), 1 ],
			[ new Date(2016, 7, 8), 1 ],
			
			// 4 заезд
			[ new Date(2016, 7, 10), 1 ],
			[ new Date(2016, 7, 11), 1 ],
			[ new Date(2016, 7, 12), 1 ],
			[ new Date(2016, 7, 13), 1 ],
			[ new Date(2016, 7, 14), 1 ],
			[ new Date(2016, 7, 15), 1 ],
			[ new Date(2016, 7, 16), 1 ],
			[ new Date(2016, 7, 17), 1 ],
			[ new Date(2016, 7, 18), 1 ],
			[ new Date(2016, 7, 19), 1 ],
			[ new Date(2016, 7, 20), 1 ],
			[ new Date(2016, 7, 21), 1 ],
			[ new Date(2016, 7, 22), 1 ],
			[ new Date(2016, 7, 23), 1 ],
			[ new Date(2016, 7, 24), 1 ],
			[ new Date(2016, 7, 25), 1 ],
			[ new Date(2016, 7, 26), 1 ],
			[ new Date(2016, 7, 27), 1 ],
			[ new Date(2016, 7, 28), 1 ],
			[ new Date(2016, 7, 29), 1 ],
			[ new Date(2016, 7, 30), 1 ],

			// заказ домиков
			[ new Date(2016, 8, 3), -1 ],
			[ new Date(2016, 8, 4), -1 ],
			[ new Date(2016, 8, 5), -1 ],
			[ new Date(2016, 8, 6), -1 ],
			[ new Date(2016, 8, 7), -1 ],
			[ new Date(2016, 8, 8), -1 ],
			[ new Date(2016, 8, 9), -1 ],
			[ new Date(2016, 8, 10), -1 ],
			[ new Date(2016, 8, 11), -1 ],
			[ new Date(2016, 8, 12), -1 ],
			[ new Date(2016, 8, 13), -1 ],
			[ new Date(2016, 8, 14), -1 ],
			[ new Date(2016, 8, 15), -1 ],
			[ new Date(2016, 8, 16), -1 ],
			[ new Date(2016, 8, 17), -1 ],
			[ new Date(2016, 8, 18), -1 ],
			[ new Date(2016, 8, 19), -1 ],
			[ new Date(2016, 8, 20), -1 ],
			[ new Date(2016, 8, 21), -1 ],
			[ new Date(2016, 8, 22), -1 ],
			[ new Date(2016, 8, 23), -1 ],
			[ new Date(2016, 8, 24), -1 ],
			[ new Date(2016, 8, 25), -1 ],
			[ new Date(2016, 8, 26), -1 ],
			[ new Date(2016, 8, 27), -1 ],
			[ new Date(2016, 8, 28), -1 ],
			[ new Date(2016, 8, 29), -1 ],
			[ new Date(2016, 8, 30), -1 ],
			[ new Date(2016, 9, 1), -1 ],
			[ new Date(2016, 9, 2), -1 ],
			[ new Date(2016, 9, 3), -1 ],
			[ new Date(2016, 9, 4), -1 ],
			[ new Date(2016, 9, 5), -1 ],
			[ new Date(2016, 9, 6), -1 ],
			[ new Date(2016, 9, 7), -1 ],
			[ new Date(2016, 9, 8), -1 ],
			[ new Date(2016, 9, 9), -1 ],
			[ new Date(2016, 9, 10), -1 ],
			[ new Date(2016, 9, 11), -1 ],
			[ new Date(2016, 9, 12), -1 ],
			[ new Date(2016, 9, 13), -1 ],
			[ new Date(2016, 9, 14), -1 ],
			[ new Date(2016, 9, 15), -1 ],
			[ new Date(2016, 9, 16), -1 ],
			[ new Date(2016, 9, 17), -1 ],
			[ new Date(2016, 9, 18), -1 ],
			[ new Date(2016, 9, 19), -1 ],
			[ new Date(2016, 9, 20), -1 ],
			[ new Date(2016, 9, 21), -1 ],
			[ new Date(2016, 9, 22), -1 ],
			[ new Date(2016, 9, 23), -1 ],
			[ new Date(2016, 9, 24), -1 ],
			[ new Date(2016, 9, 25), -1 ],
			[ new Date(2016, 9, 26), -1 ],
			[ new Date(2016, 9, 27), -1 ],
			[ new Date(2016, 9, 28), -1 ],
			[ new Date(2016, 9, 29), -1 ],
			[ new Date(2016, 9, 30), -1 ],
			[ new Date(2016, 9, 31), -1 ],
			[ new Date(2016, 10, 1), -1 ],
			[ new Date(2016, 10, 2), -1 ],
			[ new Date(2016, 10, 3), -1 ],
			[ new Date(2016, 10, 4), -1 ],
			[ new Date(2016, 10, 5), -1 ],
			[ new Date(2016, 10, 6), -1 ],
			[ new Date(2016, 10, 7), -1 ],
			[ new Date(2016, 10, 8), -1 ],
			[ new Date(2016, 10, 9), -1 ],
			[ new Date(2016, 10, 10), -1 ],
			[ new Date(2016, 10, 11), -1 ],
			[ new Date(2016, 10, 12), -1 ],
			[ new Date(2016, 10, 13), -1 ],
			[ new Date(2016, 10, 14), -1 ],
			[ new Date(2016, 10, 15), -1 ],
			[ new Date(2016, 10, 16), -1 ],
			[ new Date(2016, 10, 17), -1 ],
			[ new Date(2016, 10, 18), -1 ],
			[ new Date(2016, 10, 19), -1 ],
			[ new Date(2016, 10, 20), -1 ],
			[ new Date(2016, 10, 21), -1 ],
			[ new Date(2016, 10, 22), -1 ],
			[ new Date(2016, 10, 23), -1 ],
			[ new Date(2016, 10, 24), -1 ],
			[ new Date(2016, 10, 25), -1 ],
			[ new Date(2016, 10, 26), -1 ],
			[ new Date(2016, 10, 27), -1 ],
			[ new Date(2016, 10, 28), -1 ],
			[ new Date(2016, 10, 29), -1 ],
			[ new Date(2016, 10, 30), -1 ],
			[ new Date(2016, 11, 1), -1 ],
			[ new Date(2016, 11, 2), -1 ],
			[ new Date(2016, 11, 3), -1 ],
			[ new Date(2016, 11, 4), -1 ],
			[ new Date(2016, 11, 5), -1 ],
			[ new Date(2016, 11, 6), -1 ],
			[ new Date(2016, 11, 7), -1 ],
			[ new Date(2016, 11, 8), -1 ],
			[ new Date(2016, 11, 9), -1 ],
			[ new Date(2016, 11, 10), -1 ],
			[ new Date(2016, 11, 11), -1 ],
			[ new Date(2016, 11, 12), -1 ],
			[ new Date(2016, 11, 13), -1 ],
			[ new Date(2016, 11, 14), -1 ],
			[ new Date(2016, 11, 15), -1 ],
			[ new Date(2016, 11, 16), -1 ],
			[ new Date(2016, 11, 17), -1 ],
			[ new Date(2016, 11, 18), -1 ],
			[ new Date(2016, 11, 19), -1 ],
			[ new Date(2016, 11, 20), -1 ],
			[ new Date(2016, 11, 21), -1 ],
			[ new Date(2016, 11, 22), -1 ],
			[ new Date(2016, 11, 23), -1 ],
			[ new Date(2016, 11, 24), -1 ],
			[ new Date(2016, 11, 25), -1 ],
			[ new Date(2016, 11, 26), -1 ],
			[ new Date(2016, 11, 27), -1 ],
			[ new Date(2016, 11, 28), -1 ],
			[ new Date(2016, 11, 29), -1 ],
			[ new Date(2016, 11, 30), -1 ],
			[ new Date(2016, 11, 31), -1 ],


			]);

		var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

		var options = {
			title: "Периоды лагеря и заказа домиков",
			// height: 350,
			noDataPattern: {
				backgroundColor: '#B5C67F',
				color: '#B5C67F'
			},
			calendar: {
				cellColor: {
					// stroke: '#222',
					// strokeOpacity: 0.9,
					strokeWidth: 1,
				},
				focusedCellColor: {
					stroke: '#222',
					// strokeOpacity: 1,
					strokeWidth: 2,
				},
				monthOutlineColor: {
					stroke: '#981b48',
					strokeOpacity: 0.8,
					strokeWidth: 2
				},
				unusedMonthOutlineColor: {
					stroke: '#bc5679',
					strokeOpacity: 0.8,
					strokeWidth: 1
				},
				daysOfWeek: 'впвсчпс',
			},
			colorAxis: {
				colors: ['#91AA3F', '#923EAD']
			},
		};

		chart.draw(dataTable, options);
	};

	// pjax
	$(document).pjax("a.logo, .mnu_left a", ".pjax-container", {
				fragment: ".pjax-container"
	});

	// superfish
	$(document).ready(function() { jQuery('ul.sf-menu').superfish();
	});

});
