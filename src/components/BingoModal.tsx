interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="modal-glass">
        <div className="text-5xl mb-4"></div>
        <h2 className="text-3xl font-bold text-amber-500 mb-2">BINGO!</h2>
        <p className="text-gray-600 mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full glass-cta py-3"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
