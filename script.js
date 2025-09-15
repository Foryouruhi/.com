// Create multiple floating hearts
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('div');
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  heart.style.animation = "float 6s linear infinite";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 500);
