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
        heroes: HEROES.sort(),
        heroP: 'Abel_The_Panther',
        heroA: 'Abel_The_Panther',
        disabled: false,
        bgImage: 0,
        op: 0.4,
        bgList: ["Default", "Flowers", "Snow", "Halloween", "Forest"]
    },
    methods: {
        render() {
            this.disabled = true;
            this.heroP = this.heroP.replace(/\s/g, '_').replace(/\:/g, '');
            this.heroA = this.heroA.replace(/\s/g, '_').replace(/\:/g, '');
            render(`img/img/P_${this.heroP}.png`, `img/img/A_${this.heroA}.png`, this.pPosX, this.pPosY, this.aPosX, this.aPosY, this.logoPosX, this.logoPosY, this.pWidth, Math.round(this.pWidth / this.ratio), this.aWidth,  Math.round(this.aWidth / this.ratio), this.bgImage, this.op);
        },
        download(link) {
            link.href = canvas.toDataURL('image/jpeg', 1.0);
            if (this.heroP == this.heroA) {
                link.download = `${this.heroP}.jpg`;
            } else {
                link.download = `${this.heroP}_${this.heroA}.jpg`;
            }
        }
    },
    mounted: function() {
        canvas.width = 720;
        canvas.height = 1280;
        this.disabled = true;
        render(`img/img/P_${this.heroP}.png`, `img/img/A_${this.heroA}.png`, this.pPosX, this.pPosY, this.aPosX, this.aPosY, this.logoPosX, this.logoPosY, this.pWidth, Math.round(this.pWidth / this.ratio), this.aWidth,  Math.round(this.aWidth / this.ratio), this.bgImage, this.op);
    }
});

function render(portrait, attack, pPosX, pPosY, aPosX, aPosY, logoPosX, logoPosY, pWidth, pHeight, aWidth, aHeight, bgImage, op) {
    bg.onload = () => {
        ctx.drawImage(bg, 0, 0);
        s1.onload = () => {
            ctx.drawImage(s1, 0, 0, 1600, 1920, aPosX, aPosY, aWidth, aHeight);
            ctx.fillStyle = `rgba(0, 0, 0, ${op})`;
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
    bg.src = `img/bg${bgImage}.jpg`;
}
