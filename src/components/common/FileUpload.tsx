import styled from "styled-components";
import fileClipIcon from "../../assets/images/common/clip.svg";
import { useState, useRef } from "react";

// 일반 파일 업로드
const FileUpload = () => {
  const [file, setFile] = useState<any>("");
  const fileRef = useRef<any>(null);

  const saveFile = () => {
    if (fileRef.current?.files[0]) {
      const file = fileRef.current?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        console.log(e.target);
        setFile((prev: any) => [...prev, e.target?.result as string]);
      };
    }
  };

  return (
    <>
      <FileLabel htmlFor="fileUpload" className="file-upload-label">
        <FileUploadBox>
          {/* <FileNameInput
        
            placeholder="파일을 업로드해 주세요."
            readOnly
            value=
          /> */}
          <FileNameInput>
            {file ? "사업자등록증.jpg" : "파일을 업로드해 주세요."}
          </FileNameInput>
          <UploadClipImg src={fileClipIcon} alt="파일 업로드" />
        </FileUploadBox>
      </FileLabel>
      <InputFile
        type="file"
        id="fileUpload"
        accept="/*"
        className="input-file"
        onChange={() => {
          saveFile();
        }}
        ref={fileRef}
      />
    </>
  );
};

export default FileUpload;

const FileLabel = styled.label`
  width: 100%;
`;

const FileUploadBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.6rem 1.2rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray-scale-050);
  cursor: pointer;
`;

const FileNameInput = styled.div`
  width: calc(100% - 4rem);
  overflow-y: hidden;
  cursor: pointer;
  color: var(--gray-scale-400);
  font-family: Pretendard, serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 142.857% */
  letter-spacing: -0.056rem;
`;

const UploadClipImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const InputFile = styled.input`
  display: none;
`;
