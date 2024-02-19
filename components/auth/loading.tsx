import Image from "next/image";

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image 
        src='https://img.icons8.com/ios/200/spinner-frame-5.png'
        alt="spinner-frame-5"
        width={100}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  )
}

export default Loading