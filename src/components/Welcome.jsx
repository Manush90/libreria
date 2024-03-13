import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert className="text-center m-0" variant="success">
      <Alert.Heading>Benvenuto !</Alert.Heading>
      <p>Benvenuto Nella Librearia più fornita del web!</p>
    </Alert>
  );
};

export default Welcome;
