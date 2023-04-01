const p = document.getElementById('msg');
p.addEventListener('click', function () {
  p.classList.add('msg-picup')
})

const div = document.getElementById('sec');
const newMsg = document.createElement('p');
newMsg.classList.add('msg-sec');
// secの子どもがmsg-sec
newMsg.innerHTML= "hello";
div.appendChild(newMsg);

// ここからした全て複製・・・・・・・・・・・・・・・
newMsg.classList.add('msg-sec');
newMsg.innerHTML= "hello";
div.appendChild(newMsg);

newMsg.classList.add('msg-sec');
newMsg.innerHTML= "hello";
div.appendChild(newMsg);

newMsg.classList.add('msg-sec');
newMsg.innerHTML= "hello";
div.appendChild(newMsg);

newMsg.classList.add('msg-sec');
newMsg.innerHTML= "hello";
div.appendChild(newMsg);

// 複製しても出ない・・・



// ここは繰り返し使うが一旦べべべべべ