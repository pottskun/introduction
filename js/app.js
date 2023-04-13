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
    // topicを再度出す(topicにクラスをつけてそのクラスに復活するアニメーションをつける)
    // topic.classList.toggle("comeback");
    topic.classList.toggle("msg-picup")
    // slideUpを消す
    modal.remove();
  })
  //   addEventListener("click", function() {
  //   ("modal").classList.toggle("comeback")
  // })
})
})

// 4/14

// toggleでつけたクラス名で要素を「隠す」を実行。つけられていない状態でtopicをfadeoutさせる。



//     let fragment = document.createDocumentFragment();
//     // ここではid="sec"というdivの中に新たに要素を作っている
//     const modal = document.getElementById("modal");
//     // ここにカードに出したいメッセージの配列を作る
//     let msgs = ["You", "are", "a", "genius"]
//     // fragmentのfor文を追加
//     for (let i = 0; i < msgs.length; i++) {
//       // 子要素を作成
//       const newMsg = document.createElement("p");
//       newMsg.classList.add("content")
//       newMsg.innerHTML = msgs[i];
//       // fragmentに追加
//       fragment.appendChild(newMsg);
//     }
//     // msg-sec.appendChild(fragment);
//     // ここがなぜmsg-secではダメなのかは後で理解を深める。
//     modal.appendChild(fragment);
//     // div.appendChild(fragment(msgs[i]));
//   })
// })
