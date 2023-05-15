import React, {useState} from "react";
import {
  WrapperForm,
  TittleForm,
  ContentForm,
  InputForm,
  WrapperInputForm,
  InputFormImg
} from "../style/StepsGlobal.style";
import ButtonStepper from "../../buttonStepper/ButtonStepper";
import { useNavigate } from "react-router-dom";
import { validationPrice } from "../../../const/validations"
function Uploadimg({ data }) {

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageUpload = (event) => {
    let selectedFile = event.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

    if (selectedFile && ALLOWED_TYPES.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreviewUrl(null);
      setError("Por favor selecciona un archivo tipo img (png or jpg)");
    }
  };

  return (
    <WrapperForm>
      <TittleForm>
        {data.code} de 10 : {data.name}
      </TittleForm>
      <ContentForm>{data.descripcion}</ContentForm>
      <WrapperInputForm>
        <InputFormImg backgroundimg={previewUrl} type="file" onChange={handleImageUpload}/>
        {error && <div>{error}</div>}
      {file && <div>{file.name}</div>}
      {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      </WrapperInputForm>
      <ButtonStepper active={error} next={data.next} />
    </WrapperForm>
  );
}

export default Uploadimg;
