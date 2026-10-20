import { Link } from "react-router-dom";

function ContenidoNosotros() {
  return (
    <article className="nosotros-contenido">

      <header className="nosotros-introduccion text-center mb-5">
        <h2 className="fw-bold mb-3">
          Conoce Sonido Vivo
        </h2>

        <p className="nosotros-destacado fs-4 fw-semibold">
          11 años acompañando la pasión por la música.
        </p>

        <p className="lead">
          Sonido Vivo es una tienda especializada en instrumentos
          musicales, equipos de sonido y accesorios para músicos,
          ubicada en Viña del Mar, Región de Valparaíso.
        </p>

        <p>
          Con 11 años de trayectoria, nuestra tienda se ha dedicado
          a ofrecer una amplia variedad de productos para quienes
          disfrutan de la música. Somos un equipo cercano, formado
          por el dueño y dos vendedores, que trabaja día a día
          para atender las necesidades de nuestros clientes.
        </p>
      </header>

      <section className="nosotros-seccion mb-5" aria-labelledby="nuestros-productos">
        <h3 id="nuestros-productos">Nuestros productos</h3>

        <p>
          En Sonido Vivo contamos con un amplio catálogo de
          <strong> 340 referencias de productos</strong>,
          que incluye instrumentos musicales, equipos de sonido
          y accesorios para diferentes necesidades.
        </p>

        <p>Entre nuestras principales categorías encontrarás:</p>

        <ul>
          <li><strong>Instrumentos de cuerda:</strong> guitarras y bajos.</li>
          <li><strong>Percusión:</strong> baterías.</li>
          <li><strong>Instrumentos de teclado:</strong> teclados musicales.</li>
          <li><strong>Amplificación y sonido:</strong> amplificadores y micrófonos.</li>
          <li><strong>Efectos musicales:</strong> pedales de efectos.</li>
          <li><strong>Accesorios musicales:</strong> complementos para músicos e instrumentos.</li>
        </ul>

        <p>
          Buscamos que nuestros clientes puedan explorar distintas
          alternativas y encontrar los productos que necesitan
          para sus actividades musicales.
        </p>

        <Link to="/catalogo" className="nosotros-boton">
          Explorar catálogo
        </Link>
      </section>

      <section className="nosotros-seccion mb-5" aria-labelledby="evolucion-digital">
        <h3 id="evolucion-digital">Nuestra evolución digital</h3>

        <p>
          Durante nuestros primeros años, la atención y las ventas
          de Sonido Vivo se han desarrollado principalmente de
          manera presencial en nuestra tienda de Viña del Mar.
        </p>

        <p>
          Sin embargo, durante los últimos tres años hemos comenzado
          a recibir pedidos y consultas desde otras ciudades a través
          de WhatsApp e Instagram.
        </p>

        <p>
          Este crecimiento ha generado nuevos desafíos para nuestro
          equipo, especialmente al momento de gestionar consultas,
          compartir información de productos y atender solicitudes
          mediante diferentes canales.
        </p>

        <p>
          Por esta razón, estamos desarrollando una
          <strong> plataforma digital que permita consultar nuestro
          catálogo de productos de manera más sencilla y organizada</strong>,
          facilitando el acceso a la información de nuestra tienda.
        </p>
      </section>

      <section className="nosotros-seccion mb-5" aria-labelledby="nuestro-objetivo">
        <h3 id="nuestro-objetivo">Nuestro objetivo</h3>

        <p>
          Queremos que Sonido Vivo continúe creciendo y acercándose
          a más personas interesadas en la música.
        </p>

        <p>
          A través de nuestra plataforma buscamos ofrecer una
          experiencia de consulta más cómoda, donde nuestros clientes
          puedan explorar instrumentos, conocer sus características
          y revisar la disponibilidad de los productos.
        </p>

        <p>
          Nuestro propósito es complementar la atención presencial
          con herramientas digitales que nos permitan mejorar la
          experiencia de nuestros clientes y optimizar el trabajo
          de nuestro equipo.
        </p>
      </section>

      <aside className="nosotros-cierre text-center p-4">
        <p className="fs-4 fw-bold mb-2">
          Sonido Vivo — La música nos conecta.
        </p>

        <p className="mb-0">
          Viña del Mar, Región de Valparaíso, Chile.
        </p>
      </aside>

    </article>
  );
}

export default ContenidoNosotros;