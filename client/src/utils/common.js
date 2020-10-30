export function openWindowPage(myURL, title, myWidth, myHeight) {
  var left = (window.screen.width - myWidth) / 2;
  var top = (window.screen.height - myHeight) / 4;
  var myWindow = window.open(
    myURL,
    title,
    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
      myWidth +
      ', height=' +
      myHeight +
      ', top=' +
      top +
      ', left=' +
      left,
  );
}

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};
