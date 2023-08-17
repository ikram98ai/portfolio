interface Props{
    imageUrl:string;
    setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}
const ImageModal = ({ imageUrl,setImageUrl }:Props) => {
  return (
    <div onClick={()=>setImageUrl("")} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black absolute inset-0 opacity-50"></div>
      <div className="relative z-10">
        {/* <button className="absolute top-2 right-2 text-white text-xl" onClick={onClose}>
          &times;
        </button> */}
        <img src={imageUrl}  alt="Full-size" className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto" />
      </div>
    </div>
  );
};

export default ImageModal;
