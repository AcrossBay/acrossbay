export const metadata = {
  title: "Contact Test | AcrossBay",
  description: "Pagina di test per invio form via Formspree",
};

export default function ContactTestPage() {
  return (
    <main style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <form
        action="https://formspree.io/f/xeovqqrn"
        method="POST"
        style={{width:360,padding:20,border:"1px solid #ddd",borderRadius:12}}
      >
        <h1 style={{fontSize:20,marginBottom:12}}>Test invio (Formspree)</h1>

        <label style={{display:"block",marginBottom:8}}>
          Nome
          <input
            type="text"
            name="name"
            required
            style={{width:"100%",padding:10,border:"1px solid #ccc",borderRadius:8}}
          />
        </label>

        <label style={{display:"block",marginTop:12,marginBottom:8}}>
          Email
          <input
            type="email"
            name="email"
            required
            style={{width:"100%",padding:10,border:"1px solid #ccc",borderRadius:8}}
          />
        </label>

        <label style={{display:"block",marginTop:12,marginBottom:8}}>
          Messaggio
          <textarea
            name="message"
            rows={4}
            required
            style={{width:"100%",padding:10,border:"1px solid #ccc",borderRadius:8}}
          />
        </label>

        <button
          type="submit"
          style={{marginTop:14,width:"100%",padding:12,border:"0",borderRadius:8,background:"#0f766e",color:"#fff",fontWeight:600}}
        >
          Invia TEST
        </button>

        <p style={{fontSize:12,color:"#666",marginTop:10}}>
          Endpoint: https://formspree.io/f/xeovqqrn
        </p>
      </form>
    </main>
  );
}
