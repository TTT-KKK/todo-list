var spanText = document.getElementById('ster');
var aaa= spanText.textContent.charAt(0);//★のみ取得

console.log(aaa);

// $(function() {
//   $('p').css('color', 'red');
// });


// console.log(spanText);
// console.log(spanText.textContent);

// var element  = document.getElementById('ster');
// console.log(element.value);


// var subTest = document.getElementById('ster');

// var result = subTest.substr( 0, 1 );
// console.log( result );
// alert(result);


var element = document.getElementById('ster');
console.log(element.value);



// ここでプルダウンの項目全て色変更は可能
  $(function() {
    $('.priority-high').css('color', 'Red');
    $('.priority-medium').css('color', 'yellow');
    $('.priority-low').css('color', 'blue');
  });



window.onload = function () {
  //今日の日時を表示
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var toTwoDigits = function (num, digit) {
    num += ''
    if (num.length < digit) {
      num = '0' + num
    }
    return num
  }

  var yyyy = toTwoDigits(year, 4)
  var mm = toTwoDigits(month, 2)
  var dd = toTwoDigits(day, 2)
  var ymd = yyyy + "-" + mm + "-" + dd;

  document.getElementById("input-today").value = ymd;
  document.getElementById("edit-today").value = ymd;
}



// select要素内に画像を挿入する


/** SELECTモドキ コンストラクタ
* @arg  ImitationId Selectモドキの select id
* @arg  arr 選択肢内容 Array
*/
function ImitationSelect(ImitationId, arr) {
  var _this = this;
  this.table = document.getElementById(ImitationId);
  this.arr = arr;
  this.selectId = 0;  // 選択されている行(プルダウンで選んだ値)
  this.tr1 = this.table.insertRow(-1);  // 1行表示用 tr (createElement & appendChild)
  // プルダウンを予め作っておく(safariでの pulldownClose対策)
  var pullDown = document.createElement('table');
  pullDown.className = 'imitationPulldown';
  this.pullDown = pullDown;
  for (var i = 0; i < this.arr.length; i++) {
    var tr = _this.pullDown.insertRow(-1);
    /*tr.onclick = function(i) { _this.selectPD(i); }*/
    tr.addEventListener('click', { handleEvent: _this.selectPD, obj: _this, idx: i }, false);
    tr.innerHTML = this.td(i);
  }
  pullDown.style.visibility = "hidden";   // 消しておく
  this.table.appendChild(pullDown);
  document.body.addEventListener('click', function(e) { // 画面がクリックされた時
    if (!e.target.closest('#'+ImitationId)) { // ImitationIdで無ければ
      _this.pulldownClose();  // プルダウンを閉じる
    }
  });
}

/* 1行分の表示を得る(trは含まない) */
ImitationSelect.prototype.td = function(idx) {
  if (idx >= this.arr.length) {
    console.log("out of index [" + idx + "]");
    return "";
  }
  return "<td class='imitationImage'><img src='" + this.arr[idx]['img']
    + "'></td><td class='imitationText'>" + this.arr[idx]['txt']
    + "</td>";
}

/* SELECTモドキの表示(選択した行だけを表示) */
ImitationSelect.prototype.disp = function() {
  var _this = this;                     // ImitationSelect オブジェクト
  this.tr1.innerHTML = this.td(this.selectId) + "<td>&ensp;🔽</td>";
  this.tr1.onclick = function() { _this.pulldownOpen(); } // クリックされたとき
}

/* SELECTモドキをクリックしてプルダウンを開く */
ImitationSelect.prototype.pulldownOpen = function() {
  this.tr1.onclick = function() {}    // 1行表示用 tr の onclick を消す
  this.pullDown.style.visibility = "visible"; // プルダウン表示
}

/* プルダウンを閉じる */
ImitationSelect.prototype.pulldownClose = function() {
  this.pullDown.style.visibility = "hidden";
  this.disp();
}

/* プルダウンの中身をクリックした時 */
ImitationSelect.prototype.selectPD = function(e) {
  var imSel = this.obj;     // 元の ImitationSelect オブジェクト
  imSel.selectId = this.idx;  // 選んだ番号
  imSel.pulldownClose();    // プルダウン閉じて元のtr1表示
}

/* 実行部 */
var languages = new Array(
  {txt:'日本語', img:'http://mermaiddays.com/pc/img/jp.png'},
  {txt:'English', img:'http://mermaiddays.com/pc/img/en.png'},
  {txt:'Tailand', img:'http://mermaiddays.com/pc/img/th.png'}
);
// 定義と表示
var sel2 = new ImitationSelect("sel2", languages);
sel2.disp();