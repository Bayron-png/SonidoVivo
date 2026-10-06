const ImagenCategoria = ({ src, alt }) => (
  <img src={src} alt={alt} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} />
);
export default ImagenCategoria;