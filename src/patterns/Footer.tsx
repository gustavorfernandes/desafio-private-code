/* eslint-disable @next/next/no-img-element */

function Footer() {
  return (
    <div className="w-screen flex items-center justify-center absolute bottom-0 bg-white h-24 lg:h-[7.5rem] border-t">
      <div className="w-11/12 flex items-center gap-4">
        <div>
          <img
            className="w-12 xl:w-16 rounded-full lg:mr-3"
            src="/images/profile.png"
            alt="Perfil"
          />
        </div>
        <span className="font-medium  text-neutralPrivateCode-600 text-sm xl:text-xl">
          Amanda Morais
        </span>
      </div>
    </div>
  )
}

export default Footer
