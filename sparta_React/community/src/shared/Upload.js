import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

import {Btn} from "../elements";
import {storage} from "./firebase";

const Upload = (props) => {
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.image.uploading);

  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e.target.files);
    //아래 두개 같음
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0])

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    //파일 내용 읽어오기
    reader.readAsDataURL(file);

    //읽기가 끝나면 발생하는 이벤트 핸들러
    reader.onloadend = () => {
      //파일의 컨텐츠
      console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result))
    }
  }

  const uploadFB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("파일을 선택해주세요!");
      return;
    }

    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  };

  return (
    <React.Fragment>
      <input type="file" ref={fileInput} onChange={selectFile} disabled={uploading}/>
      <Btn _onClick={uploadFB}>업로드하기</Btn>
    </React.Fragment>
  );
}

export default Upload;