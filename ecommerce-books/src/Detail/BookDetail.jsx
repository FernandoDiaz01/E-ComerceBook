import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './bookdetail.css';

const bookInfo = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    publicacion: 1967,
    genero: "Realismo mágico",
    sinopsis: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo."
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    publicacion: 1949,
    genero: "Distopía",
    sinopsis: "Una novela que presenta una sociedad totalitaria controlada por un régimen autoritario y su líder, el Gran Hermano."
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    publicacion: 1605,
    genero: "Novela de caballería",
    sinopsis: "Las aventuras y desventuras de un hidalgo manchego que, influenciado por los libros de caballería, decide convertirse en caballero andante."
  },
  {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    publicacion: 1925,
    genero: "Novela",
    sinopsis: "La historia de Jay Gatsby y su obsesión con la bella Daisy Buchanan, explorando temas de decadencia, idealismo y resistencia al cambio."
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    publicacion: 1813,
    genero: "Novela romántica",
    sinopsis: "Las dificultades de Elizabeth Bennet para encontrar el amor y la felicidad mientras enfrenta las rígidas normas sociales de su época."
  }
];

export const BookDetail = () => {
  const { titulo } = useParams();
  const navigate = useNavigate();
  const selectedBook = bookInfo.find(b => b.titulo === decodeURIComponent(titulo));

  if (!selectedBook) return <div>No se ha seleccionado ningún libro</div>;

  return (
    <div className="container-detail">
      <div className="title-button-detail-container">
        <div className="container-button-detail">
          <button className="btn" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
        <div className="container-title-detail">
          <h1 className="title-detail">Detalles del Libro</h1>
        </div>
      </div>
      <div className="container-book-detail">
        <div className="card-container-detail">
          <div className="img-container-detail">
            <img src="#" alt={selectedBook.titulo} />
          </div>
          <div className="book-detail-info">
            <ul className="container-list-detail">
              <li className="info-detail">
                <strong>Nombre: </strong>{selectedBook.titulo}
              </li>
              <li className="info-detail">
                <strong>Autor: </strong>{selectedBook.autor}
              </li>
              <li className="info-detail">
                <strong>Publicación: </strong>{selectedBook.publicacion}
              </li>
              <li className="info-detail">
                <strong>Género: </strong>{selectedBook.genero}
              </li>
              <li className="info-detail">
                <strong>Sinopsis: </strong>{selectedBook.sinopsis}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
