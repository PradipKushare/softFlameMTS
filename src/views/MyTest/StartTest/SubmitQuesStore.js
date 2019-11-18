export function SubmitQuesFunc() {
  let examName = '';
  let subjects = '';
  let topic = '';
  let testId = '';
  let questionData = [];
  let examInfoData = JSON.parse(localStorage.getItem('examData'));
   if (examInfoData !== null && examInfoData!== undefined) {
        examName = examInfoData.examName;
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
   let testName = examName
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
  let examName = '';
  let subjects = '';
  let topic = '';
  let testId = '';
  let questionData = [];
  let examInfoData = JSON.parse(localStorage.getItem('examData'));
   if (examInfoData !== null && examInfoData!== undefined) {
        examName = examInfoData.examName;
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
   let testName = examName
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