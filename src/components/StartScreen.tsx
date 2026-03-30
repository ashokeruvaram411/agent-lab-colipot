interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 gradient-bg">
      <div className="text-center max-w-sm w-full">
        <h1 className="text-4xl font-bold text-white mb-2">Soc Ops</h1>
        <p className="text-lg text-white/70 mb-8">Social Bingo</p>

        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-white mb-3">How to play</h2>
          <ul className="text-left text-white/70 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
