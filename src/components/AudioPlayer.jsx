import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ isPlaying, onToggle }) {
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      startAmbientSound();
    } else {
      stopAmbientSound();
    }

    return () => stopAmbientSound();
  }, [isPlaying]);

  const startAmbientSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      // Gentle ambient lofi chord generator
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!ctx || ctx.state === 'closed') return;
        const currentChord = chords[chordIndex];
        chordIndex = (chordIndex + 1) % chords.length;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          oscGain.gain.setValueAtTime(0.001, ctx.currentTime);
          oscGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.8);
          oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8);

          osc.connect(oscGain);
          oscGain.connect(gainNode);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 4.0);
        });
      };

      playChord();
      intervalRef.current = setInterval(playChord, 4000);
    } catch (e) {
      console.warn("Audio synthesis error:", e);
    }
  };

  const stopAmbientSound = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center justify-center size-9 h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted outline-none ${
        isPlaying ? 'text-green-400 bg-muted/60' : 'text-muted-foreground'
      }`}
      title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      aria-label="Toggle Audio"
    >
      {isPlaying ? (
        <Volume2 className="h-[18px] w-[18px] animate-pulse" />
      ) : (
        <Music className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
