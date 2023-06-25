import { useState } from 'react';
import { Alert } from 'antd';
import HeaderComponent from './components/header/header';
import FooterComponent from './components/footer/footer';
import ContentComponent from './components/content/content';
import axios from 'axios';
import './App.css';


function App() {
  const [successAlert, setSuccessAlert] = useState({
    status: false,
    msg: ''
  });
  const [failureAlert, setFailureAlert] = useState({
    status: false,
    error: ''
  });


  const publishMessage = (data) => {
    console.log('in publish message')
    const url = process.env.REACT_APP_BASE_URL;
    axios.post(`${url}/publishMessage`, {
      msg: data
    })
      .then(function (response) {
        console.log(response);
        if(response.status === 200){
          setSuccessAlert({
            status: true,
            msg: response.data?.result?.MessageId
          });
        }else{
          setFailureAlert({
            status: true,
            error: response.data?.error
          });
          console.log(error);
        }   
      })
      .catch(function (error) {
        setFailureAlert({
          status: true,
          error: error.error
        });
        console.log(error);
      });
  }

  const onSuccessClose = () => {
    setSuccessAlert({
      status: false,
      msg: ''
    });
  }

  const onFailureClose = () => {
    setFailureAlert({
      status: false,
      error: ''
    });
  }

  return (
    <>
      <HeaderComponent />
      {successAlert.status ?
        <Alert
          message={`Message Published Successfully with messageId ${successAlert.msg}`}
          type="success"
          closable
          onClose={onSuccessClose}
        />
        : null}
      {failureAlert.status ?
        <Alert
          message={`Failed to send Message with error ${failureAlert.error}`}
          type="error"
          closable
          onClose={onFailureClose}
        />
        : null}
      <ContentComponent publishMessage={publishMessage} />
      <FooterComponent />
    </>
  );
}

export default App;
