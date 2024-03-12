import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert className="text-center m-0" variant="danger">
      <Alert.Heading>Benvenuto !</Alert.Heading>
      <p>Benvenuto Nella Librearia più terrificante del web!</p>
      <hr />
      <p className="mb-0">Dai un'occhiata alla nostra selezione Horror</p>
    </Alert>
  );
};

export default Welcome;
