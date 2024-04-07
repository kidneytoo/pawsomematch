type ResultInfoProps = {
  title: string;
  children: React.ReactNode;
}
const ResultInfo = ({title, children }: ResultInfoProps) => {
  return (
    <div className="flex flex-col w-full h-full items-stretch border-2 border-brown-bg rounded-2xl overflow-hidden">
      <div className="py-1 bg-brown-bg">
        <p className="text-center text-white font-bold">{title}</p>
      </div>
      <div className="p-2 flex-grow bg-white text-brown-text text-center flex items-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
export default ResultInfo
