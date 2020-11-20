$(document).ready(function(){
	$.get('/admin/getParameter').then(response => {
		if(response.success == true){
			var result = response.data;
			var data = {
				labels: ["January", "February", "March", "April", "May", "June", "July", "March", "September", "October", "November", "December"],
				datasets: [
					{
						label: "My Appointment dataset has confirmed",
						fillColor: "rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor: "rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data: [
							result.appointmentsTrue1,
							result.appointmentsTrue2,
							result.appointmentsTrue3,
							result.appointmentsTrue4,
							result.appointmentsTrue5,
							result.appointmentsTrue6,
							result.appointmentsTrue7,
							result.appointmentsTrue8,
							result.appointmentsTrue9,
							result.appointmentsTrue10,
							result.appointmentsTrue11,
							result.appointmentsTrue12,

						]
					},
					{
						label: "My Appointment dataset has not confirmed",
						fillColor: "rgba(220,220,220,0.2)",
						strokeColor: "rgba(220,220,220,1)",
						pointColor: "rgba(220,220,220,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220,220,220,1)",
						data: [
							result.appointmentsFalse1,
							result.appointmentsFalse2,
							result.appointmentsFalse3,
							result.appointmentsFalse4,
							result.appointmentsFalse5,
							result.appointmentsFalse6,
							result.appointmentsFalse7,
							result.appointmentsFalse8,
							result.appointmentsFalse9,
							result.appointmentsFalse10,
							result.appointmentsFalse11,
							result.appointmentsFalse12,

						]
					}
				]
			};
			var pdata = [];
			
			var services = result['0'];
			var colors = ['#28a745', '#5AD3D1', '#009688', '#ffc107', '#FF5E00', '#e83e8c', '#FF9999', '#fd7e14', '#ffc107'];
			var c = 0;
			services.map(item => {
				pdata.push({
					value: item.count,
					color: colors[c],
					highlight: "#e83e8c",
					label: item.name
				});
				c += 1;
			});
			
			var ctxl = $("#lineChartDemo").get(0).getContext("2d");
			var lineChart = new Chart(ctxl).Line(data);
			
			var ctxp = $("#pieChartDemo").get(0).getContext("2d");
			var pieChart = new Chart(ctxp).Pie(pdata);
		}
	})
})
	
