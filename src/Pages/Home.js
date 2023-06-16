import Contact from "../Component/Contact/Contact";
import FormComp from "../Component/Form/Form";

function Home({ formSubB, contactsB,deletedContact,favTogggle }) {
 // console.log(contactsB);
console.log(contactsB.length);

  return (
    <div>
      <h2>The Home Page</h2>
      <FormComp formSubC={formSubB} />
      {contactsB.map( itm =>
          <Contact key={itm.id} contactsC={itm} deletedContact={deletedContact} favTogggle={favTogggle} />
      )}
       {contactsB.length===0 && <div><h4>no Contacts........!</h4></div>}
    </div>
  );
}

export default Home;
