import useFetch from "./functions/useFetch";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Flex from "@react-css/flex";
//pass in the URL to the useFetch function if successful the data holds the data from the API
function App() {
  const { data, loading, error } = useFetch(
    "https://localhost:7173/api/MoviesAPI"
  );
  if (error) {
    console.log(error);
  }

  //data that we are getting back from the API
  // {
  //   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "title": "string",
  //   "releaseDate": "2023-01-16T00:00:00",
  //   "overview": "string",
  //   "genre": "string",
  //   "price": 0
  // }

  return (
    <Container fluid>
      {loading && <div>Loading...{error}</div>}
      {data && (
        <Flex flexDirection='row' justifyContent='center'>
          {data.map((item) => (
            <Card style={{ width: "28rem", padding: "10px" }}>
              <Card.Body>
                <h2 className='bodytext-Title'> {item.title}</h2>
                <p>Release Date... {item.releaseDate}</p>
                <p>Overview... {item.overview}</p>
                <h4>Genre ... {item.genre}</h4>
              </Card.Body>
            </Card>
          ))}
        </Flex>
      )}
    </Container>
  );
}
export default App;
