import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import { Table } from "react-bootstrap";
import { PhotoType } from "../types.d";

export default function PaginatePhoto() {
  const [state, setState] = useState({
    data: [],
    limit: 10,
    activePage: 1
  });

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${state.limit}`
      )
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  }, [state.limit]);
  const handlePageChange = (pageNumber: number) => {
    setState((prev) => ({ ...prev, activePage: pageNumber }));

    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}`)
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h2 className="mt-5 px-4">Photos Pagination</h2>
        <Table striped bordered hover className="shadow-lg text-center">
          <thead>
            <tr>
              <th>AlbumId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Url</th>
              <th>ThumbnailURL</th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((item: PhotoType) => {
              return (
                <tr key={item.id}>
                  <td>{item.albumId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.thumbnailUrl}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      <Pagination className="px-4">
        {state.data.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === state.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}