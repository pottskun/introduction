// ここでは最初の画面に出るカードの要素を取得してきて、クリックされたら透明度をあげて消す、をやっている
// ここは後で説明します
const topic = document.getElementsByClassName("topic")[0];
topic.addEventListener("click", function () {
  topic.classList.add("msg-picup")
  // ここではアニメーションを取得してきてアニメーション終了後にイベントを実行している
  topic.addEventListener("animationend", () => {
    // アニメーション終了後に実行する内容
    let fragment = document.createDocumentFragment();
    // ここではid="sec"というdivの中に新たに要素を作っている
    const modal = document.getElementById("modal");
    // ここにカードに出したいメッセージの配列を作る
    let msgs = ["You", "are", "a", "genius"]
    // fragmentのfor文を追加
    for (let i = 0; i < msgs.length; i++) {
      // 子要素を作成
      const newMsg = document.createElement("p");
      newMsg.classList.add("content")
      newMsg.innerHTML = msgs[i];
      // fragmentに追加
      fragment.appendChild(newMsg);
    }
    // msg-sec.appendChild(fragment);
    // ここがなぜmsg-secではダメなのかは後で理解を深める。
    modal.appendChild(fragment);
    // div.appendChild(fragment(msgs[i]));
  })
})

// クラス名を変えて、配列を作ってそれを出せたらgithubにあげる。
// 変更点はクラス名の変更とfragmentを使った文字の複製と配列を作り違う文字を出したこと。