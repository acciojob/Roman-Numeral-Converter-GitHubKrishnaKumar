function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
    
  //your code here
  let romanNum = "";
  const strNum = String(num);
  const romans = {
      1: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // ones
      2: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // tens
      3: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
      4: ["M", "MM", "MMM"] // thousands
  };

  for (let i = 1; i <= strNum.length; i++){
      if (Number(strNum[strNum.length - i]) !== 0)
          romanNum = romans[i][strNum[strNum.length - i] - 1] + romanNum;
  }
  return romanNum;
}
  
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
