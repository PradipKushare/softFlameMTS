export function ClearQuesFunc(reportId) {
  localStorage.removeItem('currIndex');
  localStorage.removeItem('totalQuestion');
  localStorage.removeItem('solvedQuestion');
  localStorage.removeItem('remainQuestion');
  localStorage.removeItem('prevIndex');
  localStorage.removeItem('remainingTime');
  localStorage.removeItem('markedQuestion');
  localStorage.removeItem('isQuesLoaded');
  localStorage.removeItem('examData');
  localStorage.removeItem('questionTime');
  localStorage.removeItem('questionList');
}