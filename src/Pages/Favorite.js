
import Contact from "../Component/Contact/Contact";

function Favorite({ contactsB, deletedContact, favTogggle}) {
  console.log('inside favorite page',contactsB);
  return (
    <div>
      <h2>Favorite Page</h2>
      
       {contactsB.map (itm =>{
        return(
          itm.fav && (<Contact key={itm.id} contactsC={itm} deletedContact={deletedContact} favTogggle={favTogggle} />)
          )
        }
        )}
        {contactsB.filter(itm=>itm.fav).length===0 && <div><h4>No Favoorites Shown.....!</h4></div>}
    </div>
  )
}

export default Favorite;