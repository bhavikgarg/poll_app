$(document).ready(function(){

	// get json data from server for questions 
/*
	$.ajax({
		url : 'data.json',
		type : 'GET',
		dataType : "text",
		success : function(data){
			console.log("Data Recieved is : "+data);

			// function to parse the json and display as html
			parseData(data);

		}, 
		error : function(err){
			alert("Error : "+err);
		}
	});*/

parseData();




});   // document.ready ends

var jsonObject = {
   "question" : "Who is the best ODI player in the world ?",
   "type": "single_choice",
   "link": "http://www.relianceiccrankings.com/odi/batting/rankings.php",
   "votes": "23004",
   "options": [{
   	 "id" : "1",
     "text": "Virat Kohli",
     "votes": "10234"
   },{
      "id" : "2",
     "text": "AB DE Villiers",
     "votes": "9331"
   },{
   	  "id" : "3",
     "text": "Hashim Amla",
     "votes": "3234"
   },{
   	 "id" : "4",
     "text": "Rohit Sharma",
     "votes": "1244"
   },{
   	 "id" : "5",
     "text": "Someone else",
     "votes": "3400"
   }]
 };


function parseData(){


	// var jsonObject = JSON.parse(json);

	/*var parent = document.createElement("div");

	var parentDiv = document.createElement("div");
	parentDiv.id = "question_container";

	var questionDiv = document.createElement("div");
	questionDiv.className = "question";

	// parentDiv.appendChild(questionDiv);

	var h1 = document.createElement("h1");
	h1.className = "text-white";
	h1.textContent = jsonObject.question;

	questionDiv.appendChild(h1);

	var h5 = document.createElement("h5");
	h5.className = "text-white";
	h5.textContent = "Click one of the options below to vote and see results.";

	parentDiv.appendChild(questionDiv);
	parentDiv.appendChild(h5);

	parent.appendChild(parentDiv);

	var optionDiv = document.createElement("div");
	optionDiv.id = "option-container";

	$.each(jsonObject.options, function(k, option){
				

		var options = document.createElement("div");
		options.className = "option";
		options.id = option.id;
		options.textContent = option.text;
		optionDiv.appendChild(options);
		// html += "<div class = 'option' id = '"+option.id+"'>"+option.text+"</div>";
				
	});

	parent.appendChild(optionDiv);*/


	var html = "<div id = 'parent'><div id = 'question_container'><div class = 'question'><h1 class = 'text-white'>"+jsonObject.question+
				"</h1></div><h5 class = 'text-white'>Click one of the options below to vote and see results.</h5></div><div id = 'option-container'>";
			
			$.each(jsonObject.options, function(k, option){
				html += "<div class = 'option' id = '"+option.id+"'>"+option.text+"</div>";
				
			});

	html += "</div></div></div>";

	$('#poll-container').append(html);
	//document.getElementById("poll-container").appendChild(parent);

}

$(document).delegate('.option', 'click', function(){
	var id = $(this).attr("id");

	//$('#parent').html("<i class = 'fa fa-refresh fa-spin'></i>");

	var total = 0;
	$.each(jsonObject.options , function(k,v){
		console.log("v.votes : "+v.votes);
		console.log("Total in : "+total);
		total += parseInt(v.votes);
	})
	console.log("Total votes : "+total);
	var resultHTML = "";

	$.each(jsonObject.options , function(k,v){

		var percent = Math.round((v.votes / total)*100);
		console.log("percent is : "+percent);
		if(id == v.id){

			resultHTML += "<div class = 'result'><div class = 'active' style = 'background-color : yellow ; width : "+percent+"%; height : 100%'></div>"+v.text+"<span class = 'text-white'>"+percent+"%</span></div>";
		}
		else
		{	
			resultHTML += "<div class = 'result'><div class = 'navy-blue' style = 'width : "+percent+"%; height : 100%; background-color : #042f74;'></div>"+v.text+"<span class = 'text-white'>"+percent+"%</span></div>";
		}
	});
	console.log("Result html : "+resultHTML);
	$('#option-container').html(resultHTML);


});
	

