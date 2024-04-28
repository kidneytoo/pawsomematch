import Image from "next/image"


const FooterLogo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Image src="/images/logo/cosci.png" height={36} width={121} alt="Logo COSCI" />
      <Image src="/images/logo/inno.png" height={36} width={48} alt="Logo Inno" />
    </div>
  )
}

export default FooterLogo;