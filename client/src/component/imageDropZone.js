import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import _ from "lodash";

function ImageDropZone(props) {
    console.log("ImageDropZone ~ props", props)
    const [files, setFiles] = useState(props.imageData);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length === 1) {
                console.log("acceptedFiles", acceptedFiles);
                const reader = new FileReader();
                reader.readAsDataURL(acceptedFiles[0]);
                reader.onload = (event) => {
                    setFiles(
                        acceptedFiles.map((file) =>
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                                base64: event.target.result,
                            })
                        )
                    );
                };
            }
        },
    });

    useEffect(() => {
        setFiles(props.imageData);
    }, [props.imageData]);

    const baseStyle = {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        borderWidth: 2,
        borderRadius: 2,
        color: "#606060",
        borderColor: "#A9A9A9",
        borderStyle: "dashed",
        backgroundColor: "#fff",
        outline: "none",
        transition: "border .24s ease-in-out",
        height: props.height,
        width: props.width,
        // marginTop: "15px",
        cursor: "pointer",
    };

    const thumbs = files.map((file) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        // files.forEach((file) => URL.revokeObjectURL(file.preview));
        console.log("files", files);
        let data = files[0];
        if (files && files.length && !_.isEmpty(data)) {
            props.syncImageDataCallback(files);
        }
    }, [files]);

    const removeImage = (event) => {
        event.stopPropagation();
        setFiles([]);
    };

    return (
        <section>
            <div {...getRootProps({ style: baseStyle })}>
                <input {...getInputProps()} />
                {files && files.length && !_.isEmpty(files[0]) ? (
                    <aside style={thumbsContainer}>
                        {thumbs}
                        <div
                            style={{
                                position: "absolute",
                                paddingTop: "135px",
                                color: "#95c94f",
                            }}
                        >
                            <span
                                title={"remove image file"}
                                onClick={(event) => removeImage(event)}
                            >
                                Remove
                            </span>
                        </div>
                    </aside>
                ) : (
                        <p style={{ textAlign: "center" }}>{props.placeHolderText}</p>
                    )}
            </div>
        </section>
    );
}

export default ImageDropZone;

const thumbsContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    width: 120,
    height: 120,
    padding: 4,
    marginTop: "-10px",
    //   boxSizing: "border-box",
};

const thumbInner = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 0,
    overflow: "hidden",
};

const img = {
    display: "block",
    width: "100%",
    height: "100%",
};
