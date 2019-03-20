var egg_left = $("#left_egg");
var egg_center = $("#centered_egg");
var egg_right = $("#right_egg");
var count_marks_nmb_display = $("#count_marks_nmb_display");
var coin1 = $("#coin");                   //getting the required elements by id from inner html
var coin2 = $("#coin2");
var coin3 = $("#coin3");
var duck = $("#duck_image");
var quest_box = $("#quest_box");
var timer_display = $("#timer_display");



var arrow_left = $(".arrow_left");
var arrow_center = $(".arrow_center"); ////getting the required elements by class from inner html
var arrow_right = $(".arrow_right");


var coin_index = 0; //index of coins array
var index = 0;   //index of questions and answers
var i;
var pos = 0;             // creating new variables 
var check_btn1 = 0;
var check_btn2 = 0;
var check_btn3 = 0;
var count_res = 0;

var timer_interval;
var initial_time=15;
var time_unit = initial_time;





var quests = new Array();
quests[0] = "2 + ? = 6",
quests[1] = "3 + 7 = ?",
quests[2] = "10 + 12 = ?2",
quests[3] = "10 + 1 = ?",
quests[4] = "10 + 5 = ?",
quests[5] = "75 + ?? =87",
quests[6] = "3 x ? =18",
quests[7] = "3 + 3 + 3 =?",  //array of questions
quests[8] = "10 : ? =2",
quests[9] = "5 + ? =8",
quests[10] = "?? : 9 =2",
quests[11] = "? x 3 =24",
quests[12] = "13 - ? =6",
quests[13] = "26 - 9 =??",
quests[14] = "1? - 2 =9";
quests[15] = "?? : 5 =2",
quests[16] = "? x 2 =24",
quests[17] = "60 - ? =24",
quests[18] = "2(10:5)-4 =??";

var ans_options = new Array();
ans_options[0] = ["5","8","4"],
ans_options[1] = ["11","10","8"],
ans_options[2] = ["2","6","4"],
ans_options[3] = ["2","11","4"],
ans_options[4] = ["15","6","4"],
ans_options[5] = ["13","12","15"],  //array of all possible answers
ans_options[6] = ["8","9","6"],
ans_options[7] = ["18","9","12"],
ans_options[8] = ["3","4","5"],
ans_options[9] = ["3","9","2"],
ans_options[10] = ["16","18","19"],
ans_options[11] = ["7","12","8"],
ans_options[12] = ["7","5","9"],
ans_options[13] = ["15","19","17"],
ans_options[14] = ["1","9","7"],
ans_options[15] = ["7","5","10"],
ans_options[16] = ["12","5","6"],
ans_options[17] = ["40","37","36"],
ans_options[18] = ["10","0","6"];

var right_ans = new Array();
right_ans[0] = "4",
right_ans[1] = "10",
right_ans[2] = "2",
right_ans[3] = "11",
right_ans[4] = "15",
right_ans[5] = "12",
right_ans[6] = "6",
right_ans[7] = "9",
right_ans[8] = "5",    //array of correct answers
right_ans[9] = "3",
right_ans[10] = "18",
right_ans[11] = "8",
right_ans[12] = "7",
right_ans[13] = "17",
right_ans[14] = "1",
right_ans[15] = "10",
right_ans[16] = "12",
right_ans[17] = "36",
right_ans[18] = "0";

var answers = new Array();  
answers[0] = $(".ans1"),
answers[1] = $(".ans2"),    //array of box containg answers
answers[2] = $(".ans3");

var coin_array = new Array();
coin_array[0]="images/duck_empty.png",
coin_array[1]="images/duck1.png",
coin_array[2]="images/duck2.png",
coin_array[3]="images/duck3.png",
coin_array[4]="images/duck4.png",
coin_array[5]="images/duck5.png",
coin_array[6]="images/duck6.png",
coin_array[7]="images/duck7.png",
coin_array[8]="images/duck8.png",   //array of pics (duck with a bag of coins)
coin_array[9]="images/duck9.png",
coin_array[10]="images/duck10.png",
coin_array[11]="images/duck11.png",
coin_array[12]="images/duck12.png",
coin_array[13]="images/duck13.png",
coin_array[14]="images/duck14.png",
coin_array[14]="images/duck15.png",
coin_array[15]="images/duck11.png",
coin_array[16]="images/duck12.png",
coin_array[17]="images/duck13.png",
coin_array[18]="images/duck14.png",
coin_array[19]="images/duck15.png";

var arrowsArray = new Array();
arrowsArray[0] = arrow_left,
arrowsArray[1] = arrow_center,  //array of the three arrows
arrowsArray[2] = arrow_right;

var eggsArray = new Array();
eggsArray[0] = egg_left,
eggsArray[1] = egg_center, //array of the three eggs
eggsArray[2] = egg_right;



var awesome_interval = setInterval(awesomityCodes,700); // time before the calling initialisation function




function coin3_animation(){

	coin3.css("display","block");
	coin3.animate({bottom:15+"%"},2000,"swing",  //function to animate the coin on the right side
         function(){
		   $(this).css("display","none");            
		   $(this).css("bottom",50+"%");      //returning to default
		   duck.attr("src",coin_array[coin_index]);
	           } );
}
function coin2_animation(){
	coin2.css("display","block");
	coin2.animate({left:92+"%"},2000,"swing",  //function to animate the coin in the center
      function(){ $(this).animate({bottom:15+"%"},1000,"swing",
		      function(){
		$(this).css("display","none");   //returning to default
		$(this).css("left",50+"%");
		$(this).css("bottom",45+"%");      
		duck.attr("src",coin_array[coin_index]);
	                   } );
         });
}

function coin1_animation(){
	coin1.css("display","block");   
	coin1.animate({bottom:30+"%",left:92+"%"},2000,"swing",   //function to animate the coin on the left side
	  function(){ $(this).animate({bottom:15+"%"},"1000","swing",
		    function(){
		$(this).css("display","none");    //returnig to default
		$(this).css("left",2+"%");
		$(this).css("bottom",50+"%");
		duck.attr("src",coin_array[coin_index]);
	                   });
                });
}
function timer(){       //function of the timer
	time_unit -=1;
	timer_display.html(time_unit);
	if( time_unit == 0){
		clearInterval(timer_interval);
		$("#tryagain_div").css("display","block");
	};
}


function awesomityCodes(){

	quest_box.css("display","none");
	answers[0].css("display","none");
	answers[1].css("display","none");
	answers[2].css("display","none");
	egg_left.css("display","none");
	egg_center.css("display","none");
	egg_right.css("display","none");

	arrow_center.css("display","none");
	arrow_center.css("bottom","0%");
	arrow_center.css("width","5%");
	arrow_center.css("height","20%");
	
	arrow_left.css("display","none");     // function to display elements and initialize the whole system
	arrow_left.css("bottom","0%");
	arrow_left.css("width","10%");
	arrow_left.css("left","30%");
	arrow_left.css("height","18%");


	arrow_right.css("bottom","0%");
    arrow_right.css("width","10%");
    arrow_right.css("display","none");
    arrow_right.css("right","27%");
    arrow_right.css("height","18%");

    count_marks_nmb_display.css("display","none");
    timer_display.css("display","none");


	quest_box.html(quests[index]).show("drop",700);

    for( i = 0; i< answers.length ; i++){

    	answers[i].html(ans_options[index][i]).fadeIn(700); //displaying all possible answers

    	eggsArray[i].show(700);  // displaying eggs one by one
    	arrowsArray[i].show(700);
    	count_marks_nmb_display.html(count_res).fadeIn(2000);
    	timer_display.html(time_unit).fadeIn(2000);


    	 if (i == 2) {
    		clearInterval(awesome_interval); // to stop the initialisation function
    	        };

                                         }
        
}



 /*
 //the function of the arrow left's event

function arrowleft_event (evt){
	check_btn1 = 1;
	$(this).animate({ width : 1+"%",bottom : 48+"%",height : 4+"%",left : 4+"%"},500,"swing",

		      function(evt){
		if ((check_btn1 == 1) && (answers[0].html() == right_ans[index])) {
			egg_left.hide("explode",0,"swing");
			coin1_animation();
			coin_index += 1;
			count_res +=1;
   	        count_marks_nmb_display.html(count_res);
		check_btn1 = 0;
		if (index == quests.length - 1) {

			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};



			index = 0;
			coin_index = 0;
			awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
     


		};
		};

		if ((check_btn1 == 1) && (answers[0].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn1 = 0;
		if (index == quests.length - 1) {
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};
		
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};
	});

}

 //the function of the arrow center's event


function arrowcenter_event (evt){
	check_btn2 = 1;
	$(this).animate({ width : 2+"%",bottom : 45+"%",height : 3+"%" },500,"swing",function(evt){

		if ((check_btn2 == 1) && (answers[1].html() == right_ans[index])) {
			egg_center.hide("explode",0,"swing");

		coin2_animation();
		coin_index += 1;
		count_res +=1;
   	    count_marks_nmb_display.html(count_res);
		check_btn2 = 0;
		if (index == quests.length - 1) {

			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};

			index = 0;
		    awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
           
		};
		};

		if ((check_btn2 == 1) && (answers[1].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn2 = 0;
		if (index == quests.length - 1) {			
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};

	});

}

 //the function of the arrow right event


function arrowright_event (evt){
	check_btn3 = 1;
	$(this).animate({ width : 1+"%",bottom : 49+"%",height : 4+"%",right : 4+"%"},500,"swing",function(evt){

		if ((check_btn3 == 1) && (answers[2].html() == right_ans[index])) {
			egg_right.hide("explode",0,"swing");
			coin3_animation();
			coin_index += 1;
			count_res +=1;
   	        count_marks_nmb_display.html(count_res);
		check_btn3 = 0;
		if (index == quests.length - 1) {
			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};

			index = 0;
			awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
           
		};
		};

		if ((check_btn3 == 1) && (answers[2].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn3 = 0;
		if (index == quests.length - 1) {
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};


		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};

	});


}




//arrow_left.on("tap",arrowleft_event);

//arrow_center.on("tap",arrowcenter_event);

//arrow_right.on("tap",arrowright_event);

 

*/


 //swipe events starts


arrow_left.swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction == "left") {
                     check_btn1 = 1;
                     if (time_unit == initial_time) {
                 timer_interval  = setInterval(timer,1000);

                         };
	$(this).animate({ width : 1+"%",bottom : 48+"%",height : 4+"%",left : 4+"%"},500,"swing",

		      function(evt){
		if ((check_btn1 == 1) && (answers[0].html() == right_ans[index])) {
			egg_left.hide("explode",0,"swing");
			coin1_animation();
			coin_index += 1;
			count_res +=1;
			time_unit +=2;
   	        count_marks_nmb_display.html(count_res);
		check_btn1 = 0;
		if (index == quests.length - 1) {

			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};



			index = 0;
			coin_index = 0;
			awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
     


		};
		};

		if ((check_btn1 == 1) && (answers[0].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn1 = 0;
		if (index == quests.length - 1) {
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};
		
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};
	});

                           return false;
                      }

                  }
          });
arrow_center.swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction == "up") {

                         	check_btn2 = 1;
                     if (time_unit == initial_time) {
                 timer_interval  = setInterval(timer,1500);

                         };

	$(this).animate({ width : 2+"%",bottom : 45+"%",height : 3+"%" },500,"swing",function(evt){

		if ((check_btn2 == 1) && (answers[1].html() == right_ans[index])) {
			egg_center.hide("explode",0,"swing");

		coin2_animation();
		coin_index += 1;
		count_res +=1;
		time_unit +=2;
   	    count_marks_nmb_display.html(count_res);
		check_btn2 = 0;
		if (index == quests.length - 1) {

			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};

			index = 0;
		    awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
           
		};
		};

		if ((check_btn2 == 1) && (answers[1].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn2 = 0;
		if (index == quests.length - 1) {			
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};

	});
                           return false;
                      }

                  }
          });
arrow_right.swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {
                      if (phase=="move" && direction == "right") {
                          check_btn3 = 1;
                     if (time_unit == initial_time) {
                 timer_interval  = setInterval(timer,1500);

                         };

	$(this).animate({ width : 1+"%",bottom : 49+"%",height : 4+"%",right : 4+"%"},500,"swing",function(evt){

		if ((check_btn3 == 1) && (answers[2].html() == right_ans[index])) {
			egg_right.hide("explode",0,"swing");
			coin3_animation();
			coin_index += 1;
			count_res +=1;
			time_unit +=3;
   	        count_marks_nmb_display.html(count_res);
		check_btn3 = 0;
		if (index == quests.length - 1) {
			if (count_res == quests.length){
			$("#goodjob_div").css("display","block");	
			}
			else{
			$("#tryagain_div").css("display","block");
			};

			index = 0;
			awesome_interval = setInterval(awesomityCodes,0);
		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);
           
		};
		};

		if ((check_btn3 == 1) && (answers[2].html() != right_ans[index])) {
		$(this).hide("explode",0,"swing");
		check_btn3 = 0;
		if (index == quests.length - 1) {
			if (count_res<quests.length) {
			$("#tryagain_div").css("display","block");
			}
			else {
			$("#goodjob_div").css("display","block");	
			};


		}else {
           index += 1;
           awesome_interval = setInterval(awesomityCodes,0);

		};
	};

	});
                           return false;
                      }

                  }
          });

//swipe events ends
$("#instructions").css("display","none");

$("#instructions").on("pageinit",function(){
$(this).fadeIn(2000);	
});
$("#restartbutton").on("tap",function(){
	location.reload();
})
