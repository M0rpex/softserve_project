import { Link } from "react-router-dom";

function HomeHero() {
  const access = localStorage.getItem("access");
  return (
    <section>
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper">
            <div className="hero-component">
              <div
                data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a23"
                style={{
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="max-width-70ch"
              >
                <div className="heading-2 text-weight-bold">
                  Unlock the Future Smart Home AI
                </div>
              </div>
            </div>
            <div
              data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a26"
              style={{
                opacity: "1",
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="double-button-component margin-top-button-hero"
            >
              <Link to="/login" className="primary-button w-inline-block">
                <div className="relative">
                  <div className="text-size-small text-weight-bold">
                    { access ? 'Enter Dashboard' : "Get Started" }
                  </div>
                </div>
                <div
                  className="button-elipse"
                  style={{
                    opacity: "1",
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                ></div>
              </Link>
            </div>
            <div
              data-w-id="aa42755f-aac4-abbd-e604-8f2924a89a30"
              style={{
                opacity: "1",
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="trusted-by-component"
            >
              <div className="opacity-60">
                <div className="text-size-small">
                  Trusted by design teams at
                </div>
              </div>
              <div className="trusted-by-hero-logos">
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c98_Logos%20Grid%2002.svg"
                    alt="Logo"
                  />
                </div>
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c97_Logos%20Grid%2007.svg"
                    alt="Logo"
                  />
                </div>
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c96_Logos%20Grid%2009.svg"
                    alt="Logo"
                  />
                </div>
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c95_Logos%20Grid%2006.svg"
                    alt="Logo"
                  />
                </div>
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c94_Logos%20Grid%2010.svg"
                    alt="Logo"
                  />
                </div>
                <div className="logos">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64c8f_Logos%20Grid%2003.svg"
                    alt="Logo"
                  />
                </div>
                <div
                  id="w-node-aa42755f-aac4-abbd-e604-8f2924a89a41-aee64be3"
                  className="logos"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/66f30c8d2ac082d2aee64be2/66f30c8d2ac082d2aee64ce6_Logos03.svg"
                    alt="Logos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
