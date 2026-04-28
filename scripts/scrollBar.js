const BAR = document.getElementById('progressBar');
const HEIGHT = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progreesHeight = (window.scrollY / HEIGHT) * 100;
    BAR.style.height = progreesHeight + 'vh';
}
