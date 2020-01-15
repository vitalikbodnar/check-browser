function getBrowserId () {

  var aKeys = ["MSIE", "Trident", "Edge", "Firefox", "Safari", "Chrome", "Opera"],
      sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

  return nIdx;

}

const checkbrowser = () => {
  console.log('hello');
  const body = $('body');
  const classes = ['ie', 'ie', 'edge', 'firefox', 'safari', 'chrome', 'opera'];
  const index = getBrowserId();
  body.addClass(classes[index]);
};

export default checkbrowser;


