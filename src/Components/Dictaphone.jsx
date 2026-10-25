import React from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'

const Dictaphone = ({handleSpeech}) => {
    const {transcript, resetTranscript} = useSpeechRecognition();

    React.useEffect(() => {
        if (transcript) {
            handleSpeech(transcript);
        }
    }, [transcript, handleSpeech]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div>
                <small className="text-muted">Speech recognition not supported in this browser.</small>
            </div>
        );
    }

    return (
        <div>
            <div>
                <button style={{display: "inline-table"}} className="button button-v3 button-sm" type="button" onClick={SpeechRecognition.startListening}>Speak</button>
                <button style={{display: "inline-table"}} className="button button-v3 button-sm" type="button" onClick={()=>{
                    SpeechRecognition.stopListening();
                    resetTranscript();
                    handleSpeech("");
                }}>Reset</button>
            </div>

            {transcript ? <p><i>"{transcript}"</i></p>: ""}
        </div>
    )
}
export default Dictaphone