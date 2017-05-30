module.exports = function main(email, suffixes) {
  // Write your code here
  var splitStr = email.split('@');
  if(splitStr.length != 2){
	  return false;
  }
  var result = false;
  for(var i = 0;i<suffixes.length;i++){
	  if(suffixes[i] === splitStr[1]){
		  result = true;
		  break;
	  }
  }
  return result;
};
