let like = [
  "ミルクチョコレート",
  "納豆ご飯",
  "ヤンヤンつけボー",
  "Dr.WARIO",
  "海、波の音",
  "洗い立ての布団",
  "洗濯物の香り",
  "家",
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
  "魚（特に青魚）",
  "お米を研ぐこと",
  "旅行帰り後の日常に戻るまでの時間",
  "虫",
  "虫全般",
  "とにかく虫",
  "強い光",
  "大きな音",
  "人混み",
  "早起き",
  "寒い",
  "選挙カー"]

let hobby = [
  "読書",
  "映画鑑賞",
  "ヨガ"]

let hello = [
  "shinoです",
  "98年3月生まれ",
  "寅年",
  "前職は保育士",
  "2021年7月からWebの勉強開始",
  "今は就活に向けて修行中",
  "自分の性格は感情の起伏が激しい繊細やさん？",
  "あとは心配性だったり、社交的な人見知りだったり",
  "世界で一番好きな場所は岩手県の「吉里吉里」",]

let study = [
  "HTML",
  "CSS",
  "Sass",
  "Pug",
  "JavaScript"]

let want = [
  "付け心地のいい下着",
  "ヨガウェア",
  "洗顔器",
  "テンポドロップ",
  "乾燥機",
  "キーボード",
  "モニターアーム",
  "トラックパッド",
  "マイホーム"]

const topics = document.getElementsByClassName("topic");

// for-of文を使ってtopicを取得した後の流れを書く
for (let topic of topics) {
  topic.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      action(topic);
    }
  })
  topic.addEventListener("click", function () {
    action(topic);
  });
}

function action(topic) {
  for (let otherTopic of topics) {
    // otherTopicという変数を作ってその変数の中にtopicsの配列を入れる
    if (otherTopic !== topic) {
      // otherTopic と topic の値が異なる場合に true を返します。???
      otherTopic.classList.add("msg-picup");
    }
  }
  topic.classList.add("msg-picup");
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
    }
  }, { once: true })
}
// クラス名の変更とかその他やらないといけないことの整理23日
// 時間 8:00-16:00(昼)、16:00-2:00(夜)、2:00-8:00(朝)
// 現在時刻を取得する
// 背景色を変えたい要素を指定する
// 要素に対してクラスを付けたり外したりする

window.addEventListener("load", function () {
  let getH = new Date().getHours();
  // 現在の時間を取得
  // let bgi = document.getElementById(".bgi");
  let bgi = document.querySelector(".bgi");
  // .bgiというクラスを持つ要素を取得*同じidはつけられないのでgerElementはダメ
  if ((getH >= 8) && (getH < 16)) {
    bgi.classList.remove("bgi-night");
    bgi.classList.add("bgi-morning");
    // 夜が消えて朝が来る
  } else if ((getH >= 16) && (getH < 2)) {
    bgi.classList.remove('bgi-morning');
    bgi.classList.add('bgi-noon');
    // 朝が消えて昼が来る
  } else if ((getH >= 2) && (getH < 8)) {
    bgi.classList.remove('bgi-noon');
    bgi.classList.add('bgi-night');
    // 昼が消えて夜が来る
  }
});