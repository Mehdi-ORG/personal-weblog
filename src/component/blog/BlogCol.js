function BlogCol({axe , title , text ,time}) {
  return (
    <div className="col-4">
      <div className="blog-box">
        <div className="blog-img">
          <img src={axe} className="img-fluid" />
        </div>
        <div className="blog-content">
          <h3 className="blog-title">{title}</h3>
          <p className="blog-desc">
            {text}
          </p>
        </div>
        <div className="blog-footer">
          <div className="post-author">
            <p className="author">Mehdi Organji</p>
          </div>
          <div className="post-date">
            <span className="bi bi-clock"></span> {time} min
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogCol
