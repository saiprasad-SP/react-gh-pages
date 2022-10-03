import "./Pstyles.scss";
export default function Projects() {
  return (
    <div className="project-body">
      <header>
        <div></div>project
      </header>
      <div className="card">
        <div className="project-card">
          <section className="left">
            <article>
              <h1>project title</h1>
              <h5>role title</h5>
            </article>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </section>
          <section className="right">
            <img
              src="https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_322,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leaflet.jpg"
              alt="not-found"
            />
          </section>
        </div>
      </div>
      <div className="blue-spark"></div>
    </div>
  );
}
