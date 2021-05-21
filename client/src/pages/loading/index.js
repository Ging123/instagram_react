import instagramIcone from '../../assets/instagram-icone.png';

const Loading = () => {
  const alt = "it was't possible to load this image";
  const elementStyle = {
    position:"absolute",
    top:"45%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    width:"100px"
  };

  return (
    <>
      <img src={instagramIcone} alt={alt} style={elementStyle}/>
    </>
  )
}

export default Loading;