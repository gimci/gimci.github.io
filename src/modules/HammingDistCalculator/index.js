export default function (text1, text2) {
  var i;
  var diff = 0;
  var longerText;

  if(text1.length > text2.length){
    longerText = text1.length;
  } else {
    longerText = text2.length;
  }

  for (i = 0; i < longerText; i++) {
    if (text1[i] != text2[i]) {
      diff = diff + 1;
    }
  }

  return diff;
}
