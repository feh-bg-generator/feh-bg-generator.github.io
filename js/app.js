var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d'),
    bg = new Image(),
    s1 = new Image(),
    s2 = new Image(),
    logo = new Image();

var app = new Vue({
    el: '#app',
    data: {
        ratio: 1600 / 1920,
        pWidth: 1500,
        aWidth: 800,
        pPosX: -450,
        pPosY: 0,
        aPosX: 0,
        aPosY: 0,
        logoPosX: 380,
        logoPosY: 1150,
        heroes: HEROES,
        hero: 'Abel',
        disabled: false
    },
    methods: {
        render() {
            this.disabled = true;
            this.hero = this.hero.replace(/\s/g, '_');
            render(`img/heroes/Full_Portrait_${this.hero}.png`, `img/heroes/Full_Attack_${this.hero}.png`, this.pPosX, this.pPosY, this.aPosX, this.aPosY, this.logoPosX, this.logoPosY, this.pWidth, Math.round(this.pWidth / this.ratio), this.aWidth,  Math.round(this.aWidth / this.ratio));
        },
        download(link) {
            link.href = canvas.toDataURL('image/jpeg', 1.0);
            link.download = `${this.hero}.jpg`;
        }
    },
    mounted: function() {
        this.disabled = true;
        render(`img/heroes/Full_Portrait_${this.hero}.png`, `img/heroes/Full_Attack_${this.hero}.png`, this.pPosX, this.pPosY, this.aPosX, this.aPosY, this.logoPosX, this.logoPosY, this.pWidth, Math.round(this.pWidth / this.ratio), this.aWidth,  Math.round(this.aWidth / this.ratio));
    }
})

function render(portrait, attack, pPosX, pPosY, aPosX, aPosY, logoPosX, logoPosY, pWidth, pHeight, aWidth, aHeight) {
    bg.onload = () => {
        ctx.drawImage(bg, 0, 0);
        s1.onload = () => {
            ctx.drawImage(s1, 0, 0, 1600, 1920, aPosX, aPosY, aWidth, aHeight);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(0, 0, 720, 1280);
            s2.onload = () => {
                ctx.drawImage(s2, 0, 0, 1600, 1920, pPosX, pPosY, pWidth, pHeight);
                logo.onload = () => {
                    ctx.drawImage(logo, logoPosX, logoPosY);
                    app.disabled = false;
                }
                logo.src = 'img/logo.png';
            }
            s2.src = portrait;
        }
        s1.src = attack;
    }
    bg.src = 'img/bg.jpg';
}