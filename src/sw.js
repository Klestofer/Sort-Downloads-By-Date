'use strict';
const l = console.log.bind(console);


chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
  l('downloads.onDeterminingFilename()', downloadItem);

  const separator = '-';
  const date = new Date();
  let filename = date.getFullYear() + separator + pad2(date.getMonth() + 1) + separator + pad2(date.getDate()) + '/' + downloadItem.filename;
  l(filename);
  suggest({ filename });
});




function pad2(num) {
  let str = num.toString();
  if (num < 10) {
    str = '0' + str;
  }
  return str;
}
