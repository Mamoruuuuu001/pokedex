import "./Topbar.css"
import pokeball from "../images/pokeball.png"
import pokeballshadow from "../images/pokeballshadow.png"

function Topbar() {
  return (
    <div className="title">
        <div className="title__left">
        <p>Pokedex</p>
            <div className="caught-seen">
                <div className="caught">
                    <img src={pokeball} alt="pokeball" style={{width:"30px",marginRight:"10px"}}/>
                    <p>438</p>
                </div>

                <div className="seen">
                    <img src={pokeballshadow} alt="pokeball_bw" style={{width:"30px",marginRight:"10px"}}/>
                    <p>649</p>
                </div>
            </div>
        </div>
        <p style={{color:"white"}}>A -&gt; Z</p>
    </div>
  );
}

export default Topbar;