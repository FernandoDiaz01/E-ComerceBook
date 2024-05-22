import React from 'react';
import { Link } from 'react-router-dom';
import './booklist.css';

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

export const BookList = () => {
  return (
    <div className="book-list-container">
      <div className="title-container-books">
        <h2 className="title-books">Lista de Libros</h2>
      </div>
      <div className="book-cards">
        {bookInfo.map((book, index) => (
          <Link to={`/detail/${encodeURIComponent(book.titulo)}`} key={index} className="book-card">
            <div className="images-books-container">
              <img className="img-books" src="#" alt={book.titulo} />
            </div>
            <div className="container-name-books">
              <h3 className="book-name">{book.titulo}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
