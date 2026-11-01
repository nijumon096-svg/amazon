import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid px-3 my-3 custom-img-radius">
      <div className="banner-slider">
        <div className="banner-slide">
          <video
            className="w-100 rounded shadow-sm"
            style={{ height: "480px", objectFit: "cover" }}
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://m.media-amazon.com/images/I/B1Qtnj-y39L.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="banner-slide">
          <video
            className="w-100 rounded shadow-sm"
            style={{ height: "480px", objectFit: "cover" }}
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://m.media-amazon.com/images/I/B1Jrcvdk9tL.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="banner-slide">

          <img
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7a0fc37a-6791-4acd-811f-d159fc5bb0e2._SX855_.jpg"
            className="w-100 rounded shadow-sm" style={{ height: "480px", objectFit: "cover" }}
            alt="Banner 2"
          />
        </div>

        <div className="banner-slide">
          <img
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ccac76f8-8433-4cf7-98dd-e16611f4f372._SX855_.jpg"
            className="w-100 rounded shadow-sm" style={{ height: "480px", objectFit: "cover" }}
            alt="Banner 4"
          />
        </div>
      </div>


      <br />

      <div className="row g-3">
        {/* card 1 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>

            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51gSVwXJidL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51B-CGvONhL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51F0jIRMPwL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/41wr-GHRIJL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71rkDplMcJL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71i42op++8L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71zqHne+pmL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71cZTsv3FLL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71u0mFkK0tL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71v7GoGZ4FL._SR210,210_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/6178TCS4YHL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61Qm91ZK2AL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 4 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71xIbwtt23L._AC_AIweblab1374086,T2_FMavif_SF217.5,237_QL54_.jpg?aicid=homepage-faceout" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61T18EfkX0L._AC_AIweblab1374086,T2_FMavif_SF217.5,237_QL54_.jpg?aicid=homepage-faceout" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71EADoSqrwL._AC_AIweblab1374086,T2_FMavif_SF217.5,237_QL54_.jpg?aicid=homepage-faceout" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61f5ZCuSD6L._AC_AIweblab1374086,T2_FMavif_SF217.5,237_QL54_.jpg?aicid=homepage-faceout" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <br />

      <div className="row g-3">

        {/* കാർഡ് 1 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Weekend special deals on Electronics & accessories</h5>
              <Link
                to="/ElectronicsDeals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61R-5cPZY3L._SR210,210_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61KMfSvwBkL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61HfV6+tFhL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61rWqdC16rL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 2 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81z+3VQqBjL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81UJAcLx7FL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81d8n22xRwL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81siSlCyFSL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 3 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81lQVxp2t9L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71YPhqq2A4L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81PItFrrCkL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81P5HnCYlZL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 4 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/813dU4KvbEL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71rSEAhHIFL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71+ZRigfL6L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81m7zNBirSL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <br />

      <div className="row g-3">

        {/* കാർഡ് 1 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81HljIz6jdL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71woAlZ2XtL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81K5-3t+pKL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/819x1c9rDWL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 2 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/7194pd4VEIL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71kTzMqeJ6L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71aCBqXPYBL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71KjlJ-81wL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 3 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81WCZ498pvL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81pHwunbjhL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81-3IcheZmL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/8118Z85yi0L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 4 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61ZX-pECstL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61X4y8xidaL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71AzZdYFLjL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61schL9smhL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

      </div>


      <br />

      <div className="row g-3">

        {/* കാർഡ് 1 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61btLibd5AL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71Df06MTG0L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51e8HG0rJsL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61FBwk0S+WL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 2 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>


            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
            <div className="row g-2"> {/* Heading & Arrow Link to another page */}
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81ZfNXESiML._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81RPIl4MlQL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/81WyXOTgxWL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71quEXwmkGL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 3 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51v0DdATprL._SR420,420_.jpg" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51etN6cijwL._SR420,420_.jpg" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51sMY3OP26L._SR420,420_.jpg" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/41x7dvaQYGL._SR420,420_.jpg" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

        {/* കാർഡ് 4 */}
        <div className="col-6 col-md-6 col-xl-3">
          <div className="card deal-card p-3 border-0 shadow-sm" style={{ background: "linear-gradient(180deg, #ff9900 0%, #ffcc00 100%)", borderRadius: "15px" }}>
            {/* Heading & Arrow Link to another page */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Trending deals</h5>
              <Link
                to="/deals"
                className="text-dark text-decoration-none d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>

            <div className="row g-2">
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/71qnO5tXLrL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 1" />
                <p className="small text-muted mt-1 mb-0">Cetaphil Gentle...</p>
                <span className="badge bg-danger">66% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/614QuPWDMtL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 2" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/61fy4nJb8cL._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 3" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
              <div className="col-6 text-center">
                <img src="https://m.media-amazon.com/images/I/51sveONjy+L._SR420,420_.png" className="img-fluid rounded" style={{ height: "100px", objectFit: "contain", borderRadius: "10px" }} alt="Item 4" />
                <p className="small text-muted mt-1 mb-0">CELLO Aurum...</p>
                <span className="badge bg-danger">48% off</span>
              </div>
            </div>
          </div>
        </div>

      </div>










      <div className="home-container">

        {/* Hero Banner Section (Optional) */}
        <div className="hero-banner-section mb-4">
          {/* ആമസോൺ ഹോം പേജ് ബാനറുകൾ ഇവിടെ ചേർക്കാം */}
        </div>

        {/* Customers who viewed items in your browsing history also viewed - Slider Section */}
        <div className="container-fluid px-3 my-4 position-relative">

          {/* Heading & Page indicator */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold m-0" style={{ fontSize: "20px" }}>
              Customers who viewed items in your browsing history also viewed
            </h4>
            <span className="text-muted" style={{ fontSize: "14px" }}>Page 1 of 4</span>
          </div>

          {/* Horizontal Scrollable Row with Slider Buttons */}
          <div className="position-relative slider-wrapper-container">

            {/* Left Arrow Button */}
            <button
              className="slider-nav-btn slider-prev-btn"
              onClick={() => handleScroll("left")}
            >
              &#10094;
            </button>

            <div
              className="d-flex gap-3 overflow-auto pb-3 scrollbar-hidden"
              style={{ scrollBehavior: "smooth" }}
              ref={sliderRef}
            >
              {/* Product 1 */}
              <div className="card p-3 border shadow-sm flex-shrink-0" style={{ width: "210px", borderRadius: "8px" }}>
                <div className="text-center mb-2" style={{ height: "180px" }}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/71xIbwtt23L._AC_UL330_SR330,330_.jpg"
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                    alt="Product 1"
                  />
                </div>

                <a href="#" className="small custom-product-link mb-1 text-decoration-none text-dark" style={{ fontSize: "13px" }}>
                  Samsung Galaxy M17 5G Mobile (Sapphire Black, 4GB RAM, 128GB Storage) | 50MP OIS Triple Camera | Super ...
                </a>
                <div className="text-warning small mb-1">
                  ★★★★☆ <span className="text-muted" style={{ fontSize: "11px" }}>910</span>
                </div>
                <div className="mb-1">
                  <span className="fs-5 fw-bold text-dark">-34%</span>
                  <span className="fs-5 fw-bold ms-1">₹32,999.00</span>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  M.R.P.: <span className="text-decoration-line-through">₹49,999.00</span>
                </div>
                <div className="badge bg-danger text-white mt-2 mb-1" style={{ fontSize: "10px" }}>
                  Great Indian Festival
                </div>
                <div className="text-dark mt-1" style={{ fontSize: "11px" }}>
                  Get it by <b>Wednesday, October 21</b>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  FREE Delivery by Amazon
                </div>
              </div>

              {/* Product 2 */}
              <div className="card p-3 border shadow-sm flex-shrink-0" style={{ width: "210px", borderRadius: "8px" }}>
                <div className="text-center mb-2" style={{ height: "180px" }}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/61ULimPWODL._AC_UL330_SR330,330_.jpg"
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                    alt="Product 2"
                  />
                </div>
                <a href="#" className="small custom-product-link mb-1 text-decoration-none text-dark" style={{ fontSize: "13px" }}>
                  Samsung Galaxy A36 5G (Dark Blue, 8GB RAM, 128GB Storage) | Snapdragon 6 Gen 3 ...
                </a>
                <div className="text-warning small mb-1">
                  ★★★★☆ <span className="text-muted" style={{ fontSize: "11px" }}>182</span>
                </div>
                <div className="mb-1">
                  <span className="fs-5 fw-bold text-dark">-10%</span>
                  <span className="fs-5 fw-bold ms-1">₹71,999.00</span>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  M.R.P.: <span className="text-decoration-line-through">₹79,900.00</span>
                </div>
                <div className="text-dark mt-3" style={{ fontSize: "11px" }}>
                  Get it by <b>Wednesday, October 21</b>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  FREE Delivery by Amazon
                </div>
              </div>

              {/* Product 3 */}
              <div className="card p-3 border shadow-sm flex-shrink-0" style={{ width: "210px", borderRadius: "8px" }}>
                <div className="text-center mb-2" style={{ height: "180px" }}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/61x2YvxqdGL._AC_UL330_SR330,330_.jpg"
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                    alt="Product 3"
                  />
                </div>
                <a href="#" className="small custom-product-link mb-1 text-decoration-none text-dark" style={{ fontSize: "13px" }}>
                  OnePlus Nord CE6 Lite | 8GB+128GB | Hyper Black | Segment's Fastest Dimensity 7400 Apex Processor ...
                </a>
                <div className="text-warning small mb-1">
                  ★★★★☆ <span className="text-muted" style={{ fontSize: "11px" }}>137</span>
                </div>
                <div className="mb-1">
                  <span className="fs-5 fw-bold text-dark">-34%</span>
                  <span className="fs-5 fw-bold ms-1">₹1,34,999.00</span>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  M.R.P.: <span className="text-decoration-line-through">₹2,04,999.00</span>
                </div>
                <div className="badge bg-danger text-white mt-1 mb-1" style={{ fontSize: "10px" }}>
                  Great Indian Festival
                </div>
                <div className="text-dark" style={{ fontSize: "11px" }}>
                  Get it by <b>Wednesday, October 21</b>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  FREE Delivery by Amazon
                </div>
              </div>

              {/* Product 4 */}
              <div className="card p-3 border shadow-sm flex-shrink-0" style={{ width: "210px", borderRadius: "8px" }}>
                <div className="text-center mb-2" style={{ height: "180px" }}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/61T18EfkX0L._AC_UL330_SR330,330_.jpg"
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                    alt="Product 4"
                  />
                </div>
                <a href="#" className="small custom-product-link mb-1 text-decoration-none text-dark" style={{ fontSize: "13px" }}>
                  OnePlus Nord CE6 | 8GB+128GB | Pitch Black | Snapdragon 7s Gen 4 | Segment's Fastest Touch ...
                </a>
                <div className="text-warning small mb-1">
                  ★★★★☆ <span className="text-muted" style={{ fontSize: "11px" }}>1,012</span>
                </div>
                <div className="mb-1">
                  <span className="fs-5 fw-bold text-dark">-16%</span>
                  <span className="fs-5 fw-bold ms-1">₹28,499.00</span>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  M.R.P.: <span className="text-decoration-line-through">₹33,999.00</span>
                </div>
                <div className="badge bg-danger text-white mt-1 mb-1" style={{ fontSize: "10px" }}>
                  Mega Festival Deal
                </div>
                <div className="text-dark" style={{ fontSize: "11px" }}>
                  Get it by <b>Wednesday, October 21</b>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  FREE Delivery by Amazon
                </div>
              </div>

              {/* Product 5 */}
              <div className="card p-3 border shadow-sm flex-shrink-0" style={{ width: "210px", borderRadius: "8px" }}>
                <div className="text-center mb-2" style={{ height: "180px" }}>
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/61Di24QT6GL._AC_UL330_SR330,330_.jpg"
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                    alt="Product 5"
                  />
                </div>
                <a href="#" className="small custom-product-link mb-1 text-decoration-none text-dark" style={{ fontSize: "13px" }}>
                  REDMI Turbo 5 (8GB + 256GB) Asphalt Black | Dimensity 8500 Ultra | Mega 7540mAh Battery
                </a>
                <div className="text-warning small mb-1">
                  ★★★★☆ <span className="text-muted" style={{ fontSize: "11px" }}>3,481</span>
                </div>
                <div className="mb-1">
                  <span className="fs-5 fw-bold text-dark">-12%</span>
                  <span className="fs-5 fw-bold ms-1">₹35,999.00</span>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  M.R.P.: <span className="text-decoration-line-through">₹40,999.00</span>
                </div>
                <div className="text-dark mt-3" style={{ fontSize: "11px" }}>
                  Get it by <b>Friday, October 23</b>
                </div>
                <div className="text-muted" style={{ fontSize: "11px" }}>
                  FREE Delivery by Amazon
                </div>
              </div>

            </div>

            {/* Right Arrow Button */}
            <button
              className="slider-nav-btn slider-next-btn"
              onClick={() => handleScroll("right")}
            >
              &#10095;
            </button>

          </div>

        </div>

      </div>
      <div className="personalized-container">
        <div className="personalized-card">
          <h2>See personalized recommendations</h2>
          <button className="sign-in-btn">Sign in</button>
          <div className="new-customer">
            New customer? <a href="#start" onClick={(e) => e.preventDefault()}>Start here.</a>
          </div>
        </div>
      </div>

      <footer className="amazon-footer">
        {/* Back to top button */}
        <div className="back-to-top" onClick={scrollToTop}>
          Back to top
        </div>

        {/* Footer Links Columns */}
        <div className="footer-links-container">
          <div className="footer-col">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar (Logo & Language) */}
        <div className="footer-bottom">
          <Link className=" navbar-brand d-flex align-items-center m-0" to="/" style={{ padding: "5px 10px", cursor: "pointer" }}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon.in"
              style={{ width: "100px", objectFit: "contain", marginTop: "5px" }}
            />
          </Link>
          <div className="footer-dropdowns">
            <button className="footer-btn">🌐 English</button>
            <button className="footer-btn">🇮🇳 India</button>
          </div>
        </div>
      </footer>


      <div className="sub-footer">
        {/* Services Grid */}
        <div className="footer-grid">
          <div className="footer-box">
            <a href="#abebooks">
              <span className="box-title">AbeBooks</span>
              <span className="box-desc">Books, art<br />& collectibles</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#aws">
              <span className="box-title">Amazon Web Services</span>
              <span className="box-desc">Scalable Cloud<br />Computing Services</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#audible">
              <span className="box-title">Audible</span>
              <span className="box-desc">Download<br />Audio Books</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#imdb">
              <span className="box-title">IMDb</span>
              <span className="box-desc">Movies, TV<br />& Celebrities</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#shopbop">
              <span className="box-title">Shopbop</span>
              <span className="box-desc">Designer<br />Fashion Brands</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#business">
              <span className="box-title">Amazon Business</span>
              <span className="box-desc">Everything For<br />Your Business</span>
            </a>
          </div>
          <div className="footer-box">
            <a href="#music">
              <span className="box-title">Amazon Music</span>
              <span className="box-desc">Stream millions of<br />songs</span>
            </a>
          </div>
        </div>

        {/* Policies and Copyright */}
        <div className="footer-policies">
          <div className="policy-links">
            <a href="#conditions">Conditions of Use & Sale</a>
            <a href="#privacy">Privacy Notice</a>
            <a href="#ads">Interest-Based Ads</a>
          </div>
          <div className="copyright">
            © 1996-2026, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>


  );
}

export default Home;