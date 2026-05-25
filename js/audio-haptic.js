/* ============================================
   AudioHaptic - Synthetic Audio & Native Haptics
   ============================================ */

const AudioHaptic = (() => {
  let isMuted = false;
  let audioCtx = null;

  function initCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type, duration, slideToFreq) {
    if (isMuted) return;
    initCtx();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      if (slideToFreq) {
        osc.frequency.exponentialRampToValueAtTime(slideToFreq, audioCtx.currentTime + duration);
      }

      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed:', e);
    }
  }

  function vibrate(pattern) {
    if (isMuted) return;
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) { /* ignore security block */ }
    }
  }

  function updateMuteButtonUI() {
    const iconOn = document.getElementById('mute-icon-on');
    const iconOff = document.getElementById('mute-icon-off');
    if (!iconOn || !iconOff) return;

    if (isMuted) {
      iconOn.classList.add('hidden');
      iconOff.classList.remove('hidden');
    } else {
      iconOn.classList.remove('hidden');
      iconOff.classList.add('hidden');
    }
  }

  return {
    init() {
      isMuted = localStorage.getItem('heyword_muted') === '1';
      updateMuteButtonUI();

      // Gracefully unlock Web Audio context on any user interaction
      const events = ['pointerdown', 'touchstart', 'click'];
      const unlock = () => {
        initCtx();
        events.forEach(e => document.removeEventListener(e, unlock));
      };
      events.forEach(e => document.addEventListener(e, unlock, { passive: true }));

      // Setup click listener for the header mute button
      const btnMute = document.getElementById('btn-mute');
      if (btnMute) {
        btnMute.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleMute();
        });
      }
    },

    toggleMute() {
      isMuted = !isMuted;
      localStorage.setItem('heyword_muted', isMuted ? '1' : '0');
      updateMuteButtonUI();
      if (!isMuted) {
        this.playClick();
      }
      return isMuted;
    },

    getMuted() {
      return isMuted;
    },

    // Escalating major pentatonic scales on connection
    // index is the current connected letters length - 1
    playConnect(index) {
      vibrate(10);
      const pentatonic = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
      const freq = pentatonic[Math.min(index, pentatonic.length - 1)];
      playTone(freq, 'triangle', 0.12);
    },

    // Triad cheerful arpeggio
    playSuccess() {
      vibrate([30, 30, 30]);
      playTone(523.25, 'sine', 0.08); // C5
      setTimeout(() => playTone(659.25, 'sine', 0.08), 60); // E5
      setTimeout(() => playTone(783.99, 'sine', 0.08), 120); // G5
      setTimeout(() => playTone(1046.50, 'sine', 0.22), 180); // C6
    },

    // Retro spring/bouncy coin sound
    playExtraSuccess() {
      vibrate(35);
      playTone(659.25, 'sine', 0.06); // E5
      setTimeout(() => {
        playTone(987.77, 'sine', 0.18); // B5
      }, 50);
    },

    // Low buzz slide
    playError() {
      vibrate(120);
      playTone(180, 'sawtooth', 0.22, 70);
    },

    // Fanfare cascading sound
    playLevelCleared() {
      vibrate([60, 40, 60, 40, 100]);
      const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      fanfare.forEach((note, i) => {
        setTimeout(() => {
          playTone(note, 'sine', 0.22);
        }, i * 90);
      });
    },

    // Snappy physical button click
    playClick() {
      vibrate(12);
      playTone(850, 'sine', 0.05, 420);
    }
  };
})();
