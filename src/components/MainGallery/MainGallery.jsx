import "./MainGallery.css";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery'
import Image1 from "../../assets/images/climb-1.jpg";
import Image2 from "../../assets/images/climb-2.jpg";
import Image3 from "../../assets/images/climb-3.jpg";
import Image4 from "../../assets/images/climb-4.jpg";

const MainGallery = () => {
	return(
		<div className="gallery-container">
			<Gallery>
				<div className="gallery-item">
					<Item
						original={Image1.src}
						thumbnail={Image1.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image1.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image2.src}
						thumbnail={Image2.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image2.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image3.src}
						thumbnail={Image3.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image3.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image4.src}
						thumbnail={Image4.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image4.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image3.src}
						thumbnail={Image3.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image3.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image4.src}
						thumbnail={Image4.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image4.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image1.src}
						thumbnail={Image1.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image1.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image2.src}
						thumbnail={Image2.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image2.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image1.src}
						thumbnail={Image1.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image1.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image2.src}
						thumbnail={Image2.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image2.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image3.src}
						thumbnail={Image3.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image3.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image4.src}
						thumbnail={Image4.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image4.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image3.src}
						thumbnail={Image3.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image3.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image4.src}
						thumbnail={Image4.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image4.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image1.src}
						thumbnail={Image1.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image1.src} />
						)}
					</Item>
				</div>
				<div className="gallery-item">
					<Item
						original={Image2.src}
						thumbnail={Image2.src}
						width="1024"
						height="768"
						>
						{({ ref, open }) => (
							<img className="img-responsive" ref={ref} onClick={open} src={Image2.src} />
						)}
					</Item>
				</div>
		</Gallery>
  </div>
  );
};

export default MainGallery;
