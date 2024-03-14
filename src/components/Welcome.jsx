import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert className="text-center m-0  p-0" variant="warning">
      <Alert.Heading>Benvenuto !</Alert.Heading>
      <p className="mb-1">Ti trovi Nella Libreria più fornita del web!</p>
    </Alert>
  );
};

export default Welcome;
