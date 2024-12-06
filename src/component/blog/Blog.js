import "./Blog.css"
import axe1 from '../../assest/images/post-1.jpg'
import axe2 from '../../assest/images/post-2.jpg'
import axe3 from '../../assest/images/post-3.jpg'
import BlogCol from "./BlogCol"

let array =[
  {id : 1 , axe : axe1 , title : 'camping' , text : '(1)Proin eget tortor risus.', time : '10'},
  {id : 2 , axe : axe2 , title : 'cooking' , text : '(2)Proin eget tortor risus.', time : '8'},
  {id : 3 , axe : axe3 , title : 'office' , text : '(3)Proin eget tortor risus.', time : '16'}
]

function Blog(){
  return(
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
         {array.map( blog => <BlogCol key={array.id} {...blog}></BlogCol>)}
        </div>
      </div>
    </section>
  )
}
export default Blog