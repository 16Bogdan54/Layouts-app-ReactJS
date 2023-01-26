import React, {LegacyRef, useRef} from 'react';

function Uploader() {

    const inputRef = useRef<HTMLInputElement>(null)
    const reader = new FileReader();

    const handleChange = () => {
        const file:File = inputRef.current.files[0]

        reader.addEventListener('load', () => {
            const text = reader.result
            console.log(text)
        })

        reader.readAsText(file)
    }

    return (
        <div>
            <input ref={inputRef} onChange={handleChange} type="file"/>
        </div>
    );
}

export default Uploader;