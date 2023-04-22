let like = [
  "ミルクチョコレート",
  "納豆ご飯",
  "海、波の音",
  "洗い立ての布団",
  "洗濯物の香り",
  "家に入ってくる風",
  "網戸にできる季節",
  "蚊取り線香",
  "お土産",
  "夏の匂い",
  "朝方に聞こえる虫や鳥の鳴き声",
  "長靴",
  "いちご飴",
  "ネイル",
  "田舎"]

let dislike = [
  "コーヒー",
  "お米を研ぐこと",
  "旅行帰り後の日常に戻るまでの時間",
  "虫",
  "虫全般",
  "とにかく虫",
  "強い光",
  "大きな音",
  "人混み",
  "選挙カー"]

let hobby = [
  "読書",
  "映画鑑賞",
  "ヨガ"]

let hello = [
  "はじめましてshinoです",
  "98年3月生まれ",
  "寅年です。",
  "2021年7月からWebの勉強を始めました",
  "今は就活に向けて修行中",
  "前職は保育士",
  "自分の性格は感情の起伏が激しい繊細やさんだと思っています。",
  "あとは心配性だったり、社交的な人見知りだったり",
  "世界で一番好きな場所は岩手県の「吉里吉里」",]

let study = [
  "最近はJavaScriptを勉強しています",
  "制作の幅が広がって楽しい",
  ""]

let want = [
  "付け心地のいい下着",
  "ヨガウェア",
  "キーボード",
  "トラックパッド"]

const topics = document.getElementsByClassName("topic");
// for-of文を使ってtopicを取得した後の流れを書く
for (let topic of topics) {
  topic.addEventListener("click", function () {
    for (let otherTopic of topics) {
      // otherTopicという変数を作ってその変数の中にtopicsの配列を入れる
      if (otherTopic !== topic) {
        // otherTopic と topic の値が異なる場合に true を返します。???
        otherTopic.classList.add("msg-picup");
      }
    }
    topic.classList.add("msg-picup");
    // });
    // }


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
          for (let removeTopic of topics) {
            removeTopic.classList.remove("msg-picup")
          }
          // slideUpを消している
          modal.remove();
        })
      })

      // 一つのカードに関することに対して出てくるメッセージを配列で管理する
      // hogeという変数の中にslideUp(クラス)をとってきている
      const hoge = document.getElementsByClassName("slideUp")[0];
      let content = [];
      if (topic === topics[0]) {
        content = like
      } else if (topic === topics[1]) {
        content = dislike;
      } else if (topic === topics[2]) {
        content = hobby;
      } else if (topic === topics[3]) {
        content = hello;
      } else if (topic === topics[4]) {
        content = study;
      } else if (topic === topics[5]) {
        content = want;
      }
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper")
      modal.appendChild(wrapper);
      for (let i = 0; i < content.length; i++) {
        const newMsg = document.createElement("p");
        newMsg.classList.add("content")
        newMsg.innerHTML = content[i];
        wrapper.appendChild(newMsg);
        // モーダルの子要素として追加
      }
    },{once: true})
  });
}

// クラス名の変更とかその他やらないといけないことの整理23日
// closeBtnが固定されない件について解決
// 時間によって背景画像を変える22日
// close押さないと消えないのうざいな23,24,25日