import heartFull from "../../Component/assets/heart.svg";
import heart from "../../Component/assets/HeartFull.svg";

function Contact({contactsC: { name, email, phone, fav, id },deletedContact, favTogggle}) {
  // console.log(contactsC, "prop");
  //let [name,email,phone,fav,id] =contactsC
  //console.log(name, email, phone, fav, id, deletedContact);

  return (
    <div className="contact">
      <div className="items">
        <h2> {name}</h2>
        
        <div className="toggle-fav" onClick={() => {favTogggle(id);}}>
        {
          fav ? <img src={heart} width="23"/> :  <img src={heartFull} width="23"/>
          
        }
        </div>
         
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <h2>{id}</h2>
            <h2>{fav}</h2>
       
        
        <input type="submit" value="Delete" onClick={() => {deletedContact(id);}}/>
      </div>
    </div>
  );
}

export default Contact;
