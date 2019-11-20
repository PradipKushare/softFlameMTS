export function SubmitQuesFunc() {
  let exam_name = '';
  let subjects = '';
  let topic = '';
  let testId = '';
  let questionData = [];
  let examInfoData = JSON.parse(localStorage.getItem('examData'));
   if (examInfoData !== null && examInfoData!== undefined) {
        exam_name = examInfoData.exam_name;
        subjects = examInfoData.subjects;
        testId = examInfoData._id;
   }  

    let questionList = JSON.parse(localStorage.getItem('questionList')) || [];
    let chkrec = JSON.stringify(questionList);
      if (chkrec!== '{}' && chkrec  !== undefined) {
         questionData = questionList;
    }

   let userId = localStorage.getItem('sess_user_id');
   let totalQuestion = localStorage.getItem('totalQuestion'); 
   let totalAttempt =   localStorage.getItem('solvedQuestion');  
   let leftQuestion = localStorage.getItem('remainQuestion'); 
   let markedQuestion = localStorage.getItem('markedQuestion'); 
   let remainingTime = localStorage.getItem('remainingTime'); 
   let testName = exam_name
   let subjectName = subjects;
   let quesArr = questionData;
   let testStatus = 2;


   let post_data = {
         userId:userId,
         testId:testId,
         totalQuestion:totalQuestion,
         totalAttempt:totalAttempt,
         leftQuestion:leftQuestion,
         markedQuestion:markedQuestion,
         remainingTime:remainingTime,
         testName:testName,
         subjectName:subjectName,
         quesArr:quesArr,
         testStatus:testStatus

      }

	return post_data;
}

export function SubmitQuesFuncClose() {
  let exam_name = '';
  let subjects = '';
  let topic = '';
  let testId = '';
  let questionData = [];
  let examInfoData = JSON.parse(localStorage.getItem('examData'));
   if (examInfoData !== null && examInfoData!== undefined) {
        exam_name = examInfoData.exam_name;
        subjects = examInfoData.subjects;
        testId = examInfoData._id;
   }  

    let questionList = JSON.parse(localStorage.getItem('questionList')) || [];
    let chkrec = JSON.stringify(questionList);
      if (chkrec!== '{}' && chkrec  !== undefined) {
         questionData = questionList;
    }

   let userId = localStorage.getItem('sess_user_id');
   let totalQuestion = localStorage.getItem('totalQuestion'); 
   let totalAttempt =   localStorage.getItem('solvedQuestion');  
   let leftQuestion = localStorage.getItem('remainQuestion'); 
   let markedQuestion = localStorage.getItem('markedQuestion'); 
   let remainingTime = localStorage.getItem('remainingTime'); 
   let testName = exam_name
   let subjectName = subjects;
   let quesArr = questionData;
   let testStatus = 1;


   let post_data = {
         userId:userId,
         testId:testId,
         totalQuestion:totalQuestion,
         totalAttempt:totalAttempt,
         leftQuestion:leftQuestion,
         markedQuestion:markedQuestion,
         remainingTime:remainingTime,
         testName:testName,
         subjectName:subjectName,
         quesArr:quesArr,
         testStatus:testStatus

      }

  return post_data;
}