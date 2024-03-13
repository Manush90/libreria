import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert className="text-center m-0" variant="danger">
      <Alert.Heading>Benvenuto !</Alert.Heading>
      <p>Benvenuto Nella Librearia più terrificante del web!</p>
    </Alert>
  );
};

export default Welcome;
