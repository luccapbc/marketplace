import "./SideBar.css"

const SideBar = () => {
   return (
      <aside className="menu">
         <ul>
            <div className="efeito-fixo">
               <a>Beef</a>
            </div>
            <div className="efeito-ligado">
               <a>Chicken</a>
            </div>
            <div className="efeito-ligado">
               <a>Seafood</a>
            </div>
            <div className="efeito-ligado">
               <a>Pasta</a>
            </div>
            <div className="efeito-ligado">
               <a>Vegetarian</a>
            </div>
            <div className="efeito-ligado">
               <a>Breakfast</a>
            </div>


         </ul>
      </aside>
   )
}


export default SideBar;