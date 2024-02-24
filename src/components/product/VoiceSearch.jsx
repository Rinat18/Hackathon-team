import React, { useState } from "react";

const VoiceSearch = ({ onSearch }) => {
  const [listening, setListening] = useState(false);

  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      onSearch(result);
      setListening(false);
    };

    recognition.start();
  };

  return (
    <button onClick={handleVoiceSearch} disabled={listening}>
      {listening ? "Listening..." : "Start Voice Search"}
    </button>
  );
};

export default VoiceSearch;
