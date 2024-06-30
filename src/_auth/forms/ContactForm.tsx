
const ContactForm = () => {
  return (
    <form action="" className="flex flex-col">
      <label htmlFor="name"></label>
      <h1>Nombre</h1>
      <input id="name" name="name" type="text" />
      <label htmlFor="email"></label>
      <h1>Correo electrónico</h1>
      <input id="email" name="email" type="email" />
      <label htmlFor="phone"></label>
      <h1>Teléfono</h1>
      <input id="phone" name="phone" type="text" />
    </form>

    // <form method="POST" className="flex flex-col mt-12">
    //   <label for="name">Nombre</label>

    //   <input id="name" name="name" className="rounded h-8 drop-shadow-lg text-slate-900 pl-2" required>

    //     <label for="email" class="mt-4">Correo electrónico</label>
    //     <input id="email" name="email" className="rounded h-8 drop-shadow-lg text-slate-900 pl-2" required>

    //       <label for="phone" class="mt-4">Teléfono</label>
    //       <input id="phone" name="phone" className="rounded h-8 drop-shadow-lg text-slate-900 pl-2" pattern="[679][0-9]{8}" required>

    //         <div className="flex flex-row gap-2 mt-10 ml-4">
    //           <input type="checkbox" id="conditions" required>
    //             <p>Acepto la política de privacidad</p>
    //         </div>
    //         <div className="flex justify-start mt-5">
    //           <button type="submit" class="rounded bg-blue-600 px-4 py-2">Enviar</button>
    //         </div>
    //       </form>
  )
}

export default ContactForm