
document.addEventListener('DOMContentLoaded', function() {
    // Display the wheel of fortune modal on load
    document.getElementById('wheelOfFortune').style.display = 'block';

    var canvas = document.getElementById('wheelCanvas');
    var ctx = canvas.getContext('2d');
    var angle = 0;
    var sectors = ['10% OFF', '15% OFF', '20% OFF', '25% OFF', 'TRY AGAIN', '50% OFF', '30% OFF', 'LUCKY NEXT TIME'];
    var colors = ['#FF6666', '#FFA07A', '#DB7093', '#FF4500', '#FFD700', '#FF6347', '#FF8C00', '#FFDAB9'];

    function drawWheel() {
        var startAngle = 0;
        var arc = 2 * Math.PI / sectors.length;
        for (var i = 0; i < sectors.length; i++) {
            ctx.beginPath();
            ctx.arc(150, 150, 150, startAngle, startAngle + arc, false);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#FFF';
            ctx.fillStyle = colors[i];
            ctx.fill();
            ctx.stroke();

            ctx.save();
            ctx.translate(150, 150);
            ctx.rotate(startAngle + arc / 2);
            ctx.fillStyle = 'black';
            ctx.fillText(sectors[i], 130, 0);
            ctx.restore();

            startAngle += arc;
        }
    }

    function spin() {
        var spinAngleStart = Math.random() * 10 + 10;
        var frames = 200;
        function rotateWheel() {
            angle += spinAngleStart;
            spinAngleStart = spinAngleStart * 0.95; // Decremental angular speed
            drawWheel();
            ctx.save();
            ctx.translate(150, 150);
            ctx.rotate(angle / 180 * Math.PI);
            ctx.restore();
            if (frames > 0) {
                frames--;
                requestAnimationFrame(rotateWheel);
            }
        }
        rotateWheel();
    }

    ctx.font = 'bold 14px Helvetica, Arial';
    drawWheel();
    document.getElementById('spinButton').addEventListener('click', spin);
});
