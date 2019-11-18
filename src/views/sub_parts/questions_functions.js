module.exports = {
   get_marked_ques:function(id,isMarked,callback) {
	var questionList = JSON.parse(localStorage.getItem('questionList')) || [];
    var solvedQuestion = 0;
    var remainQuestion = 0;
    var markedQuestion = 0;

	new Promise((resolve, reject) => {
		var exist = false;
	 for(var i = 0; i < questionList.length; i++)
	   if(questionList[i]._id === id) {
	           exist = true; 
	           break;
	       }
	        if(exist){
	        	 var addJSON = {
	        	 	correctAns:questionList[i].correctAns,
					isAnswered:questionList[i].isAnswered,
					isMarked:isMarked,
					markAnswered:questionList[i].markAnswered,
					options:questionList[i].options,
					question:questionList[i].question,
					subject:questionList[i].subject,
					testId:questionList[i].testId,
					optionSelected:questionList[i].optionSelected,
					isCoorectAns:questionList[i].isCoorectAns,
					_id:id,
					isRemaining:questionList[i].isRemaining,
					questionTime:questionList[i].questionTime,
				};

		        var index = questionList.findIndex(item => item._id === id)
		       	questionList.splice(index, 1, addJSON);
	  		 	resolve(questionList);	
			}	 		
	  	}).then((questionList)=> {
		  	 module.exports.save_question_data(questionList, function(err,result){
	            if(result) {

	            	for(var i = 0; i < questionList.length; ++i){
						   if(questionList[i].isAnswered == 'yes'){
						   		solvedQuestion++;
							}
							if(questionList[i].isRemaining == 'yes'){
						   		remainQuestion++;
							}
							if(questionList[i].isMarked == 'yes'){
						   		markedQuestion++;
							}
						}
					localStorage.setItem('solvedQuestion',solvedQuestion);
					localStorage.setItem('remainQuestion',remainQuestion);
					localStorage.setItem('markedQuestion',markedQuestion);

	             return  callback(null,{questionList:questionList});;
	          }
		 });		
	});	
},

save_question_data:function(data,callback){
	 localStorage.setItem('questionList',JSON.stringify(data));
		callback(null,{status:true});	 
},

 get_selected_ques:function(id,optionSelected,isAnswered,isRemaining,isCoorectAns,callback) {
	var questionList = JSON.parse(localStorage.getItem('questionList')) || [];
   var solvedQuestion = 0;
   var remainQuestion = 0;
   var markedQuestion = 0;

	new Promise((resolve, reject) => {
		var exist = false;
	 for(var i = 0; i < questionList.length; i++)
	   if(questionList[i]._id === id) {
	           exist = true; 
	           break;
	       }
	        if(exist){
	        	 var addJSON = {
	        	 	correctAns:questionList[i].correctAns,
					isAnswered:isAnswered,
					isMarked:questionList[i].isMarked,
					markAnswered:questionList[i].markAnswered,
					options:questionList[i].options,
					question:questionList[i].question,
					subject:questionList[i].subject,
					testId:questionList[i].testId,
					optionSelected:optionSelected,
					isCoorectAns:isCoorectAns,
					_id:id,
					isRemaining:isRemaining,
					questionTime:questionList[i].questionTime,
				};

		        var index = questionList.findIndex(item => item._id === id)
		       	questionList.splice(index, 1, addJSON);
	  		 	resolve(questionList);	
			}	 		
	  	}).then((questionList)=> {
		  	 module.exports.save_question_data(questionList, function(err,result){
	            if(result) {
						for(var i = 0; i < questionList.length; ++i){
						   if(questionList[i].isAnswered == 'yes'){
						   		solvedQuestion++;
							}
							if(questionList[i].isRemaining == 'yes'){
						   		remainQuestion++;
							}
							if(questionList[i].isMarked == 'yes'){
						   		markedQuestion++;
							}
						}
					localStorage.setItem('solvedQuestion',solvedQuestion);
					localStorage.setItem('remainQuestion',remainQuestion);
					localStorage.setItem('markedQuestion',markedQuestion);

	             return  callback(null,{questionList:questionList});;
	          }
		 });		
	});	
},


set_question_time:function(index,curr_ques_time,callback) {

	var prevIndex = localStorage.getItem('currIndex');
	localStorage.setItem('prevIndex',prevIndex);

		localStorage.setItem('currIndex',index);

	console.log('current_index:'+index);
	console.log('prevIndex:'+prevIndex);

	var questionList = JSON.parse(localStorage.getItem('questionList')) || [];
	new Promise((resolve, reject) => {
	let tmp_time =	questionList[prevIndex].questionTime = curr_ques_time;
		 var addJSON = {
    	 	correctAns:questionList[prevIndex].correctAns,
			isAnswered:questionList[prevIndex].isAnswered,
			isMarked:questionList[prevIndex].isMarked,
			markAnswered:questionList[prevIndex].markAnswered,
			options:questionList[prevIndex].options,
			question:questionList[prevIndex].question,
			subject:questionList[prevIndex].subject,
			testId:questionList[prevIndex].testId,
			optionSelected:questionList[prevIndex].optionSelected,
			isCoorectAns:questionList[prevIndex].isCoorectAns,
			_id:questionList[prevIndex].id,
			isRemaining:questionList[prevIndex].isRemaining,
			questionTime:tmp_time,
		};
		questionList.splice(prevIndex, 1, addJSON);
		 	resolve(questionList);	 		
	  	}).then((questionList)=> {
		  	 module.exports.save_question_data(questionList, function(err,result){
	            if(result) {
			     return  callback(null,{questionList:questionList});;
	          }
		 });		
	});	
},







	removeProduct:function(productId,callback){
	var questionList = JSON.parse(localStorage.getItem('cartItems')) || [];
    let products = questionList.filter(product => product.id !== productId );
	  module.exports.save_question_data(products, function(err,result){
	            if(result) {
	             	var myArr = JSON.parse(localStorage.getItem('cartItems')) || [];
	             	 return  callback(null,{success:true,myArr:myArr});
	              }
	      	});
	},

}



