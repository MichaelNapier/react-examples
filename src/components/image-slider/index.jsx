import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchImages() {
            try {
                setLoading(true);
                const res = await fetch(`${url}?limit=${limit}?page=${page}`);
                const data = await res.json();
                if (data.length > 0) {
                    setImages(data);
                    setLoading(false);
                    setCurrentSlide(0);
                } else {
                    setErrorMsg("No images found");
                    setLoading(false);
                }
            } catch (e) {
                setErrorMsg(e.message);
                setLoading(false);
            }
        }

        fetchImages();
    }, [url, limit, page]);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
      }
    
      function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
      }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errorMsg !== null) {
        return <div>{errorMsg}</div>;
    }

    console.log(images);

    return (
        <div className="container">
            <h1>Image Slider</h1>
            <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
            {images && images.length ? images.map((imageItem, index) => (<img key={imageItem.id} alt={imageItem.download_url} src={imageItem.download_url} className={ currentSlide === index ? "current-image" : "current-image hide-current-image" } />)) : null}
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
            <span className='circle-indicators'>
                {images && images.length ? images.map((_, index) => (<button key={index} className={ currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator" } onClick={() => setCurrentSlide(index)}></button> )) : null}
            </span>
        </div>
    );
}
