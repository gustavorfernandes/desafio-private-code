/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <div className="w-screen flex items-center justify-center absolute bottom-0 bg-white h-24 border-t">
      <div className="w-10/12 flex items-center gap-4">
        <div>
          <img
            className="w-12 rounded-full "
            src="/images/profile.png"
            alt="Perfil"
          />
        </div>
        <span className="font-medium  text-neutralPrivateCode-600">
          Amanda Morais
        </span>
      </div>
    </div>
  )
}

export default Footer
