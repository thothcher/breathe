 const bubble = document.getElementById('bubble');
        const timerEl = document.getElementById('timer');
        const phaseEl = document.getElementById('phase');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');

        const phases = [
            { name: 'Inhale', duration: 4, action: 'grow' },
            { name: 'Hold', duration: 7, action: 'hold' },
            { name: 'Exhale', duration: 8, action: 'shrink' }
        ];

        let interval;
        let phaseIndex = 0;
        let seconds = 0;

        function startBreathing() {
            phaseIndex = 0;
            seconds = phases[phaseIndex].duration;
            updatePhase();
            clearInterval(interval);
            interval = setInterval(step, 1000);
        }

        function stopBreathing() {
            clearInterval(interval);
            phaseEl.textContent = 'Stopped';
            timerEl.textContent = '0';
            bubble.style.width = '100px';
            bubble.style.height = '100px';
        }

        function step() {
            seconds--;
            if (seconds < 0) {
                phaseIndex = (phaseIndex + 1) % phases.length;
                seconds = phases[phaseIndex].duration;
                updatePhase();
            }
            timerEl.textContent = seconds;
        }

        function updatePhase() {
            const current = phases[phaseIndex];
            phaseEl.textContent = current.name;
            if (current.action === 'grow') {
                bubble.style.transition = `width ${current.duration}s linear, height ${current.duration}s linear`;
                bubble.style.width = '200px';
                bubble.style.height = '200px';
            } else if (current.action === 'hold') {
                bubble.style.transition = 'none';
            } else if (current.action === 'shrink') {
                bubble.style.transition = `width ${current.duration}s linear, height ${current.duration}s linear`;
                bubble.style.width = '100px';
                bubble.style.height = '100px';
            }
        }

        startBtn.addEventListener('click', startBreathing);
        stopBtn.addEventListener('click', stopBreathing);
   