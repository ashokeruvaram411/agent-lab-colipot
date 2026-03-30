import React, { useState } from "react";

export function PhotoUploader({ onPhoto }: { onPhoto: (dataUrl: string) => void }) {
  const [preview, setPreview] = useState<string | null>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      onPhoto(result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="photo-uploader">
      <input type="file" accept="image/*" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" style={{maxWidth:120,marginTop:8,borderRadius:6}} />}
    </div>
  );
}
