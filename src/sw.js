'use strict';
const l = console.log;


chrome.downloads.onDeterminingFilename.addListener(function(downloadItem, suggest) {
  l('downloads.onDeterminingFilename()', downloadItem);

  const separator = '-';
  const date = new Date();
  const filename = date.getFullYear() + separator + pad2(date.getMonth() + 1) + separator + pad2(date.getDate()) + '/' + downloadItem.filename;
  l(filename);
  suggest({ filename });
});




function pad2(num) {
  return num.toString().padStart(2, '0');
}
