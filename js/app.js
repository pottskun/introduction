const topic = document.getElementsByClassName("topic")[0];
topic.addEventListener("click", function () {
  topic.classList.add("msg-picup")
})

// ここではアニメーションを取得してきてアニメーション終了後にイベントを実行している
topic.addEventListener("animationend", () => {
  // アニメーション終了後に実行する内容(下からwindowがでてくる)
  const modal = document.createElement("div");
  modal.className = "slideUp"
  document.getElementById("modal").appendChild(modal);
  const closeBtn = document.createElement("button");
  closeBtn.className = "js-closeBtn"
  document.getElementsByClassName("slideUp")[0].appendChild(closeBtn);
  closeBtn.innerHTML = ("close");
  // closeボタンが押されたらモーダルがスライドダウンする
  closeBtn.addEventListener("click", function () {
    // closeBtnが押された時の処理を書くmodalにクラスを付与して、そのクラスが付いたらスライドダウンするようにする
    modal.classList.add("slideDown")
    // 9行目で行っているのと同じように、slideDownのアニメーションが終わったら、
    modal.addEventListener("animationend", () => {
      topic.classList.toggle("msg-picup")
      // slideUpを消している
      modal.remove();
    })
  })
  // 一つのカードに関することに対して出てくるメッセージを配列で管理する
  // hogeという変数の中にslideUp(クラス)をとってきている
  const hoge = document.getElementsByClassName("slideUp")[0];
  // ここにカードに出したいメッセージの配列を作る
  let msgs = [
    "ミルクチョコレート",
    "納豆ご飯",
    "海、波の音",
    "洗い立ての布団",
    "お土産",
    "夏の匂い",
    "朝方に聞こえる虫や鳥の鳴き声",
    "長靴",
    "いちご飴",
    "ネイル"]
  // fragmentのfor文を追加、msgsの数だけ繰り返す
  for (let i = 0; i < msgs.length; i++) {
    // newMsgを作り、中にp要素を作る
    const newMsg = document.createElement("p");
    // そのp要素をクラス名"content"にする
    newMsg.classList.add("content")
    // 1番から順に表示していく
    newMsg.innerHTML = msgs[i];
    modal.appendChild(newMsg);

  }
})

// スクロールバー無くしたいかも


